import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserDataRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [
    Component1Component,
    Component2Component,
    UserHomeComponent
  ],
  imports: [
    CommonModule,
    UserDataRoutingModule
  ]
})
export class UserModule { }
