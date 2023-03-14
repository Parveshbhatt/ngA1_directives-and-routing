import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  username: string = '';
  userList:string[] = [];
  userType:number=1;

  routedUserType:number = 0;
 
  constructor(private router:Router, private route: ActivatedRoute){}

  ngOnInit(): void {
      this.route.params.subscribe((data:Params) => {
        this.routedUserType = data['userType'];
      })
  }

  onAddUserClick(){
    this.userList.push(this.username);
    this.router.navigate(['/users', this.userType])
  }
}
