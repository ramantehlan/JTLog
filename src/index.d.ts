/*******************************
*  This is to log the activites of a web application
*
*  Date of Creation: 01-08-2018 \n
*  Creator: Raman Tehlan
*******************************/
export declare class JTLog {
    allowLog: boolean;
    pageName: string;
    default: string;
    table: string;
    warn: string;
    info: string;
    start: string;
    call: string;
    head: string;
    setAllowLog(permission: boolean): void;
    clear(): void;
    log(tag: string, msg: any, style?: string): void;
    constructor();
}
