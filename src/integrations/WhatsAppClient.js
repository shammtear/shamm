const {Client, LegacySessionAuth} = require('whatsapp-web.js')

module.exports = class WhatsAppClient extends Client {
    constructor(session) {
        super({
            authStrategy: new LegacySessionAuth(!session ? {} : { session })
        });
        this.session = session
    }
}