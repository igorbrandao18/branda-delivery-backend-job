import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { Restaurant } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async validateRestaurant(email: string, password: string): Promise<Restaurant | null> {
    const restaurant = await this.prisma.restaurant.findUnique({ where: { email } });
    if (restaurant && await bcrypt.compare(password, restaurant.password)) {
      return restaurant;
    }
    return null;
  }

  async login(restaurant: Restaurant) {
    const payload = { email: restaurant.email, sub: restaurant.id };
    return { access_token: this.jwtService.sign(payload) };
  }
}
