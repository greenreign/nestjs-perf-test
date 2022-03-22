import { Injectable } from '@nestjs/common';
import { formattedMem } from './mem.util';

@Injectable()
export class AppService {
  getHello(): any {
    return formattedMem();
  }
}
