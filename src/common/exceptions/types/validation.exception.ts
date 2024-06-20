import { HttpException, HttpStatus } from '@nestjs/common';
import { stringConstants } from 'src/utils/string.constant';

export class ValidationException extends HttpException {
  constructor(type: ValidationExceptionType) {
    let message;
    if (type === ValidationExceptionType.WRONG_AUTH) {
      message = stringConstants.incorrectAuth;
    }
    if (type === ValidationExceptionType.DUPLICATE_RECORD) {
      message = stringConstants.duplicateRecord;
    }
    if (type === ValidationExceptionType.DUPLICATED_USER) {
      message = stringConstants.duplicateUser;
    }
    if (type === ValidationExceptionType.DUPLICATE_ROLE) {
      message = stringConstants.duplicateRole;
    }
    if (type === ValidationExceptionType.DUPLICATE_CARD_UUID) {
      message = stringConstants.duplicateCardUUID;
    }
    super(message, HttpStatus.BAD_REQUEST);
  }
}

export enum ValidationExceptionType {
  WRONG_AUTH,
  DUPLICATE_RECORD,
  DUPLICATED_USER,
  DUPLICATE_ROLE,
  DUPLICATE_CARD_UUID
}
