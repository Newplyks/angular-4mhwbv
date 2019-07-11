import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormExampleComponent } from './components/reactive-form-example/reactive-form-example.component';
import {LazyExampleRoutingModule} from "./lazy-example-routing.module";
import {CustomMaterialModule} from "../material.module";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { PlotlyExampleComponent } from './components/plotly-example/plotly-example.component';
import {PlotlyViaCDNModule} from "angular-plotly.js";
import {SharedModule} from "../shared/shared.module";
import { TableExampleComponent } from './components/table-example/table-example.component';



@NgModule({
  declarations: [
    ReactiveFormExampleComponent,
    DashboardComponent,
    PlotlyExampleComponent,
    TableExampleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CustomMaterialModule,
    LazyExampleRoutingModule,
    PlotlyViaCDNModule
  ]
})
export class LazyExampleModule { }
