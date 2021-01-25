import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { ShowComponent } from './components/show/show.component';

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'show', component:ShowComponent},
  {path:'', redirectTo:'/register', pathMatch:'full'},
  {path:'**', redirectTo:'/register'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
