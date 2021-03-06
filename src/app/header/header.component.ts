import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();  
  constructor() { }

  ngOnInit() {
  }
  onClick(event){
    // this.featureSelected = event.toElement.text;
    // console.log(this.featureSelected);
    this.featureSelected.emit(event.toElement.text);
  }


}
