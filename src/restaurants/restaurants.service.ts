import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Restaurant } from '@prisma/client';

@Injectable()
export class RestaurantsService {
  constructor(private prisma: PrismaService) {}

  async createRestaurant(data: Omit<Restaurant, 'id'>): Promise<Restaurant> {
    return this.prisma.restaurant.create({ data });
  }
}
