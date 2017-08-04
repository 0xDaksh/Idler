let steamUser = require('steam-user'),
    totp = require('steam-totp');

module.exports = (Obj, cb) => {
    user = new steamUser();
    return new Promise((then, err) => {
        if(
            typeof Obj !== 'undefined' &&
            typeof Obj.username !== 'undefined' &&
            typeof Obj.password !== 'undefined' && 
            typeof Obj.gameId !== 'undefined'    
        ) {
            if(typeof Obj.twoFactorCode !== 'undefined') {
                user.logOn({
                    accountName: Obj.username,
                    password: Obj.password,
                    twoFactorCode: Object.twoFactorCode,
                    rememberPassword: true
                })
            } else if(typeof Obj.authCode !== 'undefined') {
                user.logOn({
                    accountName: Obj.username,
                    password: Obj.password,
                    authCode: Object.authCode,
                    rememberPassword: true
                })
            } else {
                user.logOn({
                    accountName: Obj.username,
                    password: Obj.password,
                    rememberPassword: true
                })
            }
            user.on('loggedOn', (dtls) => {
                console.log('Logged into steam as ' + user.steamID.getSteam3RenderedID())
                user.setPersona(handler.EPersonaState.Online)
                user.gamesPlayed([gameId])
            })
            then(user);
        } else {
            err("Please Enter the Mandatory Fields: Username, Password and GameId");
        }
    })
}