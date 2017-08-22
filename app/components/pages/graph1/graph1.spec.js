/**
 * Created by syedf on 22-08-2017.
 */
describe("Tests the units of graph1Ctrl", function () {
    var ctrl, scope = {};
    var dummyDataSetProvider;
    var dummyDataSource = [
        {
            "cdn": 6.593584e+07,
            "p2p": 1.0134788e+07,
            "total": 7.6070628e+07,
            "percentage": 14,
            "country": "DM"
        },
        {
            "cdn": 2.931124e+07,
            "p2p": 3.5639188e+07,
            "total": 6.4950428e+07,
            "percentage": 55,
            "country": "KG"
        }
    ];
    var dummySource = 'country';


    var dummyResponse = {
        data: [{title:'myTitle'}, {title:'myTitle2'}]
    };

    beforeEach(module('devTest.graph1'));

    it('verifies default select values', function () {

        var scope = {};
        var ctrl;

        inject(function ($controller) {
            ctrl = $controller('graph1Ctrl', {$scope: scope});
        });

        expect(scope.option1).toBeDefined();
        expect(scope.option2).toBeDefined();
    });

    it("Verify: dataTransforForYAxis method", function () {
        var scope = {};
        var ctrl;

        inject(function ($controller) {
            ctrl = $controller('graph1Ctrl', {$scope: scope});
        });

        scope.dataSource = dummyDataSource;
        expect(scope.dataTransformForYAxis(dummyDataSource, dummySource).length).toEqual(4)

    });

    it('Verify: chooseYaxis method', function () {
        var scope = {};
        var ctrl;

        inject(function ($controller) {
            ctrl = $controller('graph1Ctrl', {$scope: scope});
        });

        scope.dataSource = dummyDataSource;
        scope.chooseYaxis('cdn');
        expect(scope.data.length).toEqual(2);
    });

    it("Verify: changeDataSource method", function () {
        dummyDataSetProvider = {
            get: jasmine.createSpy()
        };

        dummyDataSetProvider.get.and.returnValue(dummyDataSource);

        dummyDataSetProvider.get();
        expect(dummyDataSetProvider.get).toHaveBeenCalled();
    });

});