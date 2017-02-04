import { Routes, RouterModule }  from '@angular/router';

import { Tms } from './tms.component';
import { Order } from './components/order/order.component';
import { Shipment } from './components/shipment/shipment.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Tms,
    children: [
      { path: 'order', component: Order },
      { path: 'shipment', component: Shipment }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
