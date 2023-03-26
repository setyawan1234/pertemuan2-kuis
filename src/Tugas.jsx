import React from 'react';
import './Tugas.css';

class Tugas extends React.Component{
    render() {
        return (
            <div className="form-control">
                <h2>Form Login</h2>
                <form action="POST">
                <div className="container">
                    <div className="row-description">
                        <h1>Tugas Pertemuan<br></br>ketiga</h1>
                        <div ClassName="form-login">
                            <label htmlFor="username" className="text-username">Username</label>
                            <input type="text"placeholder='Masukkan username' name="username" required />
                        </div>
                        <div ClassName="form-login">
                            <label htmlFor="password" className="text-password">Password</label>
                            <input type="password"placeholder='Masukkan password' name="password" required />
                        </div>
                        <div ClassName="form-login">
                            <button class="button button1">Login</button>
                        </div>
                        <div ClassName="form-login">
                            <input type="checkbox" name="remember" /> Remember Me
                        </div>
                        <div ClassName="form-login">
                            <button class="button button2">Cancel</button>
                        </div>
                    </div>
                </div>
                </form>
            </div>
            
            
        )
      }
}
export default Tugas;