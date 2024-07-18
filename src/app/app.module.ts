import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';

// i18n
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoadInterceptor } from './core/interceptors/load.interceptor';

import { MarkdownModule } from 'ngx-markdown';
import { AnnaErrorPageModule } from 'anna-error-page-input';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { LandingPageModule } from './features/landing-page/landing-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
    TranslateModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AnnaErrorPageModule,
    CoreModule,
    NgxSkeletonLoaderModule,
    LandingPageModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadInterceptor, multi: true },
  ],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
