import { BaseException } from '@common/internal-exception/exception';
import { ErrorCode } from '@common/internal-exception/error-code';

export class ServiceUnavailableException extends BaseException {
  constructor(message: string) {
    super(ErrorCode.SERVICE_UNAVAILABLE, message);
  }
}
