import constants from './constants'

function createUrl(path)
{
    return constants.serverUrl +path
}

function log(message)
{
    console.log(message)
}

export default (createUrl,log)