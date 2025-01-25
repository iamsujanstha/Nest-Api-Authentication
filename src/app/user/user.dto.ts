import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { ValidateIfExists } from 'src/decorators/validation.decorator';

export enum UserType {
  ADMIN = 'admin',
  CLIEND = 'client',
}

export class CreateUserDto {
  @ApiProperty() // Marks this field as required in Swagger documentation
  @IsNotEmpty()
  firstName: string;

  @ApiPropertyOptional()
  @IsOptional()
  middleName: string;

  @ApiProperty()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateIfExists({ table: 'users', column: 'email', check: 'unique' })
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsEnum(UserType)
  type: UserType;
}
