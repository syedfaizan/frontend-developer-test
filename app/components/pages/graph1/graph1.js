/**
 * Created by syedf on 22-08-2017.
 */
angular.module('devTest.graph1', ['ui.router', 'devTest.dataset'])

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state({
                name: "graph1",
                url: "/graph1",
                templateUrl: "components/pages/graph1/graph1.html",
                controller: "graph1Ctrl"
            });
    }])

    .controller('graph1Ctrl', ['$scope', 'datasetProvider', function ($scope, datasetProvider) {
        $scope.option1 = '';
        $scope.option2 = '';
        $scope.dataSource = [];
        $scope.data = [];
        $scope.labels = [];

        $scope.changeDataSource = function (source) {
            return datasetProvider.get(source)
                .then(function (response) {
                    $scope.dataSource = response.data;
                    $scope.optionsForYAxis = $scope.dataTransformForYAxis($scope.dataSource, source);
                    source = (source == 'streams') ? 'maxViewers' : source;
                    $scope.labels = _.map($scope.dataSource, source)
                })
        };

        $scope.dataTransformForYAxis = function ( dataSource , source) {
            var out = Object.keys(dataSource[0]);
            out.splice(out.indexOf(source), 1); // remove the source key from the array so we don't compare same source on both axes;
            return out;
        };

        $scope.chooseYaxis = function ( option ) {
            $scope.data = _.map($scope.dataSource, option).map(function ( item ) {
                if( item > 100000){
                    item /= 100000;
                }
                return item;
            });
        }
    }]);