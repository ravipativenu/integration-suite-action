const core = require('@actions/core');
const github = require('@actions/github');

try {
  const oauthHost = core.getInput('oauth-host');
  console.log(`Hello ${oauthHost}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("result", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}