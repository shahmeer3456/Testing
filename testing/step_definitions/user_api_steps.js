const { I } = inject();
const { expect } = require('chai');

let response;
let endpoint;

Given('I have the endpoint {string}', (url) => {
  endpoint = "https://reqres.in/api/users?page=2";
});

When('I send a GET request', async () => {
  response = await I.sendGetRequest(endpoint);
});

When('I send a POST request with body:', async (body) => {
  const requestBody = JSON.parse(body);
  response = await I.sendPostRequest(endpoint, requestBody);
});

When('I send a PUT request with body:', async (body) => {
  const requestBody = JSON.parse(body);
  response = await I.sendPutRequest(endpoint, requestBody);
});

When('I send a PATCH request with body:', async (body) => {
  const requestBody = JSON.parse(body);
  response = await I.sendPatchRequest(endpoint, requestBody);
});

When('I send a DELETE request', async () => {
  response = await I.sendDeleteRequest(endpoint);
});

Then('the response code should be {int}', (statusCode) => {
  expect(response.status).to.equal(statusCode);
});

Then('the response should contain {string}', (key) => {
  expect(response.data).to.have.property(key);
});
