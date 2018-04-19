angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

.controller('LivrosCtrl', function($scope, $state) {
  $scope.livros = [
    { titulo: 'Reggae', id: 1 },
    { titulo: 'Chill', id: 2 },
    { titulo: 'Dubstep', id: 3 },
    { titulo: 'Indie', id: 4 },
    { titulo: 'Rap', id: 5 },
    { titulo: 'Cowbell', id: 6 }
  ];

  $scope.add =function(){
    $state.go('app.livro', {idLivro: "new"})
  }
})

.controller('LivroCtrl', function($scope, $stateParams) {
    $scope.idLivro = $stateParams.idLivro;
    $scope.isCadastro = $scope.idLivro === "new";
    $scope.livro = {
      
    };
    $scope.save = function(){
      database.ref('livros/' + 1).set({
        isbn: "9781400069286",
        titulo: "O poder do hábito: Por que fazemos o que fazemos na vida e nos negócios",
        autores: "Charles Duhigg",
        genero: "Livro de autoajuda"
    });
    }
});
