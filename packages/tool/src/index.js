const fetchSVG = require('./fetchSVG')
const process = require('./build')

async function fetch(opts){
  await fetchSVG(opts)
  process(opts)
}

module.exports = fetch
