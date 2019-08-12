import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MySecondComponentComponent } from './my-second-component/my-second-component.component';
import { MyMessageComponentComponent } from './my-message-component/my-message-component.component';

const routes: Routes = [
	{ path: 'secondcomponent', component: MySecondComponentComponent },
	{ path: 'messagecomponent', component: MyMessageComponentComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
  	RouterModule
  ]
})
export class AppRoutingModule { }
