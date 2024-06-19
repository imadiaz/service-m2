import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UserResponsible } from './models/user.responsible.dto';
import { plainToClass } from 'class-transformer';
import { CreateUserDTO } from './models/create.user.dto';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/all/:siteId')
  @ApiParam({ name: 'siteId', example: 1 })
  findAllBySiteId(@Param('siteId') siteId: number) {
    const users = this.usersService.findSiteUsers(siteId);
    return plainToClass(UserResponsible, users, {
      excludeExtraneousValues: true,
    });
  }
  @Get('/all')
  findAll() {
    return this.usersService.findAllUsers()
  }

  @Post('/create')
  create(@Body() createUserDTO: CreateUserDTO) {
    return this.usersService.create(createUserDTO)
  }
}