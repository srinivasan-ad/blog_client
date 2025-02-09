import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href= "/signup">Signup</Link>
      <Link href= "/signin">Signin</Link>
      <Link href= "/blog/:id">Signup</Link>
    </>
  );
}
