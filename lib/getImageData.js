const getImageData = require('get-pixels')
const calcAverageColor = require('./calcAverageColor')
const calcMinColor = require('./calcMinColor')
const calcMaxColor = require('./calcMaxColor')

module.exports = (source) => {
  return new Promise((resolve, reject) => {
    getImageData(source, (err, imageData) => {
      if (err) return reject(err)
      resolve({
        source: source,
        dimension: {
          width: imageData.shape[0],
          height: imageData.shape[1]
        },
        colors: {
          avg: calcAverageColor(imageData),
          min: calcMinColor(imageData),
          max: calcMaxColor(imageData)
        }
      })
    })
  })
}
