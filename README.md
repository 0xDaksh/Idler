## Easy Idling for your Steam Account with Node.js

[![Build Status](https://travis-ci.org/DakshMiglani/Idler.svg?branch=master)](https://travis-ci.org/DakshMiglani/Idler)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/DakshMiglani/Idler/master/LICENSE.md)
[![npm version](https://badge.fury.io/js/idler.png)](https://badge.fury.io/js/idler)

> Idle Your Steam Account Easily.

### Possible Login Types
- twoFactorCode (your steam account shared secret)
- authCode (your steam account auth code)
- Manual (this would prompt for steamGuard Code on the terminal)

### Idler Class Parameters
- Username (Mandatory)
- Password (Mandatory)
- gameId (Mandatory)
- Method Object
    - twoFactorCode
        - value (your shared secret)
    - authCode
        - value (your email auth code)
    - Manual (this would prompt for steamGuard Code on the terminal)
### How to Use?

```javascript
var Idler = require('idler');
var user = new Idler('username', 'password', 'gameId', {method: 'twoFactorCode', value: 'YourSharedSecret'})
user.idle().then(User => {
    // on login it would send the User Object
}).catch(err => {
    // on err it would send the Err Object
    throw err;
})
```

## License
Copyright to [Daksh Miglani](https://dak.sh) | Licensed to MIT. 