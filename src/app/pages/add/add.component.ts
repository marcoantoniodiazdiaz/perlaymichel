import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  numero: string;
  nombres: string;
  apellidos: string;
  fecha: string;
  telefono: string;

  isLoading = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  async save(f: NgForm) {
    if (!f.valid) return;

    this.isLoading = true;
    const resp = await this.http.post('https://angular-c0810-default-rtdb.firebaseio.com/pacientes.json', f.value, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }).toPromise();
    this.isLoading = false;
    console.log(resp);
  }

}
