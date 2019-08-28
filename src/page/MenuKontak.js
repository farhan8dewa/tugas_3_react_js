import React, { Component } from 'react';

class MenuKontak extends Component {
  constructor (props){
    super(props)
    this.state={
     alamat:"Jalan Swadaya VI, Cipayung jakarata utara baubau",
     kontak:"085338025412"
    };
  }

 render() {
   return (
     <div>
      <center>
         <h3>{this.state.alamat}</h3>
         <h4>kontak kami {this.state.kontak}</h4>

      </center>

     </div>
   );
 }
}

export default MenuKontak ;
