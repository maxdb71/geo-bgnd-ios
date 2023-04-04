import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedHelloWorldToast } from '@demo/shared';
import {} from '@maxdb71/hello-world-toast';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedHelloWorldToast {}
