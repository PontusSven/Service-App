import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  note: any;

  constructor(public modalController: ModalController) {

    this.note = [
      'Note 1',
      'Note 2',
      'Note 3',
      'Note 4'
    ];
  }   

  async OpenModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    await modal.present();
  }
}
