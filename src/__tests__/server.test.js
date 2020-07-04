const supertest = require('supertest');
const index = require('../server');
const baseRequest = require('../baseRequest');

jest.mock('../baseRequest');

const request = supertest(index);

describe('Tests the routes for the index file', () => {
  it('Should execute the given command', async () => {
    baseRequest.mockReturnValue('success');

    const expectValue = {
      message: 'Successfully executed volume_up',
    };

    const response = await request.get('/volume_up');

    expect(response.text).toEqual(JSON.stringify(expectValue));
    expect(response.status).toEqual(200);
  });

  it('Should successfully execute the power command twice', async () => {
    baseRequest.mockReturnValue('success');

    const expectValue = {
      message: 'Successfully executed power',
    };

    const response = await request.get('/power');

    expect(response.text).toEqual(JSON.stringify(expectValue));
    expect(response.status).toEqual(200);
  });

  it('Should return not a valid command when command doesn\'t exist', async () => {
    baseRequest.mockReturnValue('success');

    const expectValue = {
      message: 'Not a valid command',
    };

    const response = await request.get('/notacommand');

    expect(response.text).toEqual(JSON.stringify(expectValue));
    expect(response.status).toEqual(400);
  });

  it('Should return internal server error when request cannot be made', async () => {
    baseRequest.mockImplementation(() => {
      throw new Error('500: Could not access projector');
    });

    const response = await request.get('/power');

    expect(response.error).toEqual(Error('cannot GET /power (500)'));
    expect(response.status).toEqual(500);
  });
});
