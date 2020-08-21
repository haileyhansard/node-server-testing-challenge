const request = require('supertest');
const server = require('./server');
const db = require("../data/dbConfig.js");

describe('server', () => {
    beforeEach(async () => {
        await db('quotes').truncate();
    });
    
    describe('GET /', () => {
        it('should return 200 OK', () => {
            request(server).get('/')
            .then(res => {
                expect(res.status).toBe(200);
            })
        })
    })
})