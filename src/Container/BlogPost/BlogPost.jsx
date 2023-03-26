import React, {Component} from "react";
import Post from "../../Component/BlogPost/Post";
import './BlogPost.css';

class BlogPost extends Component{
    state = {                   // komponen state dari React untuk statefull component
        listArtikel: [],        // Variabel array yang digunakan untuk menyimpan data API
        insertArtikel: {        // Variabel yang digunakan untuk menampung sementara data yang akan di insert
            userId: 1,           // kolom userId, id, title, dan bodysame, mengikuti kolom yang ada pada listArtikel.json
            id: 1,
            title: "",
            body: ""
        }
    }

    ambilDataDariServerAPI() {
        fetch('http://localhost:3001/posts?_sort=id&_order=desc')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listArtikel: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {        // komponen untuk mengecek ketika component telah di mount-ing, maka panggil API
        this.ambilDataDariServerAPI()   // ambil data dari server API lokal
    }

    handleHapusArtikel = (data) => {        // fungsi yang meng-handle button action hapus data
        fetch(`http://localhost:3001/posts/${data}`, { method: `DELETE` })    // alamat URL API yang ingin kita HAPUS datanya
            .then(res => {      // ketika proses hapus berhasil, maka ambil data dari server API lokal
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahArtikel = (event) => {      // fungsi untuk menghandle form tambah data artikel
        let formInsertArtikel = { ...this.state.insertArtikel };      //clonning data state insertArtikel ke dalam variabel formInsertArtikel
        let timestamp = new Date().getTime();                       //digunakan untuk menyimpan waktu (sebagai ID artikel)
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;  //menyimpan data onchange ke formInsertArtikel sesuai dengan target yang diisi
        this.setState({
            insertArtikel: formInsertArtikel
        });
    }

    handleTombolSimpan = () => {       // fungsi untuk menghandle tombol simpan
        fetch('http://localhost:3001/posts', {
            method: 'post',                         // method POST untuk input/insert data
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertArtikel)      // kirimkan ke body request untuk data artikel yang akan ditambahkan (insert)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();                  // reload / refresh data
            })
    }

    render(){
        return(
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" onChange={this.handleTambahArtikel}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea name="body" id="body" cols="30" rows="3" className="form-control" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel=>{
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel}/>
                    })
                }
            </div>
        )
    }

}



export default BlogPost;