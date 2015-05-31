var expect = require('chai').expect;
var request = require('supertest');
var express = require('express');
var async = require('async');

var mongoose = require('mongoose');
var mockgoose = require('mockgoose');

mockgoose(mongoose);

var app = require('../../../app');

var HotelsModel = require('../../../app/models/hotels');



describe('GET /search', function(){
	it('respond with json', function(done){
		request(app).get('/search/:key').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200, done);
	});
});

describe('Search / GET', function () {
    it('Searching for hotels', function (done) {
    	HotelsModel.find({hotel: 'Rio de Janeiro'},function (err, result) {
            expect(err).not.to.be.ok;
            expect(result).to.be.ok;
        });
        done();
    });

    it('Searching for cities', function (done) {
    	HotelsModel.find({city: 'Rio de Janeiro'},function (err, result) {
            expect(err).not.to.be.ok;
            expect(result).to.be.ok;
        });
        done();
    });

});