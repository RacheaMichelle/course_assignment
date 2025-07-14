import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getNames() {
    return {
      "names": ["Masinde", "Johna","Cherise", "Racheal"]
    }
  }
}
