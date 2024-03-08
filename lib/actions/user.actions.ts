'use server';

import { prisma } from '@/db'; //prisma db connection

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

export async function updateUser(data: {
  id: string;
  name: string;
  email: string;
}) {
  try {
    if (data) {
      const user = prisma.user.update({
        where: {
          id: data.id,
        },
        data: {
          ...data,
          name: data.name,
          email: data.email,
        },
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
