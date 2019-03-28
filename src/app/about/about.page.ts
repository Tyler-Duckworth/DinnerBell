import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  screenWidth: number;
  constructor(
    private router: Router,
    private platform: Platform
  ) { }

  ngOnInit() {
    this.screenWidth = this.platform.width();
  }
  navigate() {
    this.router.navigate(["/nav"]);
  }

}
