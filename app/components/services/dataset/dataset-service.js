/**
 * Created by syedf on 20-08-2017.
 */

angular.module('devTest.dataset', [])

.service('datasetProvider', ['$http', function ($http) {
    return {
        get : function ( resource ) {
            return $http.get('data/' + resource + '.json' );
        }
    }
}]);