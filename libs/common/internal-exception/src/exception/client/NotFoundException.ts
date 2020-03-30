import { BaseException } from '../BaseException';
import { ErrorCode } from '../../error-code';

export class NotFoundException extends BaseException {
  constructor(message: string) {
    super(ErrorCode.NOT_FOUND, message);
  }
}
