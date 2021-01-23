import { Component, OnInit, Input } from '@angular/core';

interface BreadCrumpItem {
  text: string;
  link?: string;
}

@Component({
  selector: 'app-bread-crump',
  templateUrl: './bread-crump.component.html',
  styleUrls: ['./bread-crump.component.css']
})
export class BreadCrumpComponent implements OnInit {

  @Input() items: Array<BreadCrumpItem> = [];

  constructor() { }

  ngOnInit(): void {
  }

  isTheLastItem(item: BreadCrumpItem): boolean {
    const index = this.items.indexOf(item) + 1;
    return index == this.items.length;
  }

}
