import "./style.css"
import image2 from "../public/image2.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="div">
    <div className="div1">
      <div className="div2">
        <div
          className="div3"
          style={{
            backgroundImage: `url(${image2.src})`,
          }}
        >
          <div className="div4"></div>

          <div className="div5">
            <h1 className="h1-1">Le </h1>{" "}
            <h1 className="h1-2">t's work together</h1>
          </div>
        </div>
      </div>

      <div className="div6">
        <h1 className="div6-h1 ">
          Looking for a Expert Designer?
        </h1>
        <br />
        <br /><br />
        <Link className="div6-Link" href={"http://localhost:3000/contactus"}>ABC@gmail.com</Link>
      </div>
      <div className="div7">
        <h1 className="div7-h1 ">
          Looking for a Expert Designer?
        </h1>
        <br />
        <br /><br />

        
        <Link className="div7-Link" href={"http://localhost:3000/contactus"}>ABC@gmail.com</Link>
      </div>

    </div>
    <h1 className="div8-h1">MUHAMMAD</h1>
    <div className="flex border-t-2 ml-40 mr-44 mb-28 border-yellow-950 text-yellow-900">
       
        <div className=" div9">8 Nov 2024, Muhammad Anas</div>
       
        <a href="#" className="div10">Back To Top</a>
        </div>
    </div>
  );
}
