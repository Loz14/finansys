import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { Category } from "../shared/category.model";
import { CategoryService } from "../shared/category.service";

import { switchMap } from "rxjs/operators";

import toastr from "toastr";
@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit, AfterContentChecked {

  currentAction: string;
  categoryForm: FormGroup;
  pageTitle: string;
  serverErrorMessage: string[] = null;
  submittingForm: boolean = false;
  category: Category = new Category();

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.setCurrentAction();
    this.buildCategoryForm();
    this.loadCategory();
  }

  ngAfterContentChecked(): void {
    this.setPageTitle()
  }

  //PRIVATE METHODS
  setPageTitle() {
    if (this.currentAction == 'new') 
      this.pageTitle = 'Cadastro de Nova Categoria'
      else {
        const categoryName = this.category.name || ''
        this.pageTitle = 'Editando a categoria:' + categoryName;
      }
  }

  private setCurrentAction() {
    if (this.route.snapshot.url[0].path == 'new')
      this.currentAction = 'new'
    else
      this.currentAction = 'edit'

  }

  private buildCategoryForm() {
    this.categoryForm = this.formBuilder.group({
      id: [null],
      name: [null, Validators.required, Validators.minLength(3)],
      description: [null]
    })

  }

  private loadCategory() {
    if (this.currentAction == 'edit') {
      this.route.paramMap.pipe(
        switchMap(params => this.categoryService.getById(Number(params.get("id"))))
      )
      .subscribe(
        (category) => {
          this.category = category;
          this.categoryForm.patchValue(category); // set values on form
        },
        (error) => alert('Ocorreu um error no servidor, tente mais tarde!')
      )
    }

  }

}
