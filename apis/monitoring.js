const core = require('@actions/core');
const axios = require('axios').default;

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getMPL(token) {
    try {
      const response = await axios.get(`https://${core.getInput('cpi-host')}/api/v1/MessageProcessingLogs?$filter=IntegrationFlowName%20eq%20'\''${core.getInput('integration-scenario')}'\''%20and%20Status%20ne%20'\''DISCARDED'\''&$orderby=LogEnd%20desc&$top=1&$format=json'`, {
          headers: {
            Authorization: 'Bearer ' + token
          }
      })
      console.log(response.data);
      return(response.data);
    } catch (error) {
      console.error(error);
      return(error);
    }
  }

  module.exports = { getMPL };