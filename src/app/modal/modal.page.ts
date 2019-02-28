import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {

  noteTitle: string = ""
  noteContent: string = ""

  public notes: Array<{ title: string; content: string;}> = [];

  constructor(
    public modalCtrl: ModalController
  ) {
  

   }

  dismiss() {
    this.modalCtrl.dismiss();
    console.log('exited modal')
  }

  saveNote() {

    this.notes.push({
      title: `${this.noteTitle}`,
      content: `${this.noteContent}`
    })
    
    console.log(this.notes)
    console.log(this.noteTitle)
  
  }


}
