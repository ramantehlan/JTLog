/******************************* 
*  This is to log the activites of app
*
*  Date of Creation: 01-08-2018
*  Creator: Raman Tehlan
*******************************/

/*******************************
 * 	Usage of this libarary; 
 * 
 * 	1. Setup file to use Jlog
 * 		- Import the library 	
 * 				import { J } from "LOCATION"
 * 		- Pass it in constructor parameter 
 * 				(public J:J)
 *		
 * 	2. Call the function to console log
 * 		- J.log(tag, msg, style);
 * 
 *******************************/

 /**
  * Tag list:
  * 
  * default: normal log
  * table: to print table
  * warn: to print warning 
  * info: to print information 
  * start: to print the partition of a new program or this program
  * call: to print if the function is called
  * head: to print which file is opened right now 
  */

//
// To perform http calls 
//
export class J { 

	// To define if console log is allowed or not
	allowLog: boolean = false;
	pageName: string = "Deafult";
	// Style for logs
	default:string = "color:black; font-size:12px;";
	table:string = "color:green; font-size:11px;";
	warn:string = "color:red; font-size:12px;";
	info:string = "color:blue; font-size:12px;";
	start:string = "color:gray; font-size:14px;font-weight:bold";
	call:string = "color:green; font-size:10px;";
	head:string = "color:blue; font-size:10px;";

	// To set the allow log permission
	setAllowLog(permission: boolean): void{
		this.allowLog = permission;
	}

	clear(): void{
		console.clear();
	}


	// To push the log to console
	log(tag: string, msg: any , style: string = ""): void{
		if(this.allowLog){
			// Function space
			
				switch(tag){
					case "head":
						console.log("%cFile: " + msg, this.head + style);
					break;
					case "start":
						console.log("%c" + msg, this.start + style );
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


    constructor() { }

}


/*
 		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeStamp', 'trace', 'warn'


    	console.log('%c This text will now be blue and large', 'color: blue; font-size: x-large');
    	console.log("%c This is just for *testing*",'color: black; font-size: 12px');
*/
