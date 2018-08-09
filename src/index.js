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
            pageName: "Default"
        };
        // Tags style for logs
        this.default = "color:black; font-size:12px;";
        this.table = "color:green; font-size:11px;";
        this.warn = "color:red; font-size:12px;";
        this.info = "color:blue; font-size:12px;";
        this.startBold = "color:gray; font-size:14px;font-weight:bold";
        this.call = "color:green; font-size:10px;";
        this.head = "color:blue; font-size:10px;";
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
                    console.table("%c" + msg, this.table + style);
                    break;
                case "warn":
                    console.warn("%cWarning: " + msg, this.warn + style);
                    break;
                case "info":
                    console.info("%cInformation: " + msg, this.info + style);
                    break;
                case "file":
                    console.log("%cFile: " + msg, this.head + style);
                    break;
                case "start":
                    var start = [];
                    start[1] = {
                        tag: "startBold",
                        msg: "%c" + "------------------------",
                        style: style
                    };
                    start[2] = {
                        tag: "startBold",
                        msg: "%c" + msg,
                        style: style
                    };
                    start[3] = start[1];
                    this.group("Starting", start);
                    break;
                case "startBold":
                    console.log("%c" + msg, this.startBold + style);
                    break;
                case "call":
                    console.log("%cCalled: " + msg, this.call + style);
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
