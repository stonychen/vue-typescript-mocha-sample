require('jsdom-global')()



const contexts = require.context('.', true, /\.spec\.ts$/)
contexts.keys().forEach(key => contexts(key))

export default contexts
