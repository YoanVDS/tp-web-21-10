import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'contactList',
    component: ContactListComponent,
  },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent, HelloComponent, ContactListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
