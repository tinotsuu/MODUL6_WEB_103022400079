function labelHarga(harga){
    return(
        <p> Rp: {harga.toLocalString('id-ID')}</p>
    );
}
export default labelHarga;