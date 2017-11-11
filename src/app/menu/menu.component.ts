import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes: Dish[];
  selectedDish: Dish;

  constructor(private dishService: DishService) {
    this.dishService.getDishes()
      .then(dishes => this.dishes = dishes);
  }

  ngOnInit() {
  }

  // Will be used while displaying dish details under menu component
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

}
