import { Injectable, Injector, OnInit } from '@angular/core';
import { BaseResourceService } from "../../services/base-resource.service";
import { BaseResourceModel } from "../../models/base-resource.model";

@Injectable()
export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit {

  resources: T[] = [];

  constructor(protected injector: Injector, protected resourceService: BaseResourceService<T>) { }

  ngOnInit(): void {
    this.resourceService.getAll().subscribe(
      resources => this.resources = resources.sort((a,b) => b.id - a.id),
      error => alert('Erro ao carregar a lista!')
    )
  }

  deleteCategory(resource) {
    const mustDelete = confirm(`Deseja realmente excluir este item "${resource.name}" ?`);

    if (mustDelete) {
      this.resourceService.delete(resource.id).subscribe(
        () => this.resources = this.resources.filter(element => element != resource),
        () => alert('Error ao tentar excluir')
      )
    }
  }

}
