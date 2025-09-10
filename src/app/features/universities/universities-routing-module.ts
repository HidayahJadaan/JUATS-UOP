import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversitiesList } from './components/universities-list/universities-list';

const routes: Routes = [

    {
      path:'',
      component:UniversitiesList
    },
    {
      path:'list',
      component:UniversitiesList
    },
    {
      path:'add',
      component:UniversitiesList
    },
    {
      path:'edit/:id',
      component:UniversitiesList
    },
    {
      path:'details/:id',
      component:UniversitiesList
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversitiesRoutingModule { }
