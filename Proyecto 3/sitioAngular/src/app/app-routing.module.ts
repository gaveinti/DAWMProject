import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { InfoComponent } from './info/info.component';
import { EquipoComponent } from './equipo/equipo.component';
import { NewsComponent } from './news/news.component';





const routes: Routes = [
  { path: "inicio", component: InicioComponent },
  { path: "info", component: InfoComponent },
  { path: "equipo/:id", component: EquipoComponent },
  { path: "news", component: NewsComponent },
  { path: "**", redirectTo: "inicio" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
