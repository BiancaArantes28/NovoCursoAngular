import { Component, OnInit } from "@angular/core";
import { UserService } from "../user/user.service";
import { Observable } from "rxjs";
import { User } from "../user/user";
import { Router } from "@angular/router";

declare var $: any;
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    ngOnInit(): void {
        $(".scroller").slimScroll({
            height: '250px'
        });
    }

    user$: Observable<User>;

    constructor(private userService: UserService, private router: Router){
        this.user$ = userService.getUser();
    }
    
    logout(){
        this.userService.logout();
        this.router.navigate(['']);
        location.reload();
    }

    teste(){
        alert("click");
    }
}