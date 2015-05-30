var request = require('supertest');
var express = require('express');

var app = require('../../../app');

describe('Availability Page', function() {
  it("renders successfully", function(done) {
    request(app).post('/availability').expect(200, done);    
  });
});