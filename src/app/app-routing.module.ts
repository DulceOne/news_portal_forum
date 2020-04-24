import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumsModule } from './forums/forums.module'

const routes: Routes = [
  {
    path: "",
    loadChildren: () => ForumsModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
