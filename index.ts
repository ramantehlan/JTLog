/*******************************************************
*  This module is to print, manage, and handle the console
*  logs, it is originally designed for one page applications
*
*  Date of Creation: 01-08-2018
*  Creator: Raman Tehlan
*********************************************************/

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
export class Group{
	tag: string = "";
	msg: any;
	style: string = "";
}

// 
// This is the main class that will be used to print logs
// 
export class JTLog { 

	// This is the configuration for JTLog
	config: {[x: string]: any} = {
		allowLog : true,
		pageName : "Default"
	}


	// Tags style for logs
	default:string = "color:black; font-size:12px;";
	table:string = "color:green; font-size:11px;";
	warn:string = "color:red; font-size:12px;";
	info:string = "color:blue; font-size:12px;";
	startBold:string = "color:gray; font-size:14px;font-weight:bold";
	call:string = "color:green; font-size:10px;";
	head:string = "color:blue; font-size:10px;";

	//
	// To change and set a new configuration value
	//
	setConfig(name: string, value: any): void{
		this.config[name] = value;
	}

	// 
	// To get a value of configuration
	// 
	getConfig(name:string): any{
		return this.config[name];
	}

	//
	// To clear the console log and the collected logs
	// 
	clear(): void{
		console.clear();
	}


	// To push the log to console
	public log(tag: string, msg: any , style: string = ""): void{
		if(this.config["allowLog"]){
			// Function space
				
				// To swich according to the tag
				switch(tag){
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
						let start: Group[] = [];
						start[1] = {	
										tag: "startBold" , 
										msg: "%c" + "------------------------",
										style: style
								   }
						start[2] = {
										tag: "startBold" , 
										msg: "%c" + msg,
										style: style
									}
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
						console.log('%c' + msg , this.default + style);
					break;
				}
			// Over
		}
	}

	//
	// To print a group 
	// 
	public group(name: string, groupMsg: Group[]){
		console.group(name);
			// To get print the n memebers of groupMsg
			for(let pos = 0; pos < groupMsg.length; pos++){
				this.log(groupMsg[pos].tag , groupMsg[pos].msg, groupMsg[pos].style);
			}
		console.groupEnd();
	}


    constructor() { 
    }

}

/*
 		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeStamp', 'trace', 'warn'
*/
