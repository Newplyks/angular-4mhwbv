import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExampleComponent} from './app-components/example/example.component';


const routes: Routes = [
  { path: 'example', component: ExampleComponent },
  { path: 'lazy', loadChildren: () => import('./modules/lazy-example/lazy-example.module').then(m => m.LazyExampleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
