import { Component } from '@angular/core';

@Component({
  selector: 'layer-two',
  template: `
    <section class="card">
      <div class="card-content">
        <div class="card-title">Layer 2 Component: </div>
        <layer-three></layer-three>
      </div>
    </section>`
})
export class LayerTwo { }
