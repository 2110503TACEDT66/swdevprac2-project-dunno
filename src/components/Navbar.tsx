import Link from "next/link";

export default function Navbar() {
  return (
    <section className="fixed z-50 top-0 left-0 bg-[#61C0BF] justify-between flex h-14 w-full py-2 px-6">
      <div className="h-10 w-24 p-2 bg-[#72A3A2]"></div>
      <section className="flex space-x-2">
        <Link href="/" className="p-2 text-white font-bold hover:underline">
          Create Appointment
        </Link>
        <Link href="/" className="p-2 text-white font-bold hover:underline">
          Dentist List
        </Link>
        <Link href="/" className="p-2 text-white font-bold hover:underline">
          My Appointment
        </Link>

        <Link
          href="/"
          className="h-10 p-2 font-bold hover:bg-[#7db4b3] transition-colors duration-200 rounded-full text-white px-5  bg-[#72A3A2]"
        >
          Sign up / Sign in
        </Link>
      </section>
    </section>
  );
}