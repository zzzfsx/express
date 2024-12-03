const request = require('supertest');
const express = require('express');

// Create a minimal Express app for testing
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello, World!');
});

describe('GET /', () => {
  it('should respond with "Hello, World!"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});
