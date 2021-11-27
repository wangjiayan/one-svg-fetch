const fetchSVG = require('./fetchSVG')
const process = require('./build')

async function fetch(opts: FetchOptions){
  await fetchSVG(opts)
  process(opts)
}

module.exports = fetch
export {}