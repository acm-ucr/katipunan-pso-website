import HeaderImg from "@/public/components/HEADER.webp";
import Header from "@/components/Header";
import AlumniGrid from "@/components/resources/AlumniGrid";

const Alumni = () => {
  return (
    <>
      <Header webp={HeaderImg} alt="Picture of Club" txt="ALUMNI PASSAGES" />
      <AlumniGrid />
    </>
  );
};

export default Alumni;
