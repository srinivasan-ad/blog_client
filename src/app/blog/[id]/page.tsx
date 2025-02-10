'use client';
import FullBlog from '@/app/components/FullBlog';
import { useParams } from 'next/navigation';

export default function Blog() {
  const { id } = useParams();

  return <>
  <FullBlog/>
  </>;
}