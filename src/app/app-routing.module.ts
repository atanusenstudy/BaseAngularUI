import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path:'',component:LoginComponent,
  children:[
    
  ]},

  {path : 'Home',component:HomeComponent},
  {path : 'Contact',loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)},
  {path : 'User', loadChildren: () => import('./user/user.module').then(m => m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
