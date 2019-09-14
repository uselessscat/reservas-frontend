import React from 'react';
import LoginLayout from '../layouts/login-layout';

class Login extends React.Component {
    render() {
        return (
            <LoginLayout>
                <div className='row'>
                    <div className='col-lg-6 d-none d-lg-block bg-login-image'></div>
                    <div className='col-lg-6'>
                        <div className='p-5'>
                            <div className='text-center'>
                                <h1 className='h4 text-gray-900 mb-4'>Bienvenido!</h1>
                            </div>
                            <form className='user'>
                                <div className='form-group'>
                                    <input type='email' className='form-control form-control-user' id='exampleInputEmail' aria-describedby='emailHelp' placeholder='Correo electrónico' />
                                </div>
                                <div className='form-group'>
                                    <input type='password' className='form-control form-control-user' id='exampleInputPassword' placeholder='Contraseña' />
                                </div>
                                <div className='form-group'>
                                    <div className='custom-control custom-checkbox small'>
                                        <input type='checkbox' className='custom-control-input' id='customCheck' />
                                        <label className='custom-control-label' htmlFor='customCheck'>Recuerdame</label>
                                    </div>
                                </div>
                                <a href='index.html' className='btn btn-primary btn-user btn-block'>Ingresar</a>
                                <hr />
                                <a href='index.html' className='btn btn-google btn-user btn-block'>
                                    <i className='fab fa-google fa-fw'></i> Ingresar con Google</a>
                                <a href='index.html' className='btn btn-facebook btn-user btn-block'>
                                    <i className='fab fa-facebook-f fa-fw'></i> Ingresar con Facebook</a>
                            </form>
                            <hr />
                            <div className='text-center'>
                                <a className='small' href='forgot-password.html'>Olvidé mi contraseña?</a>
                            </div>
                            <div className='text-center'>
                                <a className='small' href='register.html'>Crear cuenta</a>
                            </div>
                        </div>
                    </div>
                </div>
            </LoginLayout>
        )
    }
}

export default Login;