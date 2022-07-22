import { Component, OnInit } from '@angular/core';
import {WeaponService} from "../services/weapon";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  weapons: any;

  constructor(private weaponService: WeaponService) { }

  ngOnInit(): void {
    this.weapons = this.weaponService.getWeapons()

    console.log(this.weapons)
  }

  displayedColumns: string[] = ['name', 'description'];
}
