angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $state, credendialService) {
        if (credendialService.getLoggedUser() == null)
            $state.go("login")

        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //$scope.$on('$ionicView.enter', function(e) {
        //});

    })

    .controller('LivrosCtrl', function ($scope, $state, $firebaseArray, credendialService) {
        // Busca uma lista de livros pela referencia
        $scope.user = credendialService.getLoggedUser();
        if ($scope.user != null)
            $scope.livros = $firebaseArray(database.ref($scope.user.uid + "/livros"));

        // Inicia a view de manipulação de livros com o um livro vazio para criação
        $scope.add = function () {
            let id = $scope.livros ? $scope.livros.length + 1 : 0;
            $state.go('app.livro', { idLivro: id })
        }
    })

    .controller('LivroCtrl', function ($scope, $stateParams, $firebaseObject, credendialService, $state) {
        // Busca um livro com base no id passado para o estado
        $scope.user = credendialService.getLoggedUser();
        if ($scope.user != null)
            $scope.livro = $firebaseObject(database.ref($scope.user.uid + "/livros/" + $stateParams.idLivro));

        // Salva as alterações do objeto livro seja ele um livro existente ou um novo cadastrado.
        $scope.salvar = function () {
            $scope.livro.$save();
            $state.go("app.livros")
        };
        // Retorna para view de livros.
        $scope.cancelar = function () {
            $state.go("app.livros")
        };
        // Remove um livro do banco de dados.
        $scope.remove = function () {
            $scope.livro.$remove();
            $state.go("app.livros")
        }
    })
    .controller('LoginCtrl', function ($scope, credendialService, $state) {
        $scope.googleLogin = function () {
            credendialService.googleLogin().then(function (hasLogged) {
                if (hasLogged) {
                    $state.go("app.livros");
                } else {
                    alert("Try again bitch")
                }
            })
        };
    })