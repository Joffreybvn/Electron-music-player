"use strict";

angular.module('Player.player', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/player', { templateUrl: './player/player.html', controller: 'PlayerCtrl' })
    }])

    .controller('PlayerCtrl', ['$scope', '$location', function($scope, $location){
        console.log("PLAYER!!!")
    }]);