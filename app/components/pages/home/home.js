/**
 * Created by syedf on 20-08-2017.
 */

angular.module('devTest.home', ['ui.router','devTest.dataset'])

.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state({
        name: "default",
        url: "/",
        templateUrl: "home/home.html",
        controller: "homeCtrl"
    });
}])

.controller('homeCtrl', ['$scope','datasetProvider', function ( $scope ,datasetProvider) {
    $scope.test = "test";
    datasetProvider.get('audience')
        .then(function (response) {
            //console.log(response.data)
            $scope.audience = response.data.audience;
            $scope.audience.forEach(function(d) { d[0] = new Date(d[0]); });
            console.log($scope.audience)
        })
}]);