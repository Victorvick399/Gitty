import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user-details/user'
import { Repos } from '../repos/repos';

@Injectable({
  providedIn: 'root'
})
export class GittyHttpService{

username: string;
  user: User;
  repo: Repos;
  clientid = '219cb0d2d48fa7a4c8bd';
  clientsecret = '5521e4398e0c2f2a73ca14e8f69bb463efbec8b5';


  constructor(private http: HttpClient) {
    this.user = new User("", "", 0, 0);
    this.repo = new Repos("", "", "")
    this.username = 'Victorvick399';

  }
  userRequest() {
    interface ApiResponse {
      avatar_url: string;
      name: string;
      followers: number;
      following: number;
      
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.APIURL + this.username + environment.APIKEY).toPromise().then(response => {
        this.user.avatar_url = response.avatar_url
        this.user.name = response.name      
        this.user.followers = response.followers
        this.user.following = response.following  
        resolve()
      },
        error => {
          this.user.name = "User name could not be retrieved. Try again."
          reject(error)
        }
      )
    })
    return promise
  }
  
  getUser() {
    interface ApiResponse {
      login: string;
    }
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
  }
  
  getRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
  }
  
  getData(username: string) {
    this.username = username;
  }
}