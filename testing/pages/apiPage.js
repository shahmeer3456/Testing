const { I } = inject();

module.exports = {
  getUserByID: async function() {
    const response = await I.sendGetRequest('/api/users/2');
    return response;
  },

  createUser: async function() {
    const response = await I.sendPostRequest('/api/users', { name: 'John', job: 'leader' });
    return response;
  },

  updateUserByIDWithPUT: async function() {
    const response = await I.sendPutRequest('/api/users/2', { name: 'John', job: 'manager' });
    return response;
  },

  updateUserByIDWithPATCH: async function() {
    const response = await I.sendPatchRequest('/api/users/2', { name: 'Jane', job: 'developer' });
    return response;
  },

  deleteUserByID: async function() {
    const response = await I.sendDeleteRequest('/api/users/2');
    return response;
  },

  getUnknownResources: async function() {
    const response = await I.sendGetRequest('/api/unknown');
    return response;
  },

  registerNewUser: async function() {
    const response = await I.sendPostRequest('/api/register', { email: 'eve.holt@reqres.in', password: 'pistol' });
    return response;
  }
};
