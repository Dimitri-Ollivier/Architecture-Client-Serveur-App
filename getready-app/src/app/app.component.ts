import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'getready-app';
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(public router: Router) {
    this.navLinks = [
      {
        label: 'Liste des demandes',
        link: 'liste-demandes',
        index: 0
      }, {
        label: 'Créer une demande',
        link: 'demande-article/new',
        index: 1
      }, {
        label: 'Panier',
        link: 'shopping-cart',
        index: 2
      },
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

  getShoppingCart() {
    this.router.navigateByUrl('/login')
  }

  goToUser() {
    this.router.navigateByUrl('/user/' + '')
  }
}
