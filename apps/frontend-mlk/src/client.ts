// src/client.ts
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'rqrh1tf2',
  dataset: 'development',
  apiVersion: '2023-08-01',
  useCdn: true,
  token: process.env.TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};
