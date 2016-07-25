const math = require('lodash/math')

module.exports = (imageData) => {
  const width = imageData.shape[0]
  const height = imageData.shape[1]
  const minColor = [255,255,255]
  for(var x = 0; x < width; x += (width / 4)) {
    for(var y = 0; y < height; y += (height / 4)) {
      const pixelR = imageData.get(x,y,0)
      const pixelG = imageData.get(x,y,1)
      const pixelB = imageData.get(x,y,2)
      if (pixelR < minColor[0] && pixelR > 10)  minColor[0] = pixelR
      if (pixelG < minColor[1] && pixelG > 10)  minColor[1] = pixelG
      if (pixelB < minColor[2] && pixelB > 10)  minColor[2] = pixelB
    }
  }
  return {
    r: minColor[0],
    g: minColor[1],
    b: minColor[2]
  }
}
