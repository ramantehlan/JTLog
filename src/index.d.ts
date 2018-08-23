/*******************************************************
*  This module is to print, manage, and handle the console
*  logs, it is originally designed for one page applications
*
*  Date of Creation: 01-08-2018
*  Creator: Raman Tehlan
*********************************************************/
export declare class Group {
    tag: string;
    msg: any;
    style: string;
}
export declare class JTLog {
    config: {
        [x: string]: any;
    };
    History: {
        tag: string;
        msg: any;
        time: any;
    }[];
    startBold: string;
    table: string;
    default: string;
    error: string;
    warn: string;
    info: string;
    call: string;
    file: string;
    setConfig(name: string, value: any): void;
    getConfig(name: string): any;
    clear(): void;
    action(tag: string, msg: any, style?: string): void;
    log(tag: string, msg: any, style?: string): void;
    group(name: string, groupMsg: Group[]): void;
    record(tag: string, msg: any, time: any): void;
    printRecord(): void;
    constructor();
}
