import { Component, Injector } from '@angular/core';
import { Validators } from "@angular/forms";
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { Category } from "../shared/category.model";
import { CategoryService } from "../shared/category.service";

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})

export class CategoryFormComponent extends BaseResourceFormComponent<Category> {

  constructor(
    protected categoryService: CategoryService,
    protected injector: Injector
  ) { super(injector, categoryService, new Category(), Category.fromJson) }

  protected buildResourceForm() :void {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(3)]],
      description: [null]
    })
  }

  protected editionPageTitle(): string {
    const resourceName = this.resource.name || ''
    return 'Editando Categoria: ' + resourceName;
  }

  protected creationPageTitle(): string {
    return 'Cadastro de Nova Categoria'
  }

}
