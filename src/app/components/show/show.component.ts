import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  users:Array<User>;
  constructor(private registerService:RegisterService) { }

  ngOnInit(): void {
    this.registerService.show().subscribe(data => {this.users = data["data"]})
  }

}
