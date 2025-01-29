import { HttpException, HttpStatus } from '@nestjs/common';

export class RunTimeException extends HttpException {
  private readonly source: string | string[];
  constructor(
    status: HttpStatus,
    response: string,
    source?: string | string[],
  ) {
    super(response, status);
    this.source = source;
  }
}
