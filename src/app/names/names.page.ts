import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../home/example/components.module';
import { ApiService } from 'src/app/api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-names',
  templateUrl: './names.page.html',
  styleUrls: ['./names.page.scss'],
})

export class NamesPage implements OnInit {

  names;

  mysql_data;

  constructor(private api: ApiService,
    public alertController: AlertController) {
    this.api.getNames().subscribe(data => this.set(data));
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Waarschuwing',
      subHeader: 'Je moet tenminste 2 namen toevoegen.',
      buttons: ['OK']
    });

    await alert.present();
  }

  add() {
    //voeg nieuwe naam toe aan array als de input niet leeg is
    var newName = document.querySelector("input");
    var naamObj = {
      "naam": newName.value
    };
    if (newName.value != '') {
      this.mysql_data.push(naamObj);
      newName.value = '';
    }
  }

  set(data) {
    //zet mysql data aan data
    this.mysql_data = data;
  }


  remove(name) {
    //verwijder een naam uit de array als erop geklikt is
    for (let i = 0; i < this.mysql_data.length; i++) {
      if (this.mysql_data[i].naam == name) {
        this.mysql_data.splice(i, 1);
      }
    }
  }

  saveChanges() {

    //als er 1 of minder namen zijn toegoevoegd kan je niet saven
    if (this.mysql_data.length <= 1) {
      this.presentAlert();
    } else {
      var json_names = JSON.stringify(this.mysql_data);
      this.api.postNames(json_names);
    }
  }

  ngOnInit() {
  }

}
