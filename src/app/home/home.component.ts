import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  food:Food[] = [];
    constructor(private foodService:FoodService ,
       private route:ActivatedRoute){}
  
    ngOnInit(): void {

      this.route.params.subscribe(params => {
        if(params['searchTerm'])
          this.food = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
        else if (params['tag'])
          this.food = this.foodService.getAllFoodsByTag(params['tag']);
        else
        this.food = this.foodService.getAll();

      })
    }
    
    
}
