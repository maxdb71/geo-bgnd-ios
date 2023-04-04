import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { HelloWorldToastComponent } from './hello-world-toast.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: HelloWorldToastComponent }])],
  declarations: [HelloWorldToastComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HelloWorldToastModule {}
