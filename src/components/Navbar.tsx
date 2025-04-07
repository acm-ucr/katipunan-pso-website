const Navbar = () => {
  return (
    <nav className="bg-kpso-brown px-6 py-4 text-black">
      <ul className="flex items-center justify-center space-x-6">
        <li>
          <a href="#" className="px-4 py-2">
            Home
          </a>
        </li>

        <li className="group relative">
          <button className="rounded-inline-block px-4 py-2">About</button>
          <ul className="bg-kpso-red-secondary absolute top-full left-0 hidden rounded text-black shadow-lg group-hover:block">
            <li>
              <a href="#" className="block px-4 py-2">
                What is Katipunan
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2">
                Meet the Cabinet
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2">
                Constitution
              </a>
            </li>
          </ul>
        </li>

        <li className="group relative">
          <button className="rounded-inline-block px-4 py-2">Events</button>
          <ul className="bg-kpso-red-secondary absolute top-full left-0 hidden rounded text-black shadow-lg group-hover:block">
            <li>
              <a href="#" className="block px-4 py-2">
                Pamilya Program
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2">
                JFAV
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2">
                Katipunan Experience
              </a>
            </li>
          </ul>
        </li>

        <img src="/Katipunan Logo.png" alt="Logo" className="h-12 w-auto" />

        <li className="group relative">
          <button className="rounded-inline-block px-4 py-2">Culture</button>
          <ul className="bg-kpso-red-secondary absolute top-full left-0 hidden rounded text-black shadow-lg group-hover:block">
            <li>
              <a href="#" className="block px-4 py-2">
                PACN
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2">
                Suite Overview
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2">
                Board
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2">
                Archive
              </a>
            </li>
          </ul>
        </li>

        <li className="group relative">
          <button className="rounded-inline-block px-4 py-2">Resources</button>
          <ul className="bg-kpso-red-secondary absolute top-full left-0 hidden rounded text-black shadow-lg group-hover:block">
            <li>
              <a href="#" className="block px-4 py-2">
                Alumni
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2">
                Academics
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2">
                Time Capsule
              </a>
            </li>
          </ul>
        </li>

        <li className="group relative">
          <button className="rounded-inline-block px-4 py-2">Media</button>
          <ul className="bg-kpso-red-secondary absolute top-full left-0 hidden rounded text-black shadow-lg group-hover:block">
            <li>
              <a href="#" className="block px-4 py-2">
                Photos
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2">
                Videos
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2">
                Katiweekly
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2">
                Katifits
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
