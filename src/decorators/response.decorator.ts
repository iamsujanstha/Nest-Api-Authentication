import { applyDecorators, SetMetadata } from '@nestjs/common';

export const ResponseMessage = (message: string, source?: string[] | string) =>
  applyDecorators(
    SetMetadata('message', message.toLocaleLowerCase()),
    SetMetadata('source', source),
  );
