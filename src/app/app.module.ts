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
import { UsersComponent } from './features/users/users.component';
import { CreateUserComponent } from './features/users/component/create-user/create-user.component';
import { RemoveUserComponent } from './features/admin/components/remove-user/remove-user.component';
import { EditUserComponent } from './features/admin/components/edit-user/edit-user.component';
import { ShowUsersComponent } from './features/admin/components/show-users/show-users.component';

@NgModule({
  declarations: [AppComponent, UsersComponent, CreateUserComponent, RemoveUserComponent, EditUserComponent, ShowUsersComponent],
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
