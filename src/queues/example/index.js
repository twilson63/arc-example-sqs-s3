const AWS = require('aws-sdk')
// learn more about queue functions here: https://arc.codes/primitives/queues
exports.handler = async function queue (event) {
  const s3 = new AWS.S3()
  await s3.putObject({
    Bucket: process.env.ARC_STORAGE_PRIVATE_HELLO_DATA,
    Key: 'hello',
    Body: JSON.stringify(event) 
  })
  console.log(JSON.stringify(event, null, 2))
  return
}
