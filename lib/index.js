const fetchSVG = require('./fetchSVG')
const process = require('./build')

const fetch = async(opts)=>{
  await fetchSvg(opts)
  process()
}
exports.fetch = fetch