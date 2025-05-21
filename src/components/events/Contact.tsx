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
    <div className="m-10 flex flex-col items-center xl:m-30">
      <div className="font-inria-serif text-md mb-10 text-center sm:text-xl xl:text-2xl">
        For more information follow @{name}!
      </div>
      <Link
        className="bg-kpso-blue mt-2 flex max-w-fit justify-center rounded-full p-5 xl:p-12"
        href={instagramLink}
        target="_blank"
      >
        <FaInstagram className="flex h-10 w-10 justify-center text-neutral-50 sm:h-15 sm:w-15 xl:h-20 xl:w-20" />
      </Link>
    </div>
  );
};

export default Contact;
