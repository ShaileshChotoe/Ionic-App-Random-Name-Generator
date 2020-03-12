import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  mysql_data;
  unluckyName = ' Hallo ';
  oldName;

  constructor(private api: ApiService) {
    //roep getprofile aan en roep de functie set aan met de data
    this.updateNames();
  }

  updateNames() {
    this.api.getNames().subscribe(data => this.set(data));
  }


  set(data) {
    //zet mysql data aan data
    this.mysql_data = data;
  }


  ionViewWillEnter() {
    this.updateNames();
    console.log('test');
  }

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
    var randomNumber = Math.floor((Math.random() * this.mysql_data.length));

    // kies de naam van de names array met dat random getal
    this.unluckyName = this.mysql_data[randomNumber].naam;
  }

}

