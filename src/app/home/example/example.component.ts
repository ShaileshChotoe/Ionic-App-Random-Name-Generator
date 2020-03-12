import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { CheckboxControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})

export class ExampleComponent implements OnInit {

  namenLijst;

  constructor(private api: ApiService) { }

  ngOnInit() {

    this.api.getNames().subscribe(data => this.set(data));

  }

  set(data) {
    this.namenLijst = data;
  }

}
