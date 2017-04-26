import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MdInputModule,
  MdCheckboxModule,
  MdMenuModule,
  MdSidenavModule,
  MdToolbarModule,
  MdListModule,
  MdCardModule,
  MdTabsModule,
  MdButtonModule,
  MdIconModule,
  MdProgressSpinnerModule,
  MdProgressBarModule,
  MdDialogModule,
  MdSnackBarModule
} from '@angular/material';

import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {ExperienceComponent} from './experience/experience.component';
import {TechnologyComponent} from './technology/technology.component';
import {EducationComponent} from './education/education.component';
import {ConnectComponent} from './connect/connect.component';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
// Import Components

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProfileComponent,
        ExperienceComponent,
        TechnologyComponent,
        EducationComponent,
        ConnectComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        FormsModule,
        BrowserAnimationsModule,
        CommonModule,
        MdInputModule,
        MdCheckboxModule,
        MdMenuModule,
        MdSidenavModule,
        MdToolbarModule,
        MdListModule,
        MdCardModule,
        MdTabsModule,
        MdButtonModule,
        MdIconModule,
        MdProgressSpinnerModule,
        MdProgressBarModule,
        MdDialogModule,
        MdSnackBarModule,
        FlexLayoutModule,
        AppRoutingModule,
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule {
}
