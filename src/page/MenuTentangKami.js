import React, { Component } from 'react';

class MenuTentangKami extends Component {
  constructor (props){
    super(props)
    this.state={
      tentang:"warung nusantara adalah restoran yang bernuansa makanan nusantara kami ada untuk membuat anda menikmati makanan khas dari nusantara"
    };
  }

 render() {
   return (
     <div>
      <center>
        <p>tentang kami</p> {this.state.tentang}
      </center>

     </div>
   );
 }
}

export default MenuTentangKami ;
