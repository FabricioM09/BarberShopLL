import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxGalleryModule } from 'ngx-gallery';
import { GalleryModule } from  '@ngx-gallery/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryComponent } from './components/gallery/gallery.component';

/* Custom Hammer configuration */
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';

export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    'pan': {
      direction: Hammer.DIRECTION_ALL,
    }
  }
}
/* End Custom hammer configuration */

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MDBBootstrapModule.forRoot(),
    NgxGalleryModule,
    GalleryModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [{provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
