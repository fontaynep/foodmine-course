import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/model/Tag';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-tags',
  standalone: false,
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
  imports: [RouterLink, NgIf, CommonModule],
})
export class TagsComponent implements OnInit {

  @Input()
  foodPageTags?:string[];

  @Input()
  justifyContent:string = 'center';

  tags?:Tag[];
  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
    if(!this.foodPageTags)
     this.tags = this.foodService.getAllTags();
  }

}