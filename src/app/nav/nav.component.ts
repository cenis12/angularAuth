import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  authenticated: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
          this.authenticated = auth;
      }
    )
  }

  logout(): void {
    this.http.post('http://localhost:8000/api/logout',{}, {withCredentials: true})
    .subscribe(() => this.authenticated = false);
  }

}
