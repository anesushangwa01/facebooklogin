import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideSocialAuth } from '@abacritt/angularx-social-login';
import { FacebookLoginProvider } from '@abacritt/angularx-social-login';

// Bootstrap the application
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideHttpClient(),
    provideSocialAuth({
      autoLogin: false, // Optional: Enable if you want automatic re-login
      providers: [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('YOUR_FACEBOOK_APP_ID')
        }
      ]
    }),
  ]
}).catch((err) => console.error(err));
