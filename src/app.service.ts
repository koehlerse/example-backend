import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Brands } from './brands';
import { Store } from './store';

@Injectable()
export class BrandsService {
  private store: Store = new Store();
  
}
