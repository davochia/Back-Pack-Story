import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/commons/login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {}

  openLogin(){
    const dialogRef = this.dialog.open(LoginComponent, {height:'500px', width:'500px'})
   
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  openRegister(){
    const dialogRef = this.dialog.open(RegisterComponent, {height: '600px', width: '500px'})
  }

}


