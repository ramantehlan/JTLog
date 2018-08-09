# JTLog

[![Build Status](https://travis-ci.org/ramantehlan/JTLog.svg?branch=master)](https://travis-ci.org/ramantehlan/JTLog)

JavascriptTypescriptLog (JTLog) is Log library.

## Installation 

```sh
npm i jtlog --save
```
## Usage

### Javascript

```javascript
var JT = require('jtlog');
JT.log('start',"App started");
```

### TypeScript
```typescript
import { JTLog } from 'jtlog';
JTLog.log("start", "App Started");
```
  

## Tag List

No | Name | Description|
---|------|------------|
1 | default | Normal log
2 | table | Print table
3 | warn | Print Warning 
4 | info | Print Information 
5 | start | Print Starting Heading
6 | call | Print when a function is called
7 | head | Print when a file is opened 

## Test 
```sh
npm run test
```

## Contribution
    Feel free to contribute.

## Licence
    ISC
