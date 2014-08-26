var app = angular.module("app",['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/features")
      
      $stateProvider
      .state('features', {
      	url: "/features",
      	templateUrl: "features"
      })
      .state('details-01', {
      	url: "/details-01",
      	templateUrl: "details-01"
      })
      .state('details-02', {
      	url: "/details-02",
      	templateUrl: "details-02"
      })
      .state('details-03', {
      	url: "/details-03",
      	templateUrl: "details-03"
      })
      .state('details-04', {
      	url: "/details-04",
      	templateUrl: "details-04"
      })
  });