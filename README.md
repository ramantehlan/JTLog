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
// Include the module
var JT = require('jtlog');

```

### TypeScript
```typescript
import { JTLog } from 'jtlog';
JTLog.log("start", "App Started");
```

### General
```Typescript
// To start the module 
// appname will be replaced by your program/app name
JT.start("appname");

// To change configuration
// setConfig(NAME, VALUE)
// NAME: <string> List can be found in Configuration list
// VALUE: <any> New value you wish to set
JT.setConfig("allowLog",true);

// To get configuration value
JT.getConfig("allowLog"); // This will return true by default

// To log something in console
// log(TAG, MSG, STYLE)
// TAG: <string> To tag the message | List can be found below
// MSG: <any> you message, it can also be a object
// STYLE: <string> <optional> very basic css style works
JT.log('default',"App started", "color:black");

//
// We are using just one function to log, cause this will avoid error
// In case you add wrong tag, this won't be a problem.
//

```

> Note: JT is a module variable, It will be different for you, as you assign it.

## Configuration List

No | Name | Type | Description |
---|------|------|-------------|
1  | allowLog | `Boolean` | To decide if you wish to log or not
2  | fileName | `String` | To set file name of current page we are on. 
3  | appName  | `String` | Name of app, it is set by user
4  | appStartTime | `String` | Time when app started


## Tag List

No | Tag | Description3  
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
