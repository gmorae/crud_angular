import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListResolve } from './resolve/user.resolve';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListModule),
    resolve: {
      list: ListResolve
    },
    data: {
      title: 'Lista de usuários'
    }
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule),
    data: {
      title: 'Cadastrar usuário'
    }
  },
  {
    path: 'update',
    loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule),
    data: {
      title: 'Atualizar dados'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
