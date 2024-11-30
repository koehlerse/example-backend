import { Module } from '@nestjs/common';
import { BrandsService } from './app.service';
import { Testen } from './testen';
import { ScheduleModule } from '@nestjs/schedule';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    CacheModule.register(),
  ],
  providers: [
    BrandsService,
    Testen
  ],
})
export class AppModule {}
