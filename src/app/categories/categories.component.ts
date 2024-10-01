import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../shared/services/categories.service';
import { Categories } from '../shared/models/Categories';
import { Router } from '@angular/router';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  allCategories: Categories[] = null;
  selectedCategory: any = null;

  constructor(
    private categoryService: CategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.allCategories = data;
      console.log(this.allCategories);
    });
  }
  onSelectCategory() {
    console.log(this.selectedCategory);
  }

  viewMore() {
    if (this.selectedCategory) {
      this.router.navigate(['/categories', this.selectedCategory.name]);
    }
  }
}
