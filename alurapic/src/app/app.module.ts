import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { PhotosModule } from './photos/photos.module';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { ContentModule } from './content/content/content.module';

@NgModule({
  declarations: [
      AppComponent,
  ],
  imports: [
      BrowserModule,
      PhotosModule,
      AppRoutingModule,
      ContentModule,
      ErrorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
