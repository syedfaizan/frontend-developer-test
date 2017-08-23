/**
 * Created by syedf on 20-08-2017.
 */

angular.module('devTest.graph2', ['ui.router', 'devTest.dataset'])

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state({
                name: "graph2",
                url: "/graph2",
                templateUrl: "components/pages/graph2/graph2.html",
                controller: "graph2Ctrl"
            });
    }])

    .controller('graph2Ctrl', ['$scope', 'datasetProvider', function ($scope, datasetProvider) {
        $scope.colors = ['#4444', '#fff', '#ff8e72'];
        $scope.series = ['Audience', 'CDN (GB)', 'P2P (GB)'];
        $scope.datasetOverride = [{ yAxisID: 'y-axis-2' }, { yAxisID: 'y-axis-1' }];
        $scope.options = {
            scales: {
                yAxes: [
                    {
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'left'
                    },
                    {
                        id: 'y-axis-2',
                        type: 'linear',
                        display: true,
                        position: 'right'
                    }
                ]
            }
        };
        var unitTransform = function (input) {
            return {
                labels: input.map(function (item) {
                    return new Date(item[0]).toLocaleString();
                }),
                data: input.map(function (item) {
                    return item[1];
                })
            }
        };

        var dataTransform = function (input) {
            var out = [];
            for (var i in input) {
                if (Array.isArray(input[i])) {
                    out.push(unitTransform(input[i]));
                }
            }
            return out;
        };

        $scope.dataTransform = dataTransform;
        $scope.unitTransform = unitTransform;

        $scope.updateGraphData = function () {
            var audience, bandwidth;
            datasetProvider.get('audience')
                .then(function (data) {
                    audience = data.data;
                    return datasetProvider.get('bandwidth');
                })
                .then(function (res) {
                    bandwidth = res.data;
                    audience = dataTransform(audience);
                    bandwidth = dataTransform(bandwidth);
                    var data = [];
                    var labels = [];

                    audience.map(function (item) {
                        data.push(item.data);
                    });

                    bandwidth.map(function (item) {
                        item.data = item.data.map(function( item ) {
                          return item / 100000;
                        });
                        data.push(item.data);
                        labels = item.labels;
                    });
                    $scope.data = data;
                    $scope.labels = labels;

                })

        };

        $scope.updateGraphData();

    }]);