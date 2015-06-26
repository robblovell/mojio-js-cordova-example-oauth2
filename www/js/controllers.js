angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $location, $state) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
  //  $scope.modal.show();
  //};
  //
  //// Perform the login action when the user submits the login form
  //$scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
      var clientId = "576f5522-9b0c-4f1a-82d4-4b4fbb7272bc";
      var ref = window.open('https://api.moj.io/OAuth2/authorize?client_id=' + clientId + '&redirect_uri=http://localhost/callback&response_type=token', '_blank', 'location=no');
      ref.addEventListener('loadstart', function(event) {
          console.log('Login Result: ', JSON.stringify(event));
          if((event.url).indexOf("http://localhost/callback")==0) {
              console.log("Event url: "+event.url);
              if (event.url.indexOf("access_token=") >= 0) {
                  requestToken = (event.url).split("access_token=")[1].split("&")[0];
                  // $location.path("/secure/" + requestToken);

                  $state.go("app.secure", {accessToken: requestToken});
                  ref.close();
              }
          }
      });
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})
//
.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('SecureController', function($scope, $stateParams) {
    accessToken = $stateParams['accessToken'];

    $scope.accessToken = accessToken;

})
    .controller('LoginController', function($scope, $stateParams) {
        accessToken = $stateParams['accessToken'];
        $scope.accessToken = accessToken;
    });
