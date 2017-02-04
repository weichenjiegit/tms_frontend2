import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'basic-tables',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./shipment.scss')],
  template: require('./shipment.html')
})
export class Shipment {

  constructor() {
  }
}
