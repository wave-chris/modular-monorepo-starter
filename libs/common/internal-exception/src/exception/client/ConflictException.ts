import { BaseException } from '../BaseException';
import { ErrorCode } from '../../error-code';

export class ConflictException extends BaseException {
  constructor(message: string) {
    super(ErrorCode.CONFLICT, message);
  }
}
