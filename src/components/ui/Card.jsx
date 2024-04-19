import { useState } from "react"

export default function Card(props){

   const { judul, deskripsi, fitur, sourceCode, project} = props
   let [toggle, setToggle] = useState(false)
   
   const handleDemoBtn = ()=>{
      setToggle(!toggle)
      return(toggle)
   }

   return(
      <>
         <div className="card col-3 mx-1 my-1 text-center" style={{ 'width': '18rem' }}>
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
               <h5 className="card-title">{ judul ? judul : 'Judul Proyek' }</h5>
               <p className="card-text">{ deskripsi ? deskripsi : 'Deskripsi Proyek' }</p>
            </div>
            <ul className="list-group list-group-flush">
               <li className="list-group-item"><b>Fitur React yg digunakan: </b>{ fitur ? fitur : '' }</li>
            </ul>
            <div className="card-body">
               <a onClick={handleDemoBtn} className="card-link">Live Demo</a>
               <a href={` ${sourceCode ? sourceCode : '#source-code'} `} className="card-link">Source Code</a>
            </div>
            {toggle ? project : ''}
         </div>
      </>
   )
}