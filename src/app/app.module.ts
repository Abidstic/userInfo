import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserGridComponent } from './user-grid/user-grid.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserInformationComponent } from './user-information/user-information.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    UserGridComponent,
    UserFormComponent,
    UserInformationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'user-information',component: UserInformationComponent},
      {path:'user-form',component:UserFormComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
