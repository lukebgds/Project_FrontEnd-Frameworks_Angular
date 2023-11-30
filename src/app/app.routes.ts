import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContatoComponent } from './pages/contato/contato.component';

export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'produto', component: ProdutoComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'contato', component: ContatoComponent}
];
