const NUM_IMAGES = 4

function generateLink () {
  const docNumber = Math.floor(Math.random() * NUM_IMAGES) + 1
  return 'https://lolg-documents.s3.us-west-1.amazonaws.com/banner' + docNumber.toString() + '.jpg'
}

export default generateLink
