import {Component, ViewEncapsulation} from '@angular/core';

import { OrderService } from './order.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'basic-tables',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./order.scss')],
  template: require('./order.html')
})
export class Order {

  query: string = '';

  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      orderId: {
        title: 'Order ID',
        type: 'number'
      },
      shipDate: {
        title: 'Ship Date',
        type: 'string'
      },
      deliveryDate: {
        title: 'Delivery Date',
        type: 'string'
      },
      transitDays: {
        title: 'Transit Days',
        type: 'string'
      },
      weight: {
        title: 'Weight',
        type: 'number'
      },
      volume: {
        title: 'Volume',
        type: 'number'
      },
	  fromLocation: {
        title: 'From Location',
        type: 'string'
      },
	  fromAddress: {
        title: 'From Address',
        type: 'string'
      },
	  fromContact: {
        title: 'From Contact',
        type: 'string'
      },
	  toLocation: {
        title: 'To Location',
        type: 'string'
      },
	  toAddress: {
        title: 'To Address',
        type: 'string'
      },
	  toContact: {
        title: 'To Contact',
        type: 'string'
      },
	  cargoValue: {
        title: 'Cargo Value',
        type: 'number'
      },
	  orderStatus: {
        title: 'Order Status',
        type: 'string'
      },
	  shipper: {
        title: 'Shipper',
        type: 'string'
      },
	  consignee: {
        title: 'Consignee',
        type: 'string'
      },
	  creationDate: {
        title: 'Creation Date',
        type: 'string'
      },
	  creationBy: {
        title: 'Creation By',
        type: 'string'
      },
	  lastUpdateDate: {
        title: 'Last Update Date',
        type: 'string'
      },
	  lastUpdateBy: {
        title: 'Last Update By',
        type: 'string'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: OrderService) {
    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
