import React from 'react';

class Login extends React.Component {
    componentDidMount() {
        document.body.classList.add('bg-gradient-primary');
    }

    render() {
        return (
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-10 col-lg-12 col-md-9">
                        <div class="card o-hidden border-0 shadow-lg my-5">
                            <div class="card-body p-0">
                                <div class="row">
                                    <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div class="col-lg-6">
                                        <div class="p-5">
                                            <div class="text-center">
                                                <h1 class="h4 text-gray-900 mb-4">Bienvenido!</h1>
                                            </div>
                                            <form class="user">
                                                <div class="form-group">
                                                    <input type="email" class="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Correo electrónico" />
                                                </div>
                                                <div class="form-group">
                                                    <input type="password" class="form-control form-control-user" id="exampleInputPassword" placeholder="Contraseña" />
                                                </div>
                                                <div class="form-group">
                                                    <div class="custom-control custom-checkbox small">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck" />
                                                        <label class="custom-control-label" for="customCheck">Recuerdame</label>
                                                    </div>
                                                </div>
                                                <a href="index.html" class="btn btn-primary btn-user btn-block">Ingresar</a>
                                                <hr />
                                                <a href="index.html" class="btn btn-google btn-user btn-block">
                                                    <i class="fab fa-google fa-fw"></i> Ingresar con Google</a>
                                                <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                                    <i class="fab fa-facebook-f fa-fw"></i> Ingresar con Facebook</a>
                                            </form>
                                            <hr />
                                            <div class="text-center">
                                                <a class="small" href="forgot-password.html">Olvidé mi contraseña?</a>
                                            </div>
                                            <div class="text-center">
                                                <a class="small" href="register.html">Crear cuenta</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Login;