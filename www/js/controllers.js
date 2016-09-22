angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicPlatform) {

  $scope.controller_end = "waiting";
  $scope.platform_ready = "waiting";
  $scope.on_resume = "waiting";

  ionic.Platform.ready(function() {
    $scope.platform_ready = "working";
    $scope.$apply();
  });

  $ionicPlatform.on("resume", function() {
    $scope.on_resume = "working";
    $scope.$apply();    
  });

  $scope.controller_end = "done";
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
