import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentePrincipalComponent } from './componente-principal/componente-principal.component';

const routes: Routes = [
  {
    path:'pagina-principal',
    component: ComponentePrincipalComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
