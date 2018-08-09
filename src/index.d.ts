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
    default: string;
    table: string;
    warn: string;
    info: string;
    startBold: string;
    call: string;
    head: string;
    setConfig(holder: string, value: any): void;
    clear(): void;
    log(tag: string, msg: any, style?: string): void;
    group(name: string, groupMsg: Group[]): void;
    constructor();
}
