import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'navegacao',
    loadChildren: () => import('./pages/navegacao/navegacao.module').then( m => m.NavegacaoPageModule)
  },
  {
    path: 'navegacao2',
    loadChildren: () => import('./pages/navegacao2/navegacao2.module').then( m => m.Navegacao2PageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'botao',
    loadChildren: () => import('./pages/botao/botao.module').then( m => m.BotaoPageModule)
  },
  {
    path: 'botao1',
    loadChildren: () => import('./pages/botao1/botao1.module').then( m => m.Botao1PageModule)
  },
  {
    path: 'botao2',
    loadChildren: () => import('./pages/botao2/botao2.module').then( m => m.Botao2PageModule)
  },
  {
    path: 'botao3',
    loadChildren: () => import('./pages/botao3/botao3.module').then( m => m.Botao3PageModule)
  },
  {
    path: 'botao4',
    loadChildren: () => import('./pages/botao4/botao4.module').then( m => m.Botao4PageModule)
  },
  {
    path: 'botao5',
    loadChildren: () => import('./pages/botao5/botao5.module').then( m => m.Botao5PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
