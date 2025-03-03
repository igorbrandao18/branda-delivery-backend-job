import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Restaurant } from './restaurant.entity';

@Injectable()
export class RestaurantsService {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    name: string;
    address: string;
    phone: string;
    cuisineType: string;
    email: string;
    password: string;
  }): Promise<Restaurant> {
    return this.prisma.restaurant.create({
      data: {
        address: data.address,
        cuisineType: data.cuisineType,
        name: data.name,
        phone: data.phone,
        email: data.email,
        password: data.password,
      },
    });
  }

  async findAll(): Promise<Restaurant[]> {
    return this.prisma.restaurant.findMany();
  }

  async findByEmail(email: string): Promise<Restaurant | null> {
    return this.prisma.restaurant.findUnique({
      where: { email },
    });
  }

  // ... other methods using Prisma ...
} 