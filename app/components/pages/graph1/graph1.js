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
                    source = source == 'streams'? 'maxViewers' : source;
                    $scope.labels = _.map($scope.dataSource, source);
                })
        };

        $scope.chooseYaxis = function ( option ) {
            $scope.data = _.map($scope.dataSource, option);
        }
    }]);