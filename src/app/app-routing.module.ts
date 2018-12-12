import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { AboutComponent } from './about/about.component';

const appRoutes:Routes = [
  {path:'',redirectTo:'/todo',pathMatch:'full'},
  {path:'todo',component:TodoComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  declarations:[TodoComponent,AboutComponent],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
