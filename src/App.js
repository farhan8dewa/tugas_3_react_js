import React from 'react';
import Header from "./page/Header.js"
import MenuKontak from "./page/MenuKontak"
import MenuTentangKami from "./page/MenuTentangKami"

import Footer from "./page/Footer"
import MenuMakanan from "./page/MenuMakanan"
function App() {
  return (
    <div>
    <Header  />
    <MenuMakanan />
    <MenuTentangKami />
    <MenuKontak />
     <Footer />

    </div>
  );
}

export default App;
