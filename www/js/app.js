// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAUL1Jz6QaNkBv1gtOOPeKhd8NC3Qd2XSs",
    authDomain: "mempreste.firebaseapp.com",
    databaseURL: "https://mempreste.firebaseio.com",
    projectId: "mempreste",
    storageBucket: "mempreste.appspot.com",
    messagingSenderId: "1061869024419"
};
firebase.initializeApp(config);
var database = firebase.database();

// Initialize app
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ionic.native', 'ion-floating-menu', 'firebase'])

    .run(function ($ionicPlatform, $cordovaSQLite) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                if (window.StatusBar) {
                    StatusBar.backgroundColorByHexString('#C43C00');
                    //StatusBar.styleDefault();
                  }
            }

        });
    })

    // Definição dos estados(funções) da app
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            })

            .state('app.livros', {
                url: '/livros',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/livros.html',
                        controller: 'LivrosCtrl'
                    }
                }
            })

            .state('app.livro', {
                url: '/livros/:idLivro',
                params:{time: null},
                views: {
                    'menuContent': {
                        templateUrl: 'templates/livro.html',
                        controller: 'LivroCtrl'
                    }
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/login');
    });
