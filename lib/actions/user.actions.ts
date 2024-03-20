'use server';

import { auth } from '@/auth';
import { prisma } from '@/db';
import { User, Goals } from '@prisma/client';
import bcryptjs from 'bcryptjs';

export async function createUser(data: Partial<User>) {
  try {
    if (data) {
      const { password } = data;
      const hashedPassword = bcryptjs.hashSync(password as string, 10);

      const user = await prisma.user.create({
        data: {
          ...data,
          password: hashedPassword,
        },
      });
      return { user, error: null };
    }
  } catch (error) {
    console.error('Error creating user:', error);
    return { error: 'An unexpected error occurred while creating user.' };
  }
  return { error: 'An unexpected error occurred while creating user.' };
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
  const session = await auth();
  const email = session && session.user?.email;
  if (!email) return;
  console.log('DATA', data);

  if (data && data.goals) {
    try {
      const user = prisma.user.findUnique({
        where: {
          email,
        },
      });
      if (data && user) {
        const goals = prisma.goals.upsert({
          where: {
            user,
            userId: user.id,
          },
          create: {
            data,
          },
          update: {
            data,
          },
        });
        return { goals, error: null };
      }
    } catch (error) {
      console.error('Error updating user:', error);
      return { error: 'An unexpected error occurred while updating user.' };
    }
  } else if (data && !data.goals) {
    try {
      const user = prisma.user.update({
        where: {
          email,
        },
        data,
      });
      return { user, error: null };

      // if (data) {
      //   const user = prisma.user.upsert({
      //     where: {
      //       email,
      //     },
      //     create: {
      //       goals: data.goals,
      //     },
      //     update: {
      //       goals: data.goals,
      //     },
      //   });
      // const user = prisma.user.update({
      //   where: {
      //     email,
      //   },
      //   data: {
      //     upsert: {
      //       set: {
      //         goals: data.goals,
      //       },
      //     },
      //   },
      // });
      // return { user, error: null };
      // }
    } catch (error) {
      console.error('Error updating user:', error);
      return { error: 'An unexpected error occurred while updating user.' };
    }
  }
  return { error: 'An unexpected error occurred while updating user.' };
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
