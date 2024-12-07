import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideSocialAuth } from '@abacritt/angularx-social-login';
import { FacebookLoginProvider } from '@abacritt/angularx-social-login';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  providers: [
    provideHttpClient(),
    provideSocialAuth({
      autoLogin: false,
      providers: [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('YOUR_FACEBOOK_APP_ID')
        }
      ]
    })
  ]
