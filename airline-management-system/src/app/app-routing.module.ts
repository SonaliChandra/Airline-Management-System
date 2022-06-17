import { ViewflightComponent } from './components/viewflight/viewflight.component';
import { ModifyflightComponent } from './components/modifyflight/modifyflight.component';
import { DeleteflightComponent } from './components/deleteflight/deleteflight.component';
import { BodyComponent } from './components/body/body.component';
import { CreateflightComponent } from './components/createflight/createflight.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "createflight",
    component: CreateflightComponent,
    pathMatch: "full"
  },
  {
    path: "deleteflight",
    component: DeleteflightComponent,
    pathMatch: "full"
  },
  {
    path: "modifyflight",
    component: ModifyflightComponent,
    pathMatch: "full"
  },
  {
    path: "viewflight",
    component: ViewflightComponent,
    pathMatch: "full"
  },
  {
    path: "",
    component: BodyComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
