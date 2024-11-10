import "./style5.css"
import Link from "next/link"

export default function aboutUs(){
    return(
        <>
        <div>
        <div className="div1">
        <div className="flex">
            <div>
        <img
              src="https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
              alt="Profile Picture"
              className="Img1"
            />
            </div>
            <div>
                <div>
                    <div className="mt-20 ml-28 mr-20 " >
                        <h1 className="div3-h1-1">About Me</h1>
                        <h1 className="div3-h1-2">Muhammad Anas</h1>
                        <h1 className="div3-h1-3">UI UX Designer</h1>
                        <p className="div3-p-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores<br /> voluptatibus   cumque unde numquam  consectetur consequatur <br /> doloribus optio cum hic porro</p>
                        <p className="div3-p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla facilis <br /> hic harum  veniam similique, iste dicta voluptatum, odit consectetur ipsum <br /> qui. Autem, mollitia reiciendis quos ea quas accusantium corporis molestias.</p>
                <br />
                <div className="custom-bounce">
                   <Link className="div3-link" href={"http://localhost:3000/resume"}>View My Resume</Link>
                </div>
                    </div>
                </div>
            </div>
            </div>
            <div>
        <h1></h1>
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
 </>
    )
}