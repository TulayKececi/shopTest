import { Component, OnInit } from '@angular/core';
import {Category} from './category'
import {CategoryService} from "../services/category.service";
import {AlertifyService} from "../services/alertify.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {
  title="Kategori Listesi"
  categories: Category[];

  constructor(
    private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data
    });
  }
}
