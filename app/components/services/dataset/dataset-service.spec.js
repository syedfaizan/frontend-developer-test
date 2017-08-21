/**
 * Created by syedf on 20-08-2017.
 */
describe('Fetch Datasets: ', function () {
    var dataService, httpBackend;

    beforeEach(module("devTest.dataset"));

    beforeEach(inject(function (_datasetProvider_, $httpBackend) {
        datasetProvider = _datasetProvider_;
        httpBackend = $httpBackend;


    }));


    it('should return audience json object', function (done) {
        httpBackend.whenGET('http://localhost:5000/data/audience.json').respond({
            data: {
                audience: [
                    [1, 2]
                ]
            }
        });
        datasetProvider.get('audience').then(function (response) {
            expect(typeof response).toBe('object');
        });


        httpBackend.flush();


    });

});