import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/app/user/user.dto';
import { UserService } from 'src/app/user/user.service';
import { ResponseMessage } from 'src/decorators/response.decorator';
import { SuccessMessage } from 'src/utils';

@ApiTags('User')
@Controller('user')
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ResponseMessage(SuccessMessage.CREATE, 'User')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.createUser(createUserDto);
  }

  @Get()
  @ResponseMessage(SuccessMessage.FETCH, 'User')
  async findAll() {
    try {
      return await this.userService.findAll();
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }

  @Get(':id')
  @ResponseMessage(SuccessMessage.FETCH, 'User')
  async findOne(@Param('id') id: string) {
    return await this.userService.findOne(+id);
  }

  @Patch(':id')
  @ResponseMessage(SuccessMessage.UPDATE, 'User')
  async update(@Param('id') id: string, @Body() updateUserDto: any) {
    return await this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ResponseMessage(SuccessMessage.DELETE, 'User')
  async remove(@Param('id') id: string) {
    return await this.userService.remove(+id);
  }
}
