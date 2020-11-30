# pass-shark

An npm library that checks the given password doesn't contain part of the username.

![Image of Shark](/images/cartoon-shark.png)

## Installation

```
$ npm i pass-shark
```

## Usage

If the longest common substring is half the length (or more) of the username or password then it won't be accepted and will return false. Otherwise it will return true.

```
const validate = require('pass-shark')

validate('somename', 'somepass')
```

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

<!-- <a href='https://pngtree.com/so/shark-clipart'>shark clipart png from pngtree.com</a> -->