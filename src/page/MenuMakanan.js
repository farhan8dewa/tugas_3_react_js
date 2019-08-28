import React, {Component} from 'react';
import ListMakanan from '../ListData/ListMakanan.js'

class MenuMakanan extends Component{
  constructor(props){
    super(props);
      this.state={
        daftar:0
    };
    this.rubahpesanan =this.rubahpesanan.bind(this);
    this.pesanan=this.pesanan.bind(this);
  }

  rubahpesanan(){
    this.setState((state,props)=>{
      return{
        pesan:state.daftar
      }
    })
  }

  pesanan(e){
    console.log(e.target.value);
  }

  render() {
    return (
    <div>
        <h3>dafatar makanan yang kami sediakan :</h3>
      <table>
        <tbody>
          <tr>
            <td>
              <ListMakanan datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"
                />
              <center>
                <button onClick={this.state.rubahpesanan}>pesan sekarang</button>
              </center>
            </td>


        <td>
        <ListMakanan  datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
          />
          <center>
            <button onClick={this.pesan}>pesan sekarang</button>
          </center>
        </td>

          <td>
          <ListMakanan  datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"
            />
            <center>
              <button onClick={this.rubahpesanan}>pesan sekarang</button>
            </center>
          </td>

          <td>
          <ListMakanan datalist="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"
            />
            <center>
              <button onClick={this.rubahpesanan}>pesan sekarang</button>
            </center>
          </td>

          <td>
            <ListMakanan datalist="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg"
              />
            <center>
              <button onClick={this.rubahpesanan}>pesan sekarang</button>
            </center>
          </td>
          </tr>
          </tbody>
          </table>

          <br />
            <input type="text"
              onChange={this.pesanan}
            />
            <h3>pesanan anda :{this.state.daftar}</h3>



      </div>
    );
  }
}

export default MenuMakanan;
