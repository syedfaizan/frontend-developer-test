/**
 * Created by syedf on 20-08-2017.
 */
describe('testing home ctrl', function () {
    beforeEach(module('devTest.graph2'));
    it('checks scope value title', function () {

        var scope = {};
        var ctrl;

        inject(function ($controller) {
            ctrl = $controller('graph2Ctrl', {$scope: scope});
        });
        //expect(scope.test).toBe('test');
    })
});