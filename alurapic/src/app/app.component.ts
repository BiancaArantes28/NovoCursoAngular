import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './core/user/user';
import { UserService } from './core/user/user.service';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  
  ngOnInit(): void {
    
    
  }

  

  user$: Observable<User>;

    constructor(private userService: UserService, private router: Router){
        this.user$ = userService.getUser();
        
    }

    logout(){
        this.userService.logout();
        this.router.navigate(['']);
    }
}
