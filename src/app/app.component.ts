import { Component } from '@angular/core';
import JsBarcode from 'jsbarcode';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<svg id=barcode></svg>`,
})
export class AppComponent {
  ngOnInit() {
    JsBarcode('#barcode', '1234567890');
  }
}
