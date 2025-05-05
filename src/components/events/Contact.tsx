import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";

const Contact = ({ Name, Insta }: { Name: string; Insta: string }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="font-serif">For more information follow @{Name}</div>
      <Link
        className="bg-kpso-blue mt-2 flex max-w-fit justify-center rounded-full p-5"
        href={Insta}
      >
        <FaInstagram className="flex h-10 w-10 justify-center text-neutral-50" />
      </Link>
    </div>
  );
};

export default Contact;
