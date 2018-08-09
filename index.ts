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
		pageName : "Default",
		appName : null,
		appStartTime: new Date().toLocaleString()
	}


	// Tags style for logs
	startBold:string = "color:gray; font-size:10px;";
	table:string = "color:green; font-size:11px;";
	default:string = "color:black; font-size:11px;";
	error:string = "color:red;font-size:11px;";
	warn:string = "color:orange; font-size:11px;";
	info:string = "color:yellow; font-size:11px;";
	call:string = "color:green; font-size:11px;";
	file:string = "color:blue; font-size:11px;";

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
					case "default":
						console.log("%c" + msg, this.default + style);
					break;
					case "warn":
						console.warn("%cWarn: " + msg, this.warn + style);
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
						let start: Group[] = [];
						start.push({	
										tag: "startBold" , 
										msg: "%c" + "------------------------------------",
										style:  style
								   });
						start.push({	
										tag: "startBold" , 
										msg: "%cApp Name: " + msg + 
											 "%cTime of Starting: " + this.config["appStartTime"]  
										,
										style:  style
									});
						start.push({	
										tag: "startBold" , 
										msg: "%c" + "-----------------------------------",
										style: style
								   });

						this.group("JTLog Started", start);
					break;
					case "startBold":
						console.log("%c" + msg, this.startBold + style);
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
