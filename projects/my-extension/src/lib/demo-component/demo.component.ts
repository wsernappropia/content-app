import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'I am a software developer passionate about Angular and web technologies.'
  };

  constructor() { }

  ngOnInit(): void {
  }

  updateProfile(): void {
    console.log('Profile updated');
  }
}
