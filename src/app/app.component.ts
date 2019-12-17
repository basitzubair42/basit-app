import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'striver-app';
  menu: any[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/home',
      home: true,
      children: undefined
    },
    {
      title: 'Users',
      icon: 'people-outline',
      link: '/users',
      home: false,
      children: undefined
    },
    {
      title: 'Post',
      icon: 'keypad-outline',
      link: '/posts',
      home: false,
      children: undefined
    },
    {
      title: 'todos',
      icon: 'brush-outline',
      link: '/todos',
      home: true,
      children: undefined
    },
    {
      title: 'Comments',
      icon: 'edit-outline',
      link: '/comments',
      home: true,
      children: undefined
    }
    ,
    {
      title: 'Match-Results',
      icon: 'email-outline',
      link: '/match-results',
      home: true,
      children: undefined
    },
  ];
  constructor(private sidebarService: NbSidebarService) {}
  

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}