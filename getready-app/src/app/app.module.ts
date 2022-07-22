import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { WeaponComponent } from './weapon/weapon.component';
import { AccessoryComponent } from './accessory/accessory.component';
import { WeaponCreatorComponent } from './weapon-creator/weapon-creator.component';
import { AccessoryCreatorComponent } from './accessory-creator/accessory-creator.component';
import { UserService } from "./services/user";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    ShoppingCartComponent,
    WeaponComponent,
    AccessoryComponent,
    WeaponCreatorComponent,
    AccessoryCreatorComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
