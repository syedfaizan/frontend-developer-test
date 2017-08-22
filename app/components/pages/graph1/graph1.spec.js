/**
 * Created by syedf on 22-08-2017.
 */
describe("Tests the units of graph1Ctrl", function () {
    var ctrl, scope ={};
    beforeEach(module('devTest.graph1'));
    it('verifies default select values', function () {

        var scope = {};
        var ctrl;

        inject(function ($controller) {
            ctrl = $controller('graph1Ctrl', {$scope: scope});
        });

        expect(scope.option1).toBeDefined();
        expect(scope.option2).toBeDefined();
    })

});