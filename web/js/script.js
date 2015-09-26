
(function () {
    var app = angular.module('FirstRespondersOfflineData', ['ui.router']);
    app.controller('Alert',['$scope', '$http', '$interval', function ($scope, $http, $interval) {
        $http.get('http://192.168.160.52:28080/FirstRespondersDBInterfaceMessages-1.0-SNAPSHOT/api/message/allData')
            .success(function (data, status, headers, config)
            {
                $scope.message = data;
            })
            .error(function(data, status, headers, config)
            {});
        $interval(function () {
            $http.get('http://192.168.160.52:28080/FirstRespondersDBInterfaceMessages-1.0-SNAPSHOT/api/message/allData')
                .success(function (data, status, headers, config)
                {
                    $scope.message = data;
                })
                .error(function(data, status, headers, config)
                {});
        }, 5000);
    }]);
    
    app.controller('Mission',['$scope', '$http', '$interval', function ($scope, $http, $interval) {
        $http.get('http://192.168.160.52:28080/FirstRespondersDBInterfaceLogics-1.0-SNAPSHOT/api/mission/allData')
            .success(function (data, status, headers, config)
            {
                $scope.mission = data;
            })
            .error(function(data, status, headers, config)
            {});
        $interval(function () {
            $http.get('http://192.168.160.52:28080/FirstRespondersDBInterfaceLogics-1.0-SNAPSHOT/api/mission/allData')
                .success(function (data, status, headers, config)
                {
                    $scope.mission = data;
                })
                .error(function(data, status, headers, config)
                {});
        }, 5000);
    }]);

    app.controller('Firefighter',['$scope', '$http', '$interval', function ($scope, $http, $interval) {
        $http.get('http://192.168.160.52:28080/FirstRespondersDBInterfaceLogics-1.0-SNAPSHOT/api/bombeiro/allData')
                .success(function (data, status, headers, config)
                {
                    $scope.firefighter = data;
                })
                .error(function(data, status, headers, config)
            {});
        $interval(function () {
            $http.get('http://192.168.160.52:28080/FirstRespondersDBInterfaceLogics-1.0-SNAPSHOT/api/bombeiro/allData')
                .success(function (data, status, headers, config)
                {
                    $scope.firefighter = data;
                })
                .error(function(data, status, headers, config)
            {});
        }, 5000);
    }]);

    app.config(function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/alarmsState");
        //
        // Now set up the states
        $stateProvider
          .state('state1', {
            url: "/alarmsState",
            templateUrl: "partials/alarmsState.html",
            controller: "Alert"
          })
          .state('state2', {
            url: "/firefighterState",
            templateUrl: "partials/firefighterState.html",
            controller: "Firefighter"
          })
          .state('state3', {
            url: "/missionState",
            templateUrl: "partials/missionState.html",
            controller: "Mission"
          });
    });

})();