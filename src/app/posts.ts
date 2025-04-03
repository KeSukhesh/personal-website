import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface QueryParams {
  title?: string; // title is optional, can be undefined
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { title } = req.query as QueryParams;  // Casting to QueryParams type

    // If no title is provided in the query, return all posts
    if (!title) {
      const posts = await prisma.post.findMany();
      return res.status(200).json(posts);
    }

    // Filter posts by title if title query param is provided
    const posts = await prisma.post.findMany({
      where: {
        title: {
          contains: title,  // Filter posts by title
          mode: 'insensitive',  // Optional: Make the search case-insensitive
        },
      },
    });

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong while fetching the posts.' });
  }
}
