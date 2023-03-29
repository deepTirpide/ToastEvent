import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class Toastevent extends LightningElement {

    myTitle ="showtoast";

handleClick(){
    this.showToast();

}
      
showToast(){

    const event = new ShowToastEvent({

        title: 'abc toast event displayed',
        message: 'hi welcome to toast event learning',
        
        variant: 'warning',

    })
    this.dispatchEvent(event);
}

}