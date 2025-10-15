// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center md:h-[400px] h-[200px] text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="mb-4">Sorry, this page does not exist.</p>
      <Link href="/" className="text-blue-500 underline">
        Go back home
      </Link>
    </div>
  );
}
