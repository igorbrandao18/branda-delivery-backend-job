import { Injectable } from '@nestjs/common';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly restaurantsService: RestaurantsService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: { email: string; password: string }) {
    const restaurant = await this.restaurantsService.findByEmail(loginDto.email);
    if (!restaurant || restaurant.password !== loginDto.password) {
      throw new Error('Invalid credentials');
    }
    const payload = { email: restaurant.email, sub: restaurant.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}