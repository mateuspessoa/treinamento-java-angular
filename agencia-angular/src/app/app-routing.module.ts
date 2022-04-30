import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ContasComponent } from './pages/contas/contas.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { SaqueComponent } from './pages/saque/saque.component';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { TransferenciaComponent } from './pages/transferencia/transferencia.component';
import { ClientesCadastrarEditarComponent } from './pages/clientes/clientes-cadastrar-editar/clientes-cadastrar-editar.component';

const routes: Routes = [

  {
    path: 'clientes', component: ClientesComponent
  },
  {
    path: 'contas', component: ContasComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'cadastro', component: CadastroComponent
  },
  {
    path: 'saque', component: SaqueComponent
  },
  {
    path: 'deposito', component: DepositoComponent
  },
  {
    path: 'transferencia', component: TransferenciaComponent
  },
  {
    path: 'clientes/cadastrar', component: ClientesCadastrarEditarComponent
  },
  {
    path: 'clientes/editar/:id', component: ClientesCadastrarEditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
