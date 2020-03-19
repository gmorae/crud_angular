import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListModule),
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule)
  },
  {
    path: 'update',
    loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
