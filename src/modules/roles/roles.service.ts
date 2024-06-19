import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEntity } from './entities/role.entity';
import { In, Repository } from 'typeorm';
import { HandleException } from 'src/common/exceptions/handler/handle.exception';
import { UserRoleEntity } from './entities/user-role.entity';
import { UserEntity } from '../users/entities/user.entity';
import { CreateRoleDTO } from './models/create.role.dto';
import { ValidationException, ValidationExceptionType } from 'src/common/exceptions/types/validation.exception';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly rolesRepository: Repository<RoleEntity>,
    @InjectRepository(UserRoleEntity)
    private readonly userRoleRepository: Repository<UserRoleEntity>,
  ) {}

  findAll = async () => {
    try {
      return await this.rolesRepository.find();
    } catch (exception) {
      HandleException.exception(exception);
    }
  };

  findRolesByIds = async (rolesIds: number[]) => {
    try {
      return await this.rolesRepository.findBy({ id: In(rolesIds) });
    } catch (exception) {
      HandleException.exception(exception);
    }
  };

  assignUserRoles = async (
    user: UserEntity,
    roleEntities: RoleEntity[],
  ): Promise<UserEntity> => {
    try {
      const userRoles = roleEntities.map((role) => {
        const userRole = new UserRoleEntity();
        userRole.user = user;
        userRole.role = role;
        return userRole;
      });

      await this.userRoleRepository.save(userRoles);

      return user;
    } catch (exception) {
      HandleException.exception(exception);
    }
  };

  create = async (createRoleDTO: CreateRoleDTO) => {
    try {
      const roleExists = await this.rolesRepository.existsBy({name: createRoleDTO.name})

      if(roleExists){
        throw new ValidationException(ValidationExceptionType.DUPLICATE_ROLE)
      }

      createRoleDTO.createdAt = new Date ()

      return await this.rolesRepository.save(createRoleDTO)
    } catch (exception) {
      HandleException.exception(exception);
    }
  }
}