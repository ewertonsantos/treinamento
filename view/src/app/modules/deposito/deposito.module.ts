import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositoComponent } from './deposito.component';
import { DepositoRoutingModule } from './deposito-routing.module';
import { ContaComponent } from '../conta/conta.component';
import { ContaRoutingModule } from '../conta/conta-routing.module';



@NgModule({
  declarations: [
    DepositoComponent,
    ContaComponent
  ],
  imports: [
    CommonModule,
    DepositoRoutingModule,
    ContaRoutingModule
  ]
})
export class DepositoModule { }
