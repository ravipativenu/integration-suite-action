const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios').default;

async function main() {

    try {
        const oauthHost = core.getInput('oauth-host');
        console.log(`Hello ${oauthHost}!`);
        var output = await getToken();
        console.log(`Output: ${output}`);
        core.setOutput("result", output);
        // Get the JSON webhook payload for the event that triggered the workflow
        const payload = JSON.stringify(github.context.payload, undefined, 2)
        console.log(`The event payload: ${payload}`);
      } catch (error) {
        core.setFailed(error.message);
      }

}




// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getToken() {
    try {
      const response = await axios.post(`https://${core.getInput('oauth-host')}/oauth/token?grant_type=client_credentials`, {}, {
        auth: {
            username: core.getInput('oauth-client-id'),
            password: core.getInput('oauth-client-secret'),
          }
      })
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

main();
