'use strict'

module.exports.handler = (event, context, callback) => {
  const result = {
    statusCode: 500,
    body: {
      event
    }
  }

  callback(JSON.stringify(result))
}
