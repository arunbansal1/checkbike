import Logo from "./Logo";

export default function Footer(){
    return <footer className="text-light">
        <div className="container">
             <div className="row">
                <div className="col-sm-6 ">
                    <Logo/>
                    <p className="blockquote text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consectetur dolor quod veritatis dicta eaque eligendi consequuntur facere vero ipsa iste harum aperiam
                    </p>
                    <h5 className="fw-bold">
                        FOR SUPPORT
                    </h5>
                    <h5>
                        +91 9999 658 698 (Toll Free)
                    </h5>
                </div>
                <div className="col-sm-3">
                    <h4 className="fw-bold mb-4 mt-1">QUICK LINK</h4>
                   <ul className="quick-list text-secondary">
                       <li>About Us</li>
                       <li>Services</li>
                       <li>Shop</li>
                       <li>Inventory</li>
                   </ul>
                </div>
                <div className="col-sm-3">
                <h4 className="fw-bold mb-4 mt-1">CONTACT INFO</h4>
                   <div>
                      <h6>
                        Address
                      </h6>
                      <p className="text-secondary">
                        576 Ping Raod,4th floor,Jhongar,Banglore
                      </p>
                   </div>
                   <div>
                       <h6>
                        Phone
                       </h6>
                       <p>
                       <a href="tel:+91 2349 5938 39" className="text-secondary">
                          +91 2349 5938 39
                       </a>
                       </p>
                   </div>
                   <div>
                    <h6>
                        Web
                    </h6>
                     <p>
                       <a href='mail:info@example.com,wwww.example.com' className="text-secondary"> 
                        info@example.com <br/>
                        wwww.example.com
                        </a>
                     </p>
                   </div>
                </div>               
             </div>
        </div>
        <div className="copyright text-center">
      Copyright © 2023. Example company private limited
    </div>
    </footer>
}