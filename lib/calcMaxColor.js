const math = require('lodash/math')

module.exports = (imageData) => {
  const width = imageData.shape[0]
  const height = imageData.shape[1]
  const maxColor = [0,0,0]
  for(var x = 0; x < width; x += (width / 4)) {
    for(var y = 0; y < height; y += (height / 4)) {
      const pixelR = imageData.get(x,y,0)
      const pixelG = imageData.get(x,y,1)
      const pixelB = imageData.get(x,y,2)
      if (pixelR > maxColor[0] && pixelR < 245)  maxColor[0] = pixelR
      if (pixelG > maxColor[1] && pixelG < 245)  maxColor[1] = pixelG
      if (pixelB > maxColor[2] && pixelB < 245)  maxColor[2] = pixelB
    }
  }
  return {
    r: maxColor[0],
    g: maxColor[1],
    b: maxColor[2]
  }
}
