const pool = require('../lib/utils/pool.js');
const setup = require('../data/setup.js');
const request = require('supertest');
const app = require('../lib/app.js');

describe('auth lab routes', () => {
    beforeEach(() => {
        return setup(pool);
    });


    it('verifies POST route to sign up user', async () => {
        return request(app)
            .post('/api/v1/auth/signup')
            .send({ email: 'dani@duck.com', password: 'p4ssw0rd' })
            .then((res) => {
                expect(res.body).toEqual({
                    id: expect.any(String),
                    email: 'dani@duck.com',
                });
            });
    });

    afterAll(() => {
        pool.end();
    });
});
