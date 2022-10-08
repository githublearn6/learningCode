import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // alertBoxToggle = false;
  d: any
  title = 'bootstrapImplementation';

  // alertBoxToggleEvent(){
  //   this.alertBoxToggle = !this.alertBoxToggle;
  // }
  currentRate = 8;
ngOnInit(){

}


}
