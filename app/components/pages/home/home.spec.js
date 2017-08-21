/**
 * Created by syedf on 20-08-2017.
 */
describe('Testing the app,', function () {
    describe('testing home ctrl', function () {
        beforeEach(module('devTest.home'));
        it('checks scope value title', function () {

            var scope = {};
            var ctrl;

            inject(function ($controller) {
                ctrl = $controller('homeCtrl', {$scope: scope});
            });
            expect(scope.test).toBe('test');
        })
    });
});