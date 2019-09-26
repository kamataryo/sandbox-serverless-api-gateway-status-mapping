'use strict'

module.exports.handler = (event, context, callback) => {
  const result = {
    body: { event }
  }

  callback(null, result)
}
