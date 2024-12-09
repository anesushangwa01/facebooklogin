import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialAuthService, FacebookLoginProvider } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-facebook',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './facebook.component.html',
  styleUrl: './facebook.component.css'
})
export class FacebookComponent {

  user: any;

  constructor(private authService: SocialAuthService) {}

  signInWithFacebook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(user => {
      this.user = user;
      console.log('User: ', user);
    });
  }

}
