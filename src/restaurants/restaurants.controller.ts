import { Controller, Post, Body } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from '@prisma/client';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Post()
  async create(@Body() data: Omit<Restaurant, 'id'>) {
    return this.restaurantsService.createRestaurant(data);
  }
}
