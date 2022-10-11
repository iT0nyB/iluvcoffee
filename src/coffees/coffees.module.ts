import { Flavour } from './entities/flavour.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CoffeesService } from './coffees.service';
import { CoffeesController } from './coffees.controller';
import { Coffee } from './entities/coffee.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavour])],
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
