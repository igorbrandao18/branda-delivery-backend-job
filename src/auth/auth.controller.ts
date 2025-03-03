import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Restaurant } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() data: { email: string; password: string }) {
    const restaurant = await this.authService.validateRestaurant(data.email, data.password);
    if (!restaurant) {
      throw new UnauthorizedException();
    }
    return this.authService.login(restaurant);
  }
}
