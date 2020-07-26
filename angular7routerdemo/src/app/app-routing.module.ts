import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'contacts' , component: ContactListComponent},
  {path: 'contact/:id' , component: ContactDetailComponent},
  {path: 'Home' , component: HomeComponent},
  {path: 'about' , component: AboutUsComponent},
  {path: '**', redirectTo: '/Home', pathMatch: 'full'}
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
