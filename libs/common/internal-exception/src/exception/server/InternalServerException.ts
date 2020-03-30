import { BaseException } from '../BaseException';
import { ErrorCode } from '../../error-code';

export class InternalServerException extends BaseException {
  constructor(message: string) {
    super(ErrorCode.INTERNAL_SERVER, message);
  }
}
