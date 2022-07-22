import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomeComponent } from "./home/home.component";
import { WeaponComponent } from "./weapon/weapon.component";
import { WeaponCreatorComponent } from "./weapon-creator/weapon-creator.component";
import { AccessoryComponent } from "./accessory/accessory.component";
import { AccessoryCreatorComponent } from "./accessory-creator/accessory-creator.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shopping-cart/:id', component: ShoppingCartComponent },
  { path: 'weapon/:id', component:  WeaponComponent},
  { path: 'weapon/new', component: WeaponCreatorComponent },
  { path: 'accessory/:id', component: AccessoryComponent },
  { path: 'accessory/new', component: AccessoryCreatorComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
