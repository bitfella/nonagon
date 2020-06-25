import * as utils from './';

describe('Utils functions', () => {
  it('Should not return the value of a key in a query string if not present', () => {
    const testKey = 'access_token';
    const testTarget = '#test?user=JOHN_DOE';
    const expectedResult = null;

    expect(utils.getHashKeyValue(testKey, testTarget)).toEqual(expectedResult);
  });

  it('Should return the value of a key in a query string if present', () => {
    const testKey = 'access_token';
    const testTarget = '#test?access_token=LOREM_IPSUM';
    const expectedResult = 'LOREM_IPSUM';

    expect(utils.getHashKeyValue(testKey, testTarget)).toEqual(expectedResult);
  });

  it('Should convert and object to a query string', () => {
    const testInput = {
      name: 'Lorem',
      surname: 'Ipsum',
      age: 45
    };
    const expectedResult = 'name=Lorem&surname=Ipsum&age=45';

    expect(utils.objectToQueryString(testInput)).toEqual(expectedResult);
  });

  it('Should convert and object with array properties in an object with min and max properties', () => {
    const testInput = {
      lorem: [0, 1],
      ipsum: [0, 1],
      dolor: [0, 1]
    };
    const expectedResult = {
      min_lorem: 0,
      max_lorem: 1,
      min_ipsum: 0,
      max_ipsum: 1,
      min_dolor: 0,
      max_dolor: 1
    };

    expect(utils.arrayValuesToMinMaxObjectProperties(testInput)).toEqual(
      expectedResult
    );
  });

  it('Should return a valid data url image from passed parameters', () => {
    const testRegex = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;

    expect(
      utils.getAlternativeImageSrc(
        'John',
        200,
        200,
        '#fff',
        '#000',
        'sans-serif',
        '2rem'
      )
    ).toMatch(testRegex);
  });

  it('Should call window.location.assign with given param', () => {
    const uri = 'https://www.google.com';
    utils.goToURI(uri);
    expect(window.location.assign).toBeCalledWith(uri);
  });
});
