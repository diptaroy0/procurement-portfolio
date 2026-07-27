import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08111f]">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-10 text-center">

        <h3 className="text-xl font-semibold text-white">
          Dipta Roy
        </h3>

        <p className="mt-2 text-sm text-gray-400">
          Procurement & Supply Chain Professional
        </p>

        <div className="mt-6 flex items-center gap-8">

          <Link
            href="https://github.com/diptaroy0"
            target="_blank"
            className="text-gray-400 transition hover:text-cyan-400"
          >
            <FaGithub size={22} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/diptaroy0/"
            target="_blank"
            className="text-gray-400 transition hover:text-cyan-400"
          >
            <FaLinkedinIn size={22} />
          </Link>

        </div>

        <p className="mt-8 text-sm text-gray-500">
          © {new Date().getFullYear()} Dipta Roy. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}