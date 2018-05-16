angular.module('starter.services', ['firebase'])
    .factory('credendialService', function ($firebaseAuth) {
        let service = {};
        service.loggedUser = null;
        var auth = $firebaseAuth();

        service.googleLogin = function () {
            return auth.$signInWithPopup("google").then(function (authResponse) {
                service.loggedUser = authResponse.user;
                return true;
            }).catch(function (error) {
                console.error("Authentication failed:", error);
                return true;
            });
        };

        service.getLoggedUser = function () {
            return this.loggedUser;
        }

        return service;
    });
