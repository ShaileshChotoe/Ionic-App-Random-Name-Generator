import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getNames() {
    //pak de data van de server in dit geval localhost:1234, en return het
    var data = this.http
      .get(`http://localhost:1234/names.php`);
    return data;
  }

  postNames(json) {
    this.http.get("http://localhost:1234/update.php?post=" + json, { responseType: 'text' })
      .subscribe((result) => console.log(result));
  }

}
