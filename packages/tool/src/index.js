const fetchSVG = require('./fetchSVG')
const process = require('./build')

async function fetch(opts){
  try{
    await fetchSVG(opts)
    process(opts)
  }catch(err){
    console.log(err)
  }

}

module.exports = fetch
