import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './Components/product-add/product-add.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { HomePageComponent } from './Components/home-page/home-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'add', component: ProductAddComponent},
  {path: 'list', component: ProductListComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
