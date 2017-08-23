/**
 * Created by syedf on 20-08-2017.
 */
describe('testing home ctrl', function () {
    var scope = {};
    var ctrl;

    var unitDummyData = [
        [
        1494228300000,
        26
        ],
        [
            1494228600000,
            21
        ],
        [
            1494228900000,
            22
        ],
        [
            1494229200000,
            26
        ]
    ];

    var dummyData = {
        "cdn": [
            [
                1494228300000,
                1637035.520000
            ],
            [
                1494228600000,
                1944750.293333
            ],
            [
                1494228900000,
                1422529.706667
            ]
        ]
    };
    beforeEach(module('devTest.graph2'));

    beforeEach(inject(function ($controller) {
        ctrl = $controller('graph2Ctrl', {$scope: scope});
    }));

    it('checks scope initial values', function () {
        expect(scope.colors).toBeDefined();
        expect(scope.series).toBeDefined();
    });

    it('Verify: unitTransform method', function () {
        var transformedData = scope.unitTransform(unitDummyData);
        expect(typeof transformedData).toEqual('object');
        expect(Object.keys(transformedData).length).toEqual(2);
    });

    it('Verify: dataTransform method', function(  ) {
        var transformedData = scope.dataTransform(dummyData);
        expect(Array.isArray(transformedData)).toEqual(true);
        expect(transformedData[0].labels.length).toBe(3);
        expect(transformedData[0].data.length).toBe(3);
    });

});