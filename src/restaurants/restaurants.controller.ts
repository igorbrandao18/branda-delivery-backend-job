import { Controller, Post, Body } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './restaurant.entity';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Post()
  async create(@Body() createRestaurantDto: Restaurant): Promise<Restaurant> {
    return this.restaurantsService.create(createRestaurantDto);
  }
} 