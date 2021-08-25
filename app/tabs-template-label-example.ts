import {Component , OnInit, ViewEncapsulation} from '@angular/core';
import { FormControl } from '@angular/forms';

/**
 * @title Complex Example
 */
@Component({
  selector: 'tabs-template-label-example',
  templateUrl: 'tabs-template-label-example.html',
  styleUrls: ['./tabs-template-label-example.css'],
  encapsulation : ViewEncapsulation.None
})
export class TabsTemplateLabelExample implements OnInit {

   x = ['a','b','c','d','e'];
   y = [];
   constructor(){
     
   }
   ngOnInit(){
    console.log(this.x);
    this.y = this.x.splice(2,1);
    console.log(this.x);
   }
   tabs = ['First', 'Second', 'Third'];
   selected = new FormControl(0);
 
   addTab(selectAfterAdding: boolean) {
     this.tabs.push('New1');
 
     if (selectAfterAdding) {
       this.selected.setValue(this.tabs.length - 1);
     }
   }
 
   removeTab(index: number) {
     console.log(index);
     this.tabs.splice(index, 1);
   }
   
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */