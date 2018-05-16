angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //$scope.$on('$ionicView.enter', function(e) {
        //});

    })

    .controller('LivrosCtrl', function ($scope, $state, $firebaseArray) {
        // Busca uma lista de livros pela referencia
        $scope.livros = $firebaseArray(database.ref("livros"));

        // Inicia a view de manipulação de livros com o um livro vazio para criação
        $scope.add = function () {
            $state.go('app.livro', { idLivro: $scope.livros.length + 1 })
        }
    })

    .controller('LivroCtrl', function ($scope, $stateParams, $firebaseObject, $state) {
        // Busca um livro com base no id passado para o estado
        $scope.livro = $firebaseObject(database.ref("livros/" + $stateParams.idLivro));

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
    .controller('LoginCtrl', function ($scope, $stateParams, $firebaseAuth, $state) {
        var auth = $firebaseAuth();
        $scope.googleLogin = function () {
            auth.$signInWithPopup("google").then(function (firebaseUser) {
                console.log("Signed in as:", firebaseUser.user);
                $scope.img = "https://lh6.googleusercontent.com/-avSlRRZUbN4/AAAAAAAAAAI/AAAAAAAAD8I/JuG8GzxBNiQ/photo.jpg";
            }).catch(function (error) {
                console.log("Authentication failed:", error);
            });
        };
    })