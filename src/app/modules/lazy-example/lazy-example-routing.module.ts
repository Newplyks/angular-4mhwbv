import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ReactiveFormExampleComponent} from './components/reactive-form-example/reactive-form-example.component';
import {PlotlyExampleComponent} from './components/plotly-example/plotly-example.component';
import {TableExampleComponent} from './components/table-example/table-example.component';
import {HttpClientModule} from '@angular/common/http';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'form-example', component: ReactiveFormExampleComponent},
  {path: 'plotly-example', component: PlotlyExampleComponent},
  {path: 'table-example', component: TableExampleComponent}
];

@NgModule({
  imports: [HttpClientModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyExampleRoutingModule {
}
