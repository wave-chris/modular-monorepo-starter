import { ErrorCode } from '../error-code';

export class BaseException extends Error {
  readonly code: ErrorCode;
  readonly message: string;

  constructor(code: ErrorCode, message: string) {
    super(message);
    this.code = code;
    this.message = message;
  }
}
