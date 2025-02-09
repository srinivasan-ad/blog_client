'use client';
import { useParams } from 'next/navigation';

export default function Blog() {
  const { id } = useParams();

  return <h1>Blog Page with ID: {id}</h1>;
}