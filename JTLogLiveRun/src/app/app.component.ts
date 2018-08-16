import { Component } from '@angular/core';
import { JTLog } from "../../../index";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Testing';

  constructor(J:JTLog){
    J.log("start","JTLogLiveRun");
    J.log("default", "This is for testing! ");
    J.log("error","This is a sample error! ");

    J.printRecord();
  }

}
