import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/database/prisma.service';
import {hash} from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private prisma:PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    //Criptografia da senha
    const encryptedPassord = await hash(createUserDto.password, 10)

    //Criação de usuario
    const userCerated = this.prisma.user.create({data: {...createUserDto, password: encryptedPassord}}) 

    return userCerated;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
