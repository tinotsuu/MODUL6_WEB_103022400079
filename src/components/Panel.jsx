function panel({judul, children}){
    return(
        <div className="card">
            {judul && <h2>
                {judul}</h2>}
                {children}
        </div>
    );
}

export default panel;