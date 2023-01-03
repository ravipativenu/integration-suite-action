const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios').default;
const auth = require('./apis/authorization');
const mpl = require('./apis/monitoring');

async function main() {

    try {
        //Get authorization token
        const oauthHost = core.getInput('oauth-host');
        var tokenresponse = await auth.getToken();
        var mplresponse = await mpl.getMPL(tokenresponse.access_token)
        core.setOutput("result", mplresponse);
        //Get message processing logs
        
      } catch (error) {
        core.setFailed(error.message);
      }

}


main();
