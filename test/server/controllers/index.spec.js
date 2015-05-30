var request = require('supertest');
var express = require('express');

var app = require('../../../app');

describe('Index Page', function() {
  it("renders successfully", function(done) {
    request(app).get('/').expect(200, done);    
  });
});