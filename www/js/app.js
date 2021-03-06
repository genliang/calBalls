// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ui.router']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/main");
  $stateProvider
    .state('main',{
      url: '/main',
      templateUrl: 'views/main.html',
      controller: 'Calculator'
    })
    .state('showCombination',{
      url: '/showCombination',
      templateUrl: 'views/showCombination.html',
      controller: 'Display'
    })
});

/*app.controller('Calculator', function($scope){
  console.log('Controller is loading...');
  $scope.startAlgo = function(){
    console.log('start Algo...');
    console.log($scope.numPeople);
  };
});*/

app.factory('Storage', function(){
  var buf = [];
  return {
    sendItems: function(items){
      console.log("Items received!");
      buf = items.slice();
      console.log(buf);
    },

    getItems: function(){
      return buf;
    },

    clearItems: function(){
      console.log("Clear Items in storage!");
      buf.length = 0;
      console.log(buf);
      
    }
  }
});