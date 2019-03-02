import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  id=2;
  fname; lname; email; password; newpassword;
  constructor(private router:Router, private userData: UserdataService) { }

  ngOnInit() {
  }

  signUpUser() {
    let flag=1;
    if(this.password === this.newpassword) {
      for (const iterator of this.userData.userdata) {
        if (iterator.username === this.email){
          flag=1;
      }
      else {
        flag=0;
      }
    }
    if(flag === 1)
    {
      alert('User already registered');
    }
    else{
      const newuser = {UserId: 'user' + this.id, username: this.email, password: this.password , fname: this.fname, lname: this.lname };
      this.userData.userdata.push(newuser);
      this.id= this.id + 1;
      this.router.navigate(['/login']);
    }
    }
    else if( this.password.length<8)
    {
      alert('Password should be 8 charcters long.');
    }
    else if( this.fname.length<4 && this.lname.length<8)
    {
      alert('Name Invalid');
    }
    else {
      alert('Password does not match.');
    }
  }

}
