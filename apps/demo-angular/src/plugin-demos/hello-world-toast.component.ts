import { Component, NgZone } from '@angular/core';
import { DemoSharedHelloWorldToast } from '@demo/shared';
import {} from '@maxdb71/hello-world-toast';

@Component({
  selector: 'demo-hello-world-toast',
  templateUrl: 'hello-world-toast.component.html',
})
export class HelloWorldToastComponent {
  demoShared: DemoSharedHelloWorldToast;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedHelloWorldToast();
  }
}
