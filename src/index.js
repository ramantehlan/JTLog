"use strict";
/*******************************************************
*  This module is to print, manage, and handle the console
*  logs, it is originally designed for one page applications
*
*  Date of Creation: 01-08-2018
*  Creator: Raman Tehlan
*********************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
//
// This is the structure of the confiration of this 
// module
//
/*
interface configuration{
    allowLog: boolean,
    pageName: string
}
*/
//
// This is the strucutre of a group, which is used
// in printing a group in console
//
var Group = /** @class */ (function () {
    function Group() {
        this.tag = "";
        this.style = "";
    }
    return Group;
}());
exports.Group = Group;
// 
// This is the main class that will be used to print logs
// 
var JTLog = /** @class */ (function () {
    function JTLog() {
        // This is the configuration for JTLog
        this.config = {
            allowLog: true,
            pageName: "Default",
            appName: null,
            appStartTime: new Date().toLocaleString()
        };
        // Tags style for logs
        this.startBold = "color:gray; font-size:10px;";
        this.table = "color:green; font-size:11px;";
        this.default = "color:black; font-size:11px;";
        this.error = "color:red;font-size:11px;";
        this.warn = "color:orange; font-size:11px;";
        this.info = "color:#6f1a07; font-size:11px;";
        this.call = "color:green; font-size:11px;";
        this.file = "color:blue; font-size:11px;";
    }
    //
    // To change and set a new configuration value
    //
    JTLog.prototype.setConfig = function (name, value) {
        this.config[name] = value;
    };
    // 
    // To get a value of configuration
    // 
    JTLog.prototype.getConfig = function (name) {
        return this.config[name];
    };
    //
    // To clear the console log and the collected logs
    // 
    JTLog.prototype.clear = function () {
        console.clear();
    };
    // To push the log to console
    JTLog.prototype.log = function (tag, msg, style) {
        if (style === void 0) { style = ""; }
        if (this.config["allowLog"]) {
            // Function space
            // To swich according to the tag
            switch (tag) {
                case "table":
                    console.table(msg);
                    break;
                case "default":
                    console.log("%c" + msg, this.default + style);
                    break;
                case "warn":
                    console.warn("%cWarn: " + msg, this.warn + style);
                    break;
                case "error":
                    console.error("cErro: " + msg, this.error + style);
                    break;
                case "info":
                    console.info("%cInfo: " + msg, this.info + style);
                    break;
                case "file":
                    console.log("%cFile: " + msg, this.file + style);
                    break;
                case "call":
                    console.log("%cCall: " + msg, this.call + style);
                    break;
                case "start":
                    // To set app name
                    this.config['appName'] = msg;
                    // To store the logs for a group
                    var start = [];
                    start.push({
                        tag: "startBold",
                        msg: "%c" + "------------------------------------",
                        style: style
                    });
                    start.push({
                        tag: "startBold",
                        msg: "%cApp Name: " + msg + "\n" +
                            "%cApp Starting Time: " + this.config["appStartTime"] + "\n\n",
                        style: style
                    });
                    start.push({
                        tag: "info",
                        msg: "This is how info will be printed.",
                        style: ""
                    });
                    start.push({
                        tag: "warn",
                        msg: "This is how warring will be printed.",
                        style: ""
                    });
                    start.push({
                        tag: "error",
                        msg: "This is how error will be printed.",
                        style: ""
                    });
                    start.push({
                        tag: "file",
                        msg: "This will indicate change in file.",
                        style: ""
                    });
                    start.push({
                        tag: "call",
                        msg: "This will indicate calling of a function.",
                        style: ""
                    });
                    start.push({
                        tag: "default",
                        msg: "This will the default log.",
                        style: ""
                    });
                    start.push({
                        tag: "table",
                        msg: {
                            Index1: "value",
                            Index2: "value 2"
                        },
                        style: ""
                    });
                    start.push({
                        tag: "startBold",
                        msg: "%c" + "-----------------------------------",
                        style: style
                    });
                    this.group("JTLog Started", start);
                    break;
                case "startBold":
                    console.log("%c" + msg, this.startBold + style);
                    break;
                default:
                    console.log('%c' + msg, this.default + style);
                    break;
            }
            // Over
        }
    };
    //
    // To print a group 
    // 
    JTLog.prototype.group = function (name, groupMsg) {
        console.group(name);
        // To get print the n memebers of groupMsg
        for (var pos = 0; pos < groupMsg.length; pos++) {
            this.log(groupMsg[pos].tag, groupMsg[pos].msg, groupMsg[pos].style);
        }
        console.groupEnd();
    };
    return JTLog;
}());
exports.JTLog = JTLog;
/*
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
*/
