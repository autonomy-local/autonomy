import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { AboutPageComponent } from '../about-page/about-page.component';
import { ProductPageComponent } from '../product-page/product-page.component';
import { ContributePageComponent } from '../contribute-page/contribute-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'about', component: AboutPageComponent},
  { path: 'product', component: ProductPageComponent},
  { path: 'contribute', component: ContributePageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
