## Easy Idling for your Steam Account with Node.js

[![Build Status](https://travis-ci.org/DakshMiglani/Idler.svg?branch=master)](https://travis-ci.org/DakshMiglani/Idler)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/DakshMiglani/Idler/master/LICENSE.md)
[![npm version](https://badge.fury.io/js/idler.png)](https://badge.fury.io/js/idler)

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
        // your steam-user
    }).catch(err => {
        // you can use err
    })
```

## License
Copyright to [Daksh Miglani](https://dak.sh) | Licensed to MIT. 