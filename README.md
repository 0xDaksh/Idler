## Easy Idling for your Steam Account with Node.js
> Idle Your Steam Account Easily.

### Possible Login Types
- twoFactorCode (your steam account shared secret)
- authCode (your steam account auth code)

### Idler Object Parameters
- Username (Mandatory)
- Password (Mandatory)
- gameId (Mandatory)
- twoFactorCode (Optional)
- AuthCode (Optional)

### How to Use?

```javascript
var idler = require('idler'),
    Obj = {
        username: '123',
        password: '123',
        twoFactorCode: 'gg',
        gameId: 440
    }
    idler(Obj).then((user) => {
        // you can use user
    }).catch(err => {
        // you can use err
    })
```

## License
Copyright to [Daksh Miglani](https://dak.sh) | Licensed to MIT. 