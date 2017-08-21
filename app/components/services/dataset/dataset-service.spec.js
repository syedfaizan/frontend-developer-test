/**
 * Created by syedf on 20-08-2017.
 */
describe('Fetch Datasets: ', function () {
    var dataService, httpBackend;

    beforeEach(module("devTest.dataset"));

    beforeEach(inject(function (_datasetProvider_, $httpBackend) {
        datasetProvider = _datasetProvider_;
        httpBackend = $httpBackend;
        httpBackend.when('GET','data/audience.json').respond({
            data: {
                audience: [
                    [1, 2]
                ]
            }
        });
    }));


    it("dataSet get should be defined", function () {
        expect(datasetProvider.get).toBeDefined();
    });

    it('should return audience json object', function () {

        datasetProvider.get('audience').then(function (response) {
            expect(typeof response).toEqual('object');
        });

        httpBackend.flush();


    });

});