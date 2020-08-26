const AWS = require('aws-sdk')
// learn more about queue functions here: https://arc.codes/primitives/queues
exports.handler = async function queue (event) {
  console.log('Bucket ', process.env.ARC_STORAGE_PRIVATE_HELLO_DATA)
  const s3 = new AWS.S3()
  
  await new Promise((resolve, reject) => s3.putObject({
      Bucket: process.env.ARC_STORAGE_PRIVATE_HELLO_DATA,
      Key: 'hello.json',
      Body: JSON.stringify(event) 
    }, (err) => {
      if (err) resolve(err)
      resolve()
    })
  )

  console.log(JSON.stringify(event, null, 2))
  return
}
