let steamUser = require('steam-user'),
    totp = require('steam-totp')

let user = new steamUser(),
    methods = ['twoFactorCode', 'authCode', 'manual'];

class Idle {
    constructor(Username, Password, gameId, auth) {
        if(!auth || !auth.method) {
            this.error = true;
            throw 'Please Provide Auth Method.'
        } else {
            this.method = auth.method;
            this.value = auth.value;
        }
        if(!gameId || !Username || !Password) {
            this.error = true;
            throw "Please Provide the GameId";
        } else {
            this._username = Username;
            this._password = Password;
            this._gameId = gameId;
        }
        if(methods.indexOf(this.method) === -1) {
            this.error = true;
            throw "Please Enter the Correct Method";
        } else if(
            this.method == methods[0] || 
            this.method == methods[1] &&
            !this.value
        ) {
            this.error = true;
            throw "Please Provide the Correct Value";
        }
    }
    idle() {
        return new Promise((acc, rej) => {
            let Obj = {
                accountName: this._username,
                password: this._password,
                rememberPassword: true,
                promptSteamGuardCode: true
            }
            if(this.method !== methods[2]) {
                Obj[this.method] = this.value;
            }
            user.logOn(Obj)
            user.on('loggedOn', (dtls, parental) => {
                    console.log('Logged into steam as ' + user.steamID.getSteam3RenderedID())
                    user.setPersona(steamUser.EPersonaState.Online)
                    user.gamesPlayed([this._gameId])
                    console.log('Idling Has Been Started.')
                    acc(user);
            })
            user.on('err', (err) => {
                rej(err);
            })
        }) 
    }

}

module.exports = Idle;