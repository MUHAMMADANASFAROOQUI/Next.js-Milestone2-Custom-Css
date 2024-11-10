import "./style.css"
import Image from "next/image";
import React from "react";
import image3 from "../app/public/image3.jpg";
import image6 from "../app/public/image6.jpg";
import image7 from "../app/public/image7.jpg";
import image8 from "../app/public/image8.png";
import image9 from "../app/public/images9.jpg";
import images10 from "../app/public/images10.png";
import images11 from "../app/public/images11.png"
import Link from "next/link";

export default function Page() {
 


 
  return (
    <div>
    <div className="div1">
      <div>
       

        <div className="div2">
          <div className="div3">
            <div className="flex flex-col mr-2">
              <h2 className="helo">
                Hello!!!
              </h2>
              <div className="flex container ">
              <p className="div-p">I am <br /> Muhammad Anas</p>
              {/* <p className="mt-1 mb-6">Muhammad Anas</p> */}
              </div>
              <h3 className="lorem">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique quis praesentium dolor illum, quam enim. Voluptatum,
                explicabo. Hic molestiae veniam nemo, id a nesciunt totam,
                commodi facere Lorem ipsum dolor sit amet consectetur. Lorem
                ipsum dolor sit amet
              </h3>
              <div className="custom-pulse">
              <span className="span">
                Governor House IT Initiative Student
              </span>
              </div>
             
      
          <Link className="linkresume" href={"http://localhost:3000/resume"}>View My Resume</Link>
            </div>
            
          
          
            <img
              src="https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
              alt="Profile Picture"
              className="image-main"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="div-s-1" >
      <div className="div-s-2 ">
     <div className="div-s-3">Services
     <div className="div-s-4">
      <div className="div-s-5">
        <div
          className="bg-cover  h-[56px] w-[70px] flex  items-center   relative rounded-full mt-3" 
          style={{
            backgroundImage: `url(${image3.src})`,
          }}
        >
          <div className="absolute inset-0  "></div>

          <div className="div-s-6">
            <h1 className="div-s-2-h1">My </h1>
            <h1 className=" div-s-2-h1-2">Specialities</h1>
          </div>
          </div>
        </div>
      </div>
     </div>
     <div className="container ml-96 mt-7 opacity-55 mr-28">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt esse illum ducimus itaque aspernatur libero quisquam voluptates maxime! Ratione modi nihil sed iusto dolores porro delectus labore, enim vero impedit!</div>
    </div>
    <div className="">
      <div className="div-s-8">
       
      <div className="">
      <div className="div-s-9">
   <div className="div-s-10">
   <Link className="link-div-s-10 " href={"http://localhost:3000/projects"}>Project-01</Link>
    <Image
    src ={image6}
    alt="image6"
    className="image-div-s-2 " 
    />
    
    </div>
    <div className="div-div-s-10">
   <Link className="link-div-s-10 " href={"http://localhost:3000/projects"}>Project-02</Link>
    <Image
    src ={image7}
    alt="image7"
    className="image-div-s-2 " 
    />
    
    </div>
    <div className="div-div-s-10">
   <Link className="link-div-s-10" href={"http://localhost:3000/projects"}>Project-03</Link>
    <Image
    src ={image8}
    alt="image8"
    className="image-div-s-2" 
    />
    
    </div>
    
    
      </div>
    <div className="flex">
    <div className="div-s-11">
   <Link className="link-div-s-10 " href={"http://localhost:3000/projects"}>Project-04</Link>
    <Image
    src ={images10}
    alt="images10"
    className="image-div-s-2 " 
    />
    
    </div>
    <div className="div-s-12">
   <Link className="link-div-s-10" href={"http://localhost:3000/projects"}>Project-05</Link>
    <Image
    src ={image9}
    alt="image9"
    className="image-div-s-2" 
    />
    
    </div>
    <div className="div-s-12">
   <Link className="link-div-s-10 " href={"http://localhost:3000/projects"}>Project-06</Link>
    <Image
    src ={images11}
    alt="images11"
    className="image-div-s-2" 
    />
    
    </div>
    </div>
    </div>
    <div className="custom-pulse1">
    <div className="div-s-13">
      <h1 className="div-s-13-h1">Say Hello !!!</h1>
     
      <Link className="link-div-s-13" href={"http://localhost:3000/contactus"}>ABC@gmail.com</Link>

</div>
</div>
    </div>
    
    </div>
    </div>
    <div className="div-t-1">
            
            <div className="div-t-2">
                <div>
              <h1 className="div-t-3">Overview</h1>
              <h1 className="div-t-4">Client</h1>
              <h1 className="div-t-5">feedback</h1>
              </div>
              <div className="div-t-6">
                <div>
                <h1 className="div-t-6-h1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus eaque repellendus dolores adipisci maiores sapiente nemo iure praesentium aspernatur aliquid natus deserunt</h1>
                <div className="div-t-7">
                <h1 className="div-t-8">____________</h1>
                <h1 className="div-t-9">John Smith</h1>
                </div>
                </div>
                <div>
                <h1 className="div-t-6-h1  ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus eaque repellendus dolores adipisci maiores sapiente nemo iure praesentium aspernatur aliquid natus deserunt, facere assumenda voluptas culpa officiis </h1>
                <div className="div-t-7">
                <h1 className="div-t-8 ">____________</h1>
                <h1 className="div-t-9">John Smith</h1>
                </div>
                </div>
                <div>
                <h1 className="div-t-6-h1   ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus eaque repellendus dolores adipisci maiores sapiente nemo iure praesentium aspernatur aliquid natus deserunt, facere assumenda voluptas culpa officiis alias fuga consequuntur!</h1>
                <div className="div-t-7">
                <h1 className="div-t-8">____________</h1>
                <h1 className="div-t-9">John Smith</h1>
                </div>
                </div>
              </div>

            </div>
        </div>
        
  </div>

  );
}
