# integration-suite-action

This action caters to different ci cd use cases of SAP integration suite.

## Inputs

## `oauth-host`

**Required** The hostname of the OAuth server.

## Outputs

## `result`

The response.

## Example usage

uses: actions/integration-suite-action@v1.1
with:
  oauth-host: 'dummyoauthhost'