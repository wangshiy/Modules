import { Component, Input } from '@angular/core';

import { IItem } from './apiTypes';

@Component({
  selector: 'order-header',
  template: `
  <section class="card">
    <span class="component-marker">OrderHeader</span>
    <div class="card-content">
      <div class="card-title">{{customer}}</div>
    </div>
  </section>
  `
})
export class OrderHeader {
  @Input('customerName') customer: string;
}

@Component({
  selector: 'order-items',
  template: `
  <section class="card">
    <span class="component-marker">OrderItems</span>
    <div class="card-content">
      <div class="card-title">Order Items</div>
      <ul class="collection">
        <li class="collection-item" *ngFor="let item of items">{{item.quantity}}:
        {{item.description}}</li>
      </ul>
    </div>
  </section>
  `
})
export class OrderItems {
  @Input() items: IItem[];
}
