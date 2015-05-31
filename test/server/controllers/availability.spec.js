var expect = require('chai').expect;
var request = require('supertest');
var express = require('express');
var async = require('async');

var mongoose = require('mongoose');
var mockgoose = require('mockgoose');

mockgoose(mongoose);

var app = require('../../../app');

var AvailabilityModel = require('../../../app/models/availability');
var HotelsModel = require('../../../app/models/hotels');

describe('Availability Page', function() {
  it("renders successfully", function(done) {
    request(app).post('/availability').expect(200, done);    
  });
});

describe('Availability /POST', function () {

    it('Searching by keyword (hotels || cities)', function (done) {
        var key         = 'Rio de Janeiro';
        var entryDate   = '12/05/2015';
        var releaseDate = '13/05/2015';
        
    	HotelsModel.find({ $or:[ {'hotel':key}, {'city':key} ]},function (err, result) {
            expect(err).not.to.be.ok;
            expect(result).to.be.ok;
        });
        done();
    });

});