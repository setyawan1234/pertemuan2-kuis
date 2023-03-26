import React from "react";

const PostMahasiswa = (props) => {
    return (
        <div className="mahasiswa">
            <table className="table">
                <thead>
                    <tr>
                        <th className="col-1">Profile</th>
                        <th className="col-1">NIM</th>
                        <th className="col-2">Nama</th>
                        <th className="col-2">Alamat</th>
                        <th className="col-2">No.Handphone</th>
                        <th className="col-1">Angkatan</th>
                        <th className="col-1">Status</th>	
                        <th>Action</th>			
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="gambar-artikel">
                                <img src="https://img2.pngdownload.id/20180224/ctq/kisspng-student-cartoon-avatar-college-student-avatar-5a916d437bb620.0640142415194801315067.jpg" alt="Gambar Tumbnail Mahasiswa" className="src" />
                            </div>
                        </td>
                        <td>{props.nim}</td>
                        <td>{props.nama}</td>
                        <td>{props.alamat}</td>
                        <td>{props.hp}</td>
                        <td>{props.angkatan}</td>
                        <td>{props.status}</td>
                        <br></br>
                        <button className="btn btn-sm btn-warning" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Hapus Mahasiswa</button>
                    </tr>
                </tbody>
	    </table>
        </div>
    )
}

export default PostMahasiswa;