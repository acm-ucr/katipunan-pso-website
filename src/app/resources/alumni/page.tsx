import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";

const Alumni = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="ALUMNI PASSAGES" />
      <div className="flex h-screen w-screen items-center justify-center">
        Alumni
      </div>
    </>
  );
};

export default Alumni;
