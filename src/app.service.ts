import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const letter = 'A';
    return 'Hello World!';
  }
}
