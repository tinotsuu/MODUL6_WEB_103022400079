import { useState } from 'react'
import './index.css'

function KantinCard() {
  const namaKantin = "Petrus Agustino";
  const [jumlah, setJumlah] = useState(0)

  const jam = 9;
  const sapaan = (jam < 12) ? "selamat pagi" : "selamat siang";


  const N = 79;

  return (
    <>
        <div className="hero">
          <h1 className="judul">
          Kantin {namaKantin}
          </h1>
        </div>

        <div>
          <p>Saldo Awal Kartu Kantin: {N * 1000}</p>
          <button onClick={()=> setJumlah(jumlah * 1000)}>tambah</button>
        </div>
         
         <div>
          <p> {sapaan}</p>
         </div>

         <div>
          <button type="button" disabled>Bayar</button>
         </div>
      </>
  );
}

export default KantinCard;
