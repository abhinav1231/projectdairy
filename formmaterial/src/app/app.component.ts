import { Component } from '@angular/core';
import { Http} from '@angular/http';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  showFiller = false;
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;
  name: any;
  email: any;
  password: any;
  data: any;
  date: any;
  subject: string;
  teacher: string;
  comment: any;

  constructor(private http: Http) {
  this.data = 'parent data sharing';

  }

  login() {
    let datas = {  email: this.email, password: this.password };
    this.http.post('http://103.201.142.41:4001/api/login', datas)
    .subscribe(function(data) {
      if (data.json().status === 200) {
        alert('successfull');
      } else {
        alert('wrong ');
      }

    });
  }
  schoolform() {
    let school = {date: this.date, subject: this.subject, teacher: this.teacher, comment: this.comment};
    this.http.post('http://103.201.141.41:4001/api/login', school)
    .subscribe(function(data){
      if (data.json().status === 200){
        alert ('data sent successfull');
      } else {
        alert('not received');
      }
    } ) ;
  }

}

