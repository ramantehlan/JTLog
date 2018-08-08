"use strict";
/*******************************
*  This is to log the activites of a web application
*
*  Date of Creation: 01-08-2018
*  Creator: Raman Tehlan
*******************************/
exports.__esModule = true;
var JTLog = /** @class */ (function () {
    function JTLog() {
        // To define if console log is allowed or not
        this.allowLog = false;
        this.pageName = "Deafult";
        // Style for logs
        this["default"] = "color:black; font-size:12px;";
        this.table = "color:green; font-size:11px;";
        this.warn = "color:red; font-size:12px;";
        this.info = "color:blue; font-size:12px;";
        this.start = "color:gray; font-size:14px;font-weight:bold";
        this.call = "color:green; font-size:10px;";
        this.head = "color:blue; font-size:10px;";
    }
    // To set the allow log permission
    JTLog.prototype.setAllowLog = function (permission) {
        this.allowLog = permission;
    };
    JTLog.prototype.clear = function () {
        console.clear();
    };
    // To push the log to console
    JTLog.prototype.log = function (tag, msg, style) {
        if (style === void 0) { style = ""; }
        if (this.allowLog) {
            // Function space
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
                case "head":
                    console.log("%cFile: " + msg, this.head + style);
                    break;
                case "start":
                    console.log("%c" + msg, this.start + style);
                    break;
                case "call":
                    console.log("%cCalled: " + msg, this.call + style);
                    break;
                default:
                    console.log('%c' + msg, this["default"] + style);
                    break;
            }
            // Over
        }
    };
    return JTLog;
}());
exports.JTLog = JTLog;
/*
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'


        console.log('%c This text will now be blue and large', 'color: blue; font-size: x-large');
        console.log("%c This is just for *testing*",'color: black; font-size: 12px');
*/
