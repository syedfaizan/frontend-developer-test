/**
 * Created by syedf on 20-08-2017.
 *
 * The root of angular app
 */

angular.module('devTest', [
    'ui.router', // list of modules required for the app to run
    'chart.js',
    'devTest.graph1',
    'devTest.graph2',
    'devTest.dataset',
    'devTest.home'
]).
config([
    '$urlRouterProvider',
    function ($urlRouterProvider) {
        // any gibberish url will redirect to '/' url
        $urlRouterProvider.otherwise('/');
    }
]);