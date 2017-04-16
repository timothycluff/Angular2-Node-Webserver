/**
 * Created by tim.cluff on 4/15/2017.
 */
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {ExperienceComponent} from './experience/experience.component';
import {TechnologyComponent} from './technology/technology.component';
import {EducationComponent} from './education/education.component';
import {ConnectComponent} from './connect/connect.component';

const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'experience', component: ExperienceComponent},
    {path: 'technology', component: TechnologyComponent},
    {path: 'education', component: EducationComponent},
    {path: 'connect', component: ConnectComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}