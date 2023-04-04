import { DemoSharedBase } from '../utils';
import { HelloWorldToast } from '@maxdb71/hello-world-toast';

export class DemoSharedHelloWorldToast extends DemoSharedBase {
  testIt() {
    console.log('test hello-world-toast!');
    HelloWorldToast.sayHello();
  }
}
