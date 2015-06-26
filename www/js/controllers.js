angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $location, $state,  LoginService) {
    })

    .controller('PlaylistsCtrl',function ($scope,  LoginService) {
        $scope.playlists = [
            {title: 'Reggae', id: 1},
            {title: 'Chill', id: 2},
            {title: 'Dubstep', id: 3},
            {title: 'Indie', id: 4},
            {title: 'Rap', id: 5},
            {title: 'Cowbell', id: 6}
        ];
    })

    .controller('PlaylistCtrl', function ($scope, $stateParams,  LoginService) {
    })

    .controller('SecureController', function ($scope,  LoginService) {
        $scope.login = LoginService.login;
        $scope.logout = LoginService.logout;
        $scope.data = LoginService.data;
    })


