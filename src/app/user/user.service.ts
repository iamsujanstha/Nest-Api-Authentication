import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { User } from '@src/app/user/user.entity';
import { CreateUserDto } from 'src/app/user/user.dto';
import { UserRepository } from 'src/app/user/user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: UserRepository,
  ) {}

  // Create a new user
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const password = 'random_password';
    const hashPassword = await bcrypt.hash(password, 10);
    const user = this.userRepository.create({
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      email: createUserDto.email,
      password: hashPassword, // You may want to hash this before saving
    });

    // Persist the user and return the created user
    await this.userRepository.getEntityManager().persistAndFlush(user);
    return user;
  }

  // Find all users
  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  // Find a single user by ID
  async findOne(id: number): Promise<User | null> {
    return this.userRepository.findOne({ id });
  }

  // Update an existing user
  async update(id: number, updateUserDto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.findOne({ id });
    if (!user) {
      throw new Error('User not found');
    }

    // Update user fields with provided data
    Object.assign(user, updateUserDto);

    // Persist changes to the database
    await this.userRepository.getEntityManager().persistAndFlush(user);
    return user;
  }

  // Delete a user by ID
  async remove(id: number): Promise<void> {
    // Attempt to delete a user with the given id
    const result = await this.userRepository.nativeDelete({ id });

    // Check if the result indicates that no rows were affected (i.e., no user was deleted)
    if (result === 0) {
      // If no user was found or deleted, throw an error
      throw new Error('User not found');
    }
  }
}
