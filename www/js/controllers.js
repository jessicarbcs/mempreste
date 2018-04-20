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
    $scope.livros = $firebaseArray(database.ref("livros"));

    $scope.add = function () {
      $state.go('app.livro', { idLivro: $scope.livros.length + 1 })
    }
  })

  .controller('LivroCtrl', function ($scope, $stateParams, $firebaseObject, $state) {
    $scope.livro = $firebaseObject(database.ref("livros/" + $stateParams.idLivro));

    $scope.salvar = function () {
      $scope.livro.$save();
      $state.go("app.livros")
    };
    $scope.cancelar = function () {
      $state.go("app.livros")
    };
    $scope.remove = function(){
      $scope.livro.$remove();
      $state.go("app.livros")
    }
  });
