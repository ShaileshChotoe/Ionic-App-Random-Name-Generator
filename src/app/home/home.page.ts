import { Component } from '@angular/core';
//import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  names = ['Shailesh', 'Posty', 'Loki', 'Derc', 'BlobBlob', 'Curvy'];
  unluckyName = 'Hier komt een random naam';
  oldName;

  constructor() { }

  update() {

    //kies een random naam
    this.chooseRandomName();

    //verander de naam als hij al gekozen is 
    this.changeNameIfAlreadyChosen();

  }

  changeNameIfAlreadyChosen() {
    //als je nieuwe naam overeenkomt met de oude naam kies dan een andere naam
    while (this.unluckyName == this.oldName) {
      this.chooseRandomName();
    }
    //zet de oude naam als nieuwe naam
    this.oldName = this.unluckyName;
  }

  chooseRandomName() {
    // kies een random getal tussen 0 en de array lengte
    var randomNumber = Math.floor((Math.random() * this.names.length));
    // kies de naam van de names array met dat random getal
    this.unluckyName = this.names[randomNumber];
  }

}

