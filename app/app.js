/**
 * Created by syedf on 20-08-2017.
 */

angular.module('devTest', [
    'ui.router',
    'chart.js',
    'devTest.home',
    'devTest.dataset'
]).
config([
    '$locationProvider',
    '$stateProvider',
    '$urlRouterProvider',
    function($locationProvider, $stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}]);