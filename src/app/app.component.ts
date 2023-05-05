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
  toggleMenu() {
    const menu = document.getElementById('menu');
    const burger = document.getElementById('burger');

    if (menu && burger) {
      menu.classList.toggle('menu-active');
      burger.classList.toggle('burger-active');
      console.log('hello');
    }
  }
}
