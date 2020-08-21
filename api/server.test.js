const request = require('supertest');
const server = require('./server');
const { expectCt } = require('helmet');

describe('server', () => {
    describe('GET /', () => {
        it('should return 200 OK', () => {
            request(server).get('/')
            .then(res => {
                expect(res.status).toBe(200);
            })
        })
    })
})