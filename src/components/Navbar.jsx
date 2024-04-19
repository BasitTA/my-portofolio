export default function Navbar(){

   return(
      <>
         <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
               <a className="navbar-brand" href="#">Basit&apos;s Portofolio</a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenus" aria-controls="navbarMenus" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse justify-content-end" id="navbarMenus">
                  <div className="navbar-nav ">
                  <a className="nav-link" href="#project">Projects</a>
                  <a className="nav-link" href="#profile">Profile</a>
                  </div>
               </div>
            </div>
         </nav>
      </>
   )
}