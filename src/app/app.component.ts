import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = '・アニス・';
  ngOnInit(): void {
    Aos.init();
  }
  // hide: boolean = true;

  // func() {
  //   this.hide = !this.hide;
  // }
}
