import Link from "next/link";

const Header = () => {
  return (
    <header className=" text-white py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link href="/"></Link>
      </div>
      <nav className="flex gap-4">
        <Link href="/about"></Link>
        <Link href="/services"></Link>
      </nav>
    </header>
  );
};

export default Header;
