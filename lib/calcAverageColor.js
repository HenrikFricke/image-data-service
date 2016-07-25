module.exports = (imageData) => {
  const widthLoop = Array(imageData.shape[0]).fill().map((v, index) => index)
  const heightLoop = Array(imageData.shape[1]).fill().map((v, index) => index)
  const numberOfPixels = imageData.shape[0] * imageData.shape[1]
  let avgColor = [0,0,0]
  widthLoop.forEach((x) => {
    heightLoop.forEach((y) => {
      avgColor = avgColor.map((v,i) => v + imageData.get(x,y,i))
    })
  })
  avgColor = avgColor.map((v,i) => Math.floor(v / numberOfPixels))
  return {
    r: avgColor[0],
    g: avgColor[1],
    b: avgColor[2]
  }
}
