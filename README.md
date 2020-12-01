# pass-shark

An npm library that checks that the given password isn't too similar to the username.

<img src="https://user-images.githubusercontent.com/60620619/100767228-ce8aac80-33f9-11eb-8b9b-a461e3ca2ac0.png" alt="shark" width="220" />

## How it works

pass-shark checks that the password doesn't contain a substring of the username over a certain length.

The length of the substring is half the length of either the username or password, whichever is shortest, and rounded up.

So if there is substring of this length or longer, then it won't be accepted and will return false. Otherwise it will return true.

At the moment pass-shark is case sensitive and only checks for consecutive characters. More options coming soon!

## Installation

```sh
$ npm i pass-shark
```

## Usage

```js
const validate = require("pass-shark");

validate("Sharkname", "Sharkpass"); // returns false

validate("somename", "somepass"); // returns false

validate("myUsername", "aSecurePassword"); // returns true

validate("RainbowPenguin", "R*a*i*n*b*o*w*P*e*n*g*u*i*n"); // returns true
```

It will return false if either username or password are empty strings.

## Coming soon...

Features to be added in the future:

- The option to make it case insensitive.
- The option to choose the length of the username substring that is permitted in the password.

## Credits

Thanks to [Bethany](https://www.codewars.com/users/Bethany) and this [kata](https://www.codewars.com/kata/5c511d8877c0070e2c195faf/javascript "Codewars") for the inspiration for this package.

Shark clipart png from [pngtree.com](https://pngtree.com/so/shark-clipart)

## License

MIT License

Copyright (c) 2020 Jill-Ann

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```

```
