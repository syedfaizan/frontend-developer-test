/**
 * Created by syedf on 20-08-2017.
 */

angular.module('devTest.home', ['ui.router', 'devTest.dataset'])

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state({
            name: "default",
            url: "/",
            templateUrl: "components/pages/home/home.html",
            controller: "homeCtrl"
        });
    }])

    .controller('homeCtrl', ['$scope', 'datasetProvider', function ($scope, datasetProvider) {
        $scope.typeOfData = 'audience';
        $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72'];

        var dataTransform = function (response) {
            var data = _.get(response.data, $scope.typeOfData);
            return {
                x: data.map(function( item ) {return new Date(item[0]).toLocaleString()}),
                y: data.map(function ( item ) { return item[1] })
            }
        };

        $scope.submit = function submit( typeOfData ) {
            typeOfData = typeOfData.split('.')[0];
            return datasetProvider.get(typeOfData)
                .then(dataTransform)
                .then(function ( payload ) {

                    $scope.x = payload.x;
                    $scope.y = payload.y;
                });
        };

        $scope.submit($scope.typeOfData);



    }]);