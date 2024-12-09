import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialAuthService, FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-facebook',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent {

  user: any;
  userData: any;

  constructor(
    private authService: SocialAuthService,
    private http: HttpClient // Inject HttpClient
  ) {}

  signInWithFacebook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(user => {
      this.user = user;
      console.log('User: ', user);
      // Send token to backend
      this.http.post('http://localhost:5000/auth/facebook/token', { access_token: user.authToken }).subscribe({
        next: response => console.log('Backend response:', response),
        error: err => console.error('Error from backend:', err)
      });
    });
  }


  getUserSession(): void {
    this.http.get('http://localhost:5000/auth/user', { withCredentials: true }).subscribe({
      next: (response: any) => {
        console.log('User session:', response);
        this.user = response; // Save the user session data
      },
      error: err => {
        console.error('Error fetching user session:', err);
        this.user = null; // If there is no session, reset the user data
      }
    });
  }
  
  signOut(): void {
    this.authService.signOut();
    this.user = null;
  }

}
