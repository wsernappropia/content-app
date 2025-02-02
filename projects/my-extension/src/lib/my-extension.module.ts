import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { myExtensionRoutes } from './lib.routes';
import { ExtensionService, provideExtensionConfig } from '@alfresco/adf-extensions';
import { DemoComponent } from './demo-component/demo.component';

@NgModule({
  imports: [DemoComponent, CommonModule, RouterModule.forChild(myExtensionRoutes)],
  providers: [provideExtensionConfig(['my-extension.json'])]
})
export class MyExtensionModule {
  constructor(extensionService:ExtensionService){
    extensionService.setComponents({
      'demo.component.id': DemoComponent,

  });
  }
}
