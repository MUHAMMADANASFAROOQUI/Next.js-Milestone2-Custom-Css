import "./style.css"

import Link from "next/link";

export default function Navbar() {
  return (
    <>
    
      <div className="">
        <header className="header">
          <div className="header-div">
           
            <img
              src="https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
              alt="profilepicture"
              className="image"
            />
           
            <Link className="Link1" href={"http://localhost:3000/"}>Muhammad Anas</Link>

            <nav className="ml-80">
              <Link
                className="Link2 "
                href="http://localhost:3000/"
              >
                Portfolio
              </Link>
              <Link
                className="Link3"
                href="http://localhost:3000/aboutus"
              >
                About Us
              </Link>
              <Link
                className="Link4"
                href="http://localhost:3000/contactus"
              >
                Let's Talk
              </Link>
              <Link
                className="Link5"
                href="http://localhost:3000/projects"
              >
                Projects
              </Link>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}
