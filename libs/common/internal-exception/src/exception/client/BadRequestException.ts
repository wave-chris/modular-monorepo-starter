import { BaseException } from '../BaseException';
import { ErrorCode } from '../../error-code';

export class BadRequestException extends BaseException {
  constructor(message: string) {
    super(ErrorCode.BAD_REQUEST, message);
  }
}
