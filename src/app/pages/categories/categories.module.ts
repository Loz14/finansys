import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';



@NgModule({
  declarations: [CategoryListComponent, CategoryFormComponent],
  imports: [
    CategoriesRoutingModule,
    SharedModule
  ]
})
export class CategoriesModule { }
