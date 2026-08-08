import Link from "next/link";

type ButtonProps = {
  title: string;
  href: string;
};

export default function Button({ title, href }: ButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-teal-700"
    >
      {title}
    </Link>
  );
}
