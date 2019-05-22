import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { AuthGuard } from './auth/auth.guard';
const routes: Routes = [
  {path : '' , component : HomeComponent,canActivate :[AuthGuard]},
  {path : 'home' , component : HomeComponent,canActivate :[AuthGuard]},
  {path : 'upload' , component : FileuploadComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
