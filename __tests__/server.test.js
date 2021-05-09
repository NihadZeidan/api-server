'use strict';

require('@code-fellows/supergoose');

const server = require('../src/server.js')
const supertest = require('supertest');
const fakeServer = supertest(server.app)


describe('TEST NotFound and Bad Method', () => {
    it('Bad Method for Food Routes', async() => {
        let result = await fakeServer.post('/food/:id')
        expect(result.status).toEqual(404);
    });


    it('Bad Route for Food Routes', async() => {
        let result = await fakeServer.post('/notFood')
        expect(result.status).toEqual(404);
    });

    it('Check POST method DATA and Status', async() => {
        let obj = { name: "potato", price: 20, availability: true }
        let result = await fakeServer.post('/food').send(obj);
        Object.keys(obj).forEach(key => {
            expect(result.body[key]).toEqual(obj[key]);
        });
        expect(result.status).toEqual(201);
    });

    it('Check GET method status and Data for Food', async() => {
        let result = await fakeServer.get('/food');
        let backToObj = JSON.parse(result.text)

        expect(result.status).toEqual(200);
        expect(backToObj[0].name).toEqual("potato");
        expect(backToObj[0].price).toEqual(20);
    });

    it('Check GET method for reading single value status', async() => {
        let result = await fakeServer.get('/food/:id');
        expect(result.status).toEqual(200);
    });

    it("Check PUT method data and status for food", async() => {
        let obj = { name: "Banana", price: 20, availability: true }
        let result = await fakeServer.put('/food/1').send(obj);
        let backToObj = JSON.parse(result.text)

        expect(backToObj.name).toEqual("Banana");
        expect(result.status).toEqual(200);
    });

    it('Check DELETE method status and Data', async() => {
        let result = await fakeServer.delete('/food/1');
        expect(result.body).toEqual(null)
        expect(result.status).toEqual(202);
    });



});




describe('Test Clothes Route', () => {
    it('Bad Method for Clothes Routes', async() => {
        let result = await fakeServer.post('/clothes/:id')
        expect(result.status).toEqual(404);
    });


    it('Bad Route for Clothes Routes', async() => {
        let result = await fakeServer.post('/notclothes')
        expect(result.status).toEqual(404);
    });

    it('Check POST method DATA and Status', async() => {
        let obj = { name: "T-shirt", price: '25', availability: true }
        let result = await fakeServer.post('/clothes').send(obj);
        Object.keys(obj).forEach(key => {
            expect(result.body[key]).toEqual(obj[key]);
        });
        expect(result.status).toEqual(201);
    });

    it('Check GET method status and Data for clothes', async() => {
        let result = await fakeServer.get('/clothes');
        let backToObj = JSON.parse(result.text)

        expect(result.status).toEqual(200);
        expect(backToObj[0].name).toEqual("T-shirt");
        expect(backToObj[0].price).toEqual("25");
    });

    it('Check GET method for reading single value status', async() => {
        let result = await fakeServer.get('/clothes/:id');
        expect(result.status).toEqual(200);
    });

    it("Check PUT method data and status for Clothes", async() => {
        let obj = { name: "Pair of Paints", price: '25', availability: true }
        let result = await fakeServer.put('/clothes/1').send(obj);
        let backToObj = JSON.parse(result.text)

        expect(backToObj.name).toEqual("Pair of Paints");
        expect(result.status).toEqual(200);
    });

    it('Check DELETE method status and Data', async() => {
        let result = await fakeServer.delete('/clothes/1');
        expect(result.body).toEqual(null)
        expect(result.status).toEqual(202);
    });



});