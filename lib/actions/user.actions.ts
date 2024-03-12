'use server';

import { prisma } from '@/db'; //prisma db connection
import { User } from '@prisma/client';
import bcrypt from 'bcrypt';

export async function createUser(data: Partial<User>) {
  try {
    console.log('DATA>>>>>>', data);
    if (data) {
      const { password } = data;
      const hashedPassword = bcrypt.hashSync(password as string, 10);

      const user = await prisma.user.create({
        data: {
          password: hashedPassword,
          ...data,
        },
      });
      return user;
    }
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('An unexpected error occurred while creating user.');
  }
}

export async function getUser(email: string) {
  try {
    const user = prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    console.error('Error finding user:', error);
    throw new Error('User not found!');
  }
}

export async function updateUser(data: Partial<User>) {
  try {
    if (data) {
      const user = prisma.user.update({
        where: {
          id: data.id,
        },
        data,
      });
      return user;
    }
  } catch (error) {
    console.error('Error updating user:', error);
    throw new Error('An unexpected error occurred while updating user.');
  }
}

export async function deleteUser(id: string) {
  try {
    const user = prisma.user.delete({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    console.error('Error updating user:', error);
    throw new Error('An unexpected error occurred while updating user.');
  }
}
