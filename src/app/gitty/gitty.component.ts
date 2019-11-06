import { Component, OnInit } from '@angular/core';
import {GittyHttpService} from '../gitty-http/gitty-http.service';
import{User} from '../user-details/user'
import{HttpClient} from '@angular/common/http';
import{Repos} from '../repos/repos';

@Component({
  selector: 'app-search',
  templateUrl: './gitty.component.html',
  styleUrls: ['./gitty.component.css']
})

export class GittyComponent implements OnInit {
  
      profile: any = {
        avatar_url: ''
      };
      repos: any = [];
      username: string;
      user: any;;
        
      constructor(private httpService:GittyHttpService) {
        this.httpService.getUser().subscribe(user => {
          this.user = user;
          this.username = "";
        });
        this.httpService.getUser().subscribe(profile => {
          this.profile = profile
        })
        this.httpService.getRepos().subscribe(repos => {
          this.repos = repos;
        });
    
      }
    
      bioInfo() {
        this.httpService.getData(this.username);
        this.httpService.userRequest()
        this.httpService.getData(this.username);
        this.httpService.getUser().subscribe(profile => {
          this.httpService.userRequest()
          this.user = this.httpService.user
          this.profile = profile
        });
        this.httpService.getRepos().subscribe(repos => {
          this.repos = repos;
        });
      }
    
  ngOnInit() {
    
  }

  
}
