import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantsController } from './restaurants.controller';
import { RestaurantsService } from './restaurants.service';
import { PrismaService } from '../prisma/prisma.service';

describe('RestaurantsController', () => {
  let controller: RestaurantsController;
  let service: RestaurantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestaurantsController],
      providers: [RestaurantsService, PrismaService],
    }).compile();

    controller = module.get<RestaurantsController>(RestaurantsController);
    service = module.get<RestaurantsService>(RestaurantsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a restaurant', async () => {
      const createRestaurantDto = {
        id: 1,
        name: 'Test Restaurant',
        address: '123 Test St',
        phone: '1234567890',
        cuisineType: 'Italian',
        email: 'test@example.com',
        password: 'password',
      };
      jest.spyOn(service, 'create').mockResolvedValue(createRestaurantDto);
      expect(await controller.create(createRestaurantDto)).toBe(createRestaurantDto);
    });
  });
}); 