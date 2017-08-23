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
    var dummyOptions = {
        scales: {
            yAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: null
                    }
                }
            ],
            xAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: null
                    }
                }
            ]
        }
    };

    beforeEach(module('devTest.graph1'));

    beforeEach(inject(function ($controller) {
        ctrl = $controller('graph1Ctrl', {$scope: scope});
    }));

    it('verifies default select values', function () {

        expect(scope.option1).toBeDefined();
        expect(scope.option2).toBeDefined();
    });

    it("Verify: dataTransforForYAxis method", function () {

        scope.dataSource = dummyDataSource;
        expect(scope.dataTransformForYAxis(dummyDataSource, dummySource).length).toEqual(4)

    });

    it('Verify: chooseYaxis method', function () {
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

    it("verify: updateChartOptions method", function () {
        var updatedOptions = scope.updateChartOptions(dummyOptions, 'country', 'cdn');
        expect(updatedOptions.scales.yAxes[0].scaleLabel.labelString).not.toBeNull();
    })

});