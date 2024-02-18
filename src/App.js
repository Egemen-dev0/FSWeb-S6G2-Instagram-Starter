/* 
  Buradan başlayın ve iç içe geçmiş bileşenlere doğru ilerleyin.
  Projedeki tüm dosyalara kod eklenmesi gerekmez.
  Nerelerde değişiklik yapmanız gerektiğini anlamak için her dosyayı inceleyin.
*/

// State hook u import edin
import React, {useState} from "react";


// Gönderiler (çoğul!) ve AramaÇubuğu bileşenlerini import edin, çünkü bunlar App bileşeni içinde kullanılacak
// sahteVeri'yi import edin
import "./App.css";
import Posts from "./bilesenler/Gonderiler/Gonderiler"
import sahteVeri from "./sahte-veri"  
import AramaCubugu from "./bilesenler/AramaCubugu/AramaCubugu";
const App = () => {
  
let [gonderiNesneDizisi, setgonderiNesneDizisi] = useState(sahteVeri)
let [aramaCubuguInput, setaramaCubuguInput] = useState("")

const aramayıPasla = (text) => {
setaramaCubuguInput(text)
// let aramaSonucu = gonderiNesneDizisi.filter((item) =>  text)
// setgonderiNesneDizisi(aramaSonucu); ==> BURAYI UPDATE!
}

  const gonderiyiBegen = (gonderiID) => {
    gonderiNesneDizisi.map((currentPost) => currentPost.id === gonderiID && currentPost.likes++ )
    setgonderiNesneDizisi(gonderiNesneDizisi)

  };

  return (
    <div className="App">
      <AramaCubugu />
      <Posts acquiredData ={gonderiNesneDizisi}/>

      {/* AramaÇubuğu ve Gönderiler'i render etmesi için buraya ekleyin */}
      {/* Her bileşenin hangi proplara ihtiyaç duyduğunu kontrol edin, eğer ihtiyaç varsa ekleyin! */}
    </div>
  );
};

export default App;
