import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';

@NgModule({
    declarations: [ HomeComponent ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [
        HomeComponent
    ]
})

export class HomeModule { }

export const homeComponent = HomeComponent;
