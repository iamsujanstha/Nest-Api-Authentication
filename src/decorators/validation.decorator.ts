import { registerDecorator } from 'class-validator';

export const ValidateIfExists = (input: {
  table: string;
  column: string;
  check?: 'unique' | 'exists';
}) => {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'validateIfExists',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [input],
      options: {
        message: `${propertyName} must exist in ${input.table}`,
      },
      validator: {
        validate(value: any, args) {
          const [input] = args.constraints;
          if (input.check === 'unique') {
            return true;
          }
          return false;
        },
      },
    });
  };
};
