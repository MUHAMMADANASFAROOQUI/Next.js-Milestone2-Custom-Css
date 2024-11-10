import "./style3.css"
import Image from "next/image"
import image3 from "../public/image3.jpg"
import image4 from "../public/image4.webp"
import images5 from "../public/images5.png"
import images6 from "../public/images6.png"

export default function contactUs(){
    return(
        
        <div  className="div1">
        <div className="flex">
        <div>
        <h1 className="div2-h1">Contact</h1>
        <div className="">
      <div className=" relative h-28">
        <div
          className="div3 " 
          style={{
            backgroundImage: `url(${image3.src})`,
          }}
        >
          <div className="absolute inset-0  "></div>

          <div className="div4">
            <h1 className="div4-h1-1">Let's </h1>
            <h1 className=" div4-h1-2">Connect</h1>
            <div className="">
            </div>
           
          </div>
          
          </div>
          <div className="div5">        
              <Image
          src={image4}
          alt= "contact-email "
          className="div5-image1 border-b-2 border-solid border-black"
          
          />
          <div className="div5-div-1">
          <div className="div5-div-2">Email us</div>
          <h1 className="div5-h1">ABC@gmail.com</h1>
          </div>
          </div>
          </div>
          <div className="flex mt-8">        
              <Image
          src={images5}
          alt= "contact-email "
          className="div6-image1 border-b-2 border-solid border-black"
          />
          <div className="div5-div-1">
          <div className="div5-div-2">Call us</div>
          <h1 className="div5-h1">+1 234 567 890 | +1 234 567 890</h1>
          </div>
          
          </div>
          <div className="div5 ">        
              <Image
          src={images6}
          alt= "contact-email "
          className="div7-image1 border-b-2 border-solid border-black"
          />
          <div className="div5-div-1">
          <div className="div7-div-2">Office Address</div>
          <h1 className="container  text-base pl-4 font-semibold w-80">+1 234 567 890 </h1>
          </div>
          
          

        </div>
        </div>
        </div>
        <form className="form">
            <div className="div-f-1">
            <div>
            <fieldset>
                <legend>Your Name</legend>
                <div className="yourname-div">
               
                <input type="text" className=" yourname-input" placeholder="   ex.Muhammad" required/>
                </div>
            </fieldset>
            <fieldset className="mt-5">
                <legend>Your Contact No.</legend>
                <div className="yourname-div">
               
                <input type="text" className=" yourname-input" placeholder="   ex.123-456-789-0" required />
                </div>
            </fieldset>
            </div>
            <div className="ml-4">
            <fieldset >
                <legend>Your Email Address</legend>
                <div className="yourname-div">
               
                <input type="text" className=" yourname-input" placeholder="   ex.ABC@gmail.com" required />
                </div>
            </fieldset>
            <fieldset className="mt-5">
                <legend>Subject</legend>
                <div className="yourname-div">
               
                <input type="text" className=" yourname-input" placeholder="   Your Subject" required/>
                </div>
            
            </fieldset>
            </div >
            </div>
            <div>
                <fieldset className="message">
                    <legend className="">Message</legend>
                    <div className="message-div">
                    <input type="text" className="yourname-input" placeholder="  Type Your Message" required />
                    </div>
                </fieldset>
            </div>
            <button className="button">Submit</button>
        </form>
       
        </div>
        </div>
        
    )
}