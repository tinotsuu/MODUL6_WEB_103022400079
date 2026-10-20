function KartuMenu({nama, harga, kategori = 'Makanan' }){
    return(
        <div className="card">
            <h3>0{nama}</h3>
            <p>HARGA: {harga}</p>
            <p>KATEGORI: {kategori}</p>
        </div>
    );
}

export default KartuMenu;