import Link from "next/link";

export default function NavBar() {
  const l = "";
  return (
    <div className="flex items-center p-4 justify-center text-center gap-14 ">
      <Link className="text-2xl font-bold" href="/">
        Chat
      </Link>
      <Link className="text-2xl font-bold" href="/docs">
        Data
      </Link>
      <Link className="text-2xl font-bold" href="/data">
        Docs
      </Link>
    </div>
  );
}
