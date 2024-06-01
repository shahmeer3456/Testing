exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://reqres.in/api',
      onRequest: (request) => {
        request.headers.auth = '123'; 
      },
    },
    ChaiWrapper: {
      require: 'codeceptjs-chai'
    }
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'reqres-api-tests',
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/user_api_steps.js'],
  },
};

