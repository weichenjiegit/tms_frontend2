import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './tms.routing';
import { Tms } from './tms.component';
import { Shipment } from './components/shipment/shipment.component';
import { Order } from './components/order/order.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BasicTablesService } from './components/shipment/shipment.service';
import { HoverTable } from './components/shipment/components/hoverTable.component';
import { OrderService } from './components/order/order.service';
import { ShipButton } from './components/order/shipButton/shipButton.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    routing
  ],
  declarations: [
    Tms,
    Shipment,
    Order,
    HoverTable,
	ShipButton
  ],
  providers: [
    BasicTablesService,
    OrderService
  ]
})
export default class TablesModule {}
