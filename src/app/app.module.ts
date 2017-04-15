import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdInputModule,
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


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
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
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
