const axios = require('axios');
const baseRequest = require('../baseRequest');

jest.mock('axios');

describe('The request to change the given function', () => {
  it('Should successfully call endpoint and not throw an error', async () => {
    const shouldRespond = {
      code: 200,
      message: 'Success',
    };

    axios.default.get.mockReturnValue(shouldRespond);

    expect(await baseRequest('fakeEndpoint', 'someKey')).toEqual(shouldRespond);
  });

  it('Should throw an error', async () => {
    axios.default.get.mockImplementation(() => {
      throw new Error('500: Could not connect');
    });
    try {
      await baseRequest('fakeEndpoint', 'someKey');
    } catch (error) {
      expect(error).toEqual(Error('Unable to make request'));
    }
  });
});
