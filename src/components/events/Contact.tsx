import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";

const Contact = ({
  name,
  instagramLink,
}: {
  name: string;
  instagramLink: string;
}) => {
  return (
    <div className="m-30 flex flex-col items-center">
      <div className="font-inria-serif mb-10 text-2xl">
        For more information follow @{name}!
      </div>
      <Link
        className="bg-kpso-blue mt-2 flex max-w-fit justify-center rounded-full p-12"
        href={instagramLink}
        target="_blank"
      >
        <FaInstagram className="flex h-20 w-20 justify-center text-neutral-50" />
      </Link>
    </div>
  );
};

export default Contact;
