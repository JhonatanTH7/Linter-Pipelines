import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const letter = 'a';
    return 'Hello World!';
  }
}
