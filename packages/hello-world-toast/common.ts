import { Observable } from '@nativescript/core';

export class HelloWorldToastCommon extends Observable {
  static sayHello() {
    console.log('hello world!');
  }
}
