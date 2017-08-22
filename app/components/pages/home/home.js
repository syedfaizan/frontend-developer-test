/**
 * Created by syedf on 22-08-2017.
 */

angular.module('devTest.home', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state({
                name: "home",
                url: "/",
                templateUrl: "components/pages/home/home.html"
            });
    }]);



