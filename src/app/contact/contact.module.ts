import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { ContactDataRoutingModule } from './contact-routing.module';


@NgModule({
  declarations: [
    Component1Component,
    Component2Component,
    ContactHomeComponent
  ],
  imports: [
    CommonModule,
    ContactDataRoutingModule
  ]
})
export class ContactModule { }
