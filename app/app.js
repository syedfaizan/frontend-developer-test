/**
 * Created by syedf on 20-08-2017.
 */

angular.module('devTest', [
    'ui.router',
    'chart.js',
    'devTest.graph1',
    'devTest.graph2',
    'devTest.dataset',
    'devTest.home'
]).
config([
    '$locationProvider',
    '$stateProvider',
    '$urlRouterProvider',
    function($locationProvider, $stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}]);