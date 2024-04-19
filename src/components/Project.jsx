// import {Home} from "../../../../basit-menu-makanan/src/pages/Home";
// import { ProductDetail } from "../../../../basit-menu-makanan/src/pages/ProductDetail";
// import RandomiseColor from "../../../../basit-mini-game/basit-mini-game/src/RandomiseColor";
// import RandomPokemon from "../../../../basit-random-pokemon/basit-random-pokemon/src/RandomPokemon";
import Card from "./ui/Card";

export default function Project(){


   return(
      <>
         <div className="container text-center" id="project">
            <h3>Basit&apos;s Projects</h3>
            <div className="row justify-content-center">
                  {/* <Card judul='Pokemon Generator' deskripsi='Menampilkan gambar pokemon yang lucu' fitur='useState' project={<RandomPokemon />} sourceCode='' />
                  <Card judul='Click The Color!' deskripsi='Menampilkan varian warna yang berbeda-beda' fitur='useState' project={<RandomiseColor />} sourceCode='' /> */}
                  {/* <Card judul='My Restaurant' deskripsi='Menyajikan bermacam menu makanan yang lezat' fitur='useState' project={<ProductDetail />} sourceCode='' /> */}
                  {/* <Card judul='My Restaurant' deskripsi='Menyajikan bermacam menu makanan yang lezat' fitur='useState' project={<Home />} sourceCode='' /> */}
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
            </div>
         </div>
      </>
   )
}