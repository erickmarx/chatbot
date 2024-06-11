import { PipeTransform, Injectable, BadGatewayException } from '@nestjs/common';

@Injectable()
export class NotEmptyPipe implements PipeTransform {
  transform(value: string) {
    if (!value || value === '')
      throw new BadGatewayException('Value cannot be empty');
    return value;
  }
}
