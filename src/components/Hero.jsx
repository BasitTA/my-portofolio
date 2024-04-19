export default function Hero(){

   return(
      <>
         <div className="text-center mt-5 pt-5 container">
            <h5>🙋🏻‍♂️ Hello my name is Basit Tri Anggoro. <br />I can help you create websites as beautiful as you wish</h5>
            <img className='my-2' style={{ width:'15rem', height:'15rem' }} src="https://media.licdn.com/dms/image/C5603AQHECuizKoCPuA/profile-displayphoto-shrink_800_800/0/1606662143151?e=2147483647&v=beta&t=JwJ6K47P8Vm0e1WD56x_uT3ou6tKEPQnBrbntz5h34c"/>
            <h1>FRONT-END ENGINEER</h1>
            <h5 className='mb-3'>Based in Tangerang, Indonesia</h5>
         </div>

         <div className="d-flex justify-content-center mb-5">
            <a href='#project' className='btn btn-primary mx-1'>Check Projects</a>
            <a href='#profile' className='btn btn-primary mx-1'>Check Profile</a>
         </div>
      </>
   )
}