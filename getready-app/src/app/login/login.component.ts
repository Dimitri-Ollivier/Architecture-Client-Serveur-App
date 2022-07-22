import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  name: String = "";
  surname: String = "";
  mail: String = "";
  password: String = "";


  constructor(private userService: UserService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  login() {
      this.userService.getUsers();
  }

  register() {
    const user:any = {name: "test", surname: "test", mail: "test@gmail.com", password: "140501"};

    this.userService.addUser(user).subscribe(res =>
      {
          this._snackBar.open( res.status + " " + res, "Ok", {
            duration: 2000,
          });
      }
    )
  }
}
