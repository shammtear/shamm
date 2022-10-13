const Loader = require('../utils/Loader')

module.exports = class ModelLoader extends Loader {
    constructor() {
        super('model')
    }

    static run() {
        const modelsPath = `${__dirname}database\\models\\`.replace('loaders', '')
        console.log(modelsPath)
    }
}