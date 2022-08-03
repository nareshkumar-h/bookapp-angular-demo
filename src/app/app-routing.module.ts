import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { ViewBookComponent } from './view-book/view-book.component';

const routes: Routes = [
  {path:'addbook', component:AddBookComponent},
  {path:'books', component: ListBookComponent},
  {path:'viewbook/:id', component:ViewBookComponent},
  {path:'editbook', component:EditBookComponent},
  {path:'orders', component:ListOrdersComponent},
  {path:'', redirectTo:'books', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
