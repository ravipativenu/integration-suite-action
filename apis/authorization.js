const core = require('@actions/core');
const axios = require('axios').default;

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getToken() {
    try {
      const response = await axios.post(`https://${core.getInput('oauth-host')}/oauth/token?grant_type=client_credentials`, {}, {
        auth: {
            username: core.getInput('oauth-client-id'),
            password: core.getInput('oauth-client-secret'),
          }
      })
      console.log(response.data);
      return(response.data);
    } catch (error) {
      console.error(error);
      return(error);
    }
  }

  module.exports = { getToken };