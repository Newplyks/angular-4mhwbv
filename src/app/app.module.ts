import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationComponent} from './core/navigation/navigation.component';
import {ExampleComponent} from './app-components/example/example.component';
import {SharedModule} from './modules/shared/shared.module';
import {ToastrModule} from 'ngx-toastr';
import {CommonModule} from '@angular/common';

import {PlotlyViaCDNModule} from 'angular-plotly.js'
import {NgxDaterangepickerMd} from 'ngx-daterangepicker-material';
import {RxReactiveFormsModule} from '@rxweb/reactive-form-validators';


PlotlyViaCDNModule.plotlyVersion = 'latest'; // can be `latest` or any version number (i.e.: '1.4.3')
PlotlyViaCDNModule.plotlyBundle = null; // optional: can be null (for full) or 'basic', 'cartesian', 'geo', 'gl3d', 'gl2d', 'mapbox' or 'finance'


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ToastrModule.forRoot(),
    PlotlyViaCDNModule,
    NgxDaterangepickerMd.forRoot(),
    RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
