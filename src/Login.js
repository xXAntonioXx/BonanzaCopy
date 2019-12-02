import React, { Component } from 'react';
import './Login.css';
import './util.css';
import './Dropdownmenu.css'
import Pos from './Pos';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            username:'',
            pass:'',
            loged:false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loged = this.loged.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
    }

    handleSubmit(event){
        if (this.state.username==="vendedor" && this.state.pass==="telasBonanza"){
            this.setState({loged:true});
        }
        event.preventDefault();
    }

    loged(){
        return(
            <div class="limiter">
                <div class="container-login100">
                    <div class="wrap-login100">
                        <form class="login100-form validate-form p-l-55 p-r-55 p-t-178" >
                            <span class="login100-form-title">
                                <h1 className="titulo">Telas Bonanza</h1>
					        </span>

                            <div class="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                                <input class="input100" type="text" name="username" placeholder="usuario" onChange={this.handleChange}/>
                                <span class="focus-input100"></span>
                            </div>

                            <div class="wrap-input100 validate-input" data-validate="Please enter password">
                                <input class="input100" type="password" name="pass" placeholder="contraseña" onChange={this.handleChange}/>
                                <span class="focus-input100"></span>
                            </div>
                            <br/>
                            <br/>
                            <div class="container-login100-form-btn">
                                <button class="login100-form-btn" onClick={this.handleSubmit}>
                                    Ingresar
						        </button>
                            </div>

                            <div class="flex-col-c p-t-170 p-b-40">
                                <span class="txt1 p-b-9">
                                    punto de venta
						        </span>

                                <a href="https://github.com/emilews" class="txt3">
                                    v1.0.0
						        </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                { this.state.loged ? <Pos /> : this.loged()}
            </div>
            // <div class="limiter">
            //     <div class="container-login100">
            //         <div class="wrap-login100">
            //             <form class="login100-form validate-form p-l-55 p-r-55 p-t-178" onSubmit={this.handleSubmit}>
            //                 <span class="login100-form-title">
            //                     Ingresar
			// 		</span>

            //                 <div class="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
            //                     <input class="input100" type="text" name="username" placeholder="usuario" onChange={this.handleChange}/>
            //                     <span class="focus-input100"></span>
            //                 </div>

            //                 <div class="wrap-input100 validate-input" data-validate="Please enter password">
            //                     <input class="input100" type="password" name="pass" placeholder="contraseña" onChange={this.handleChange}/>
            //                     <span class="focus-input100"></span>
            //                 </div>
            //                 <br/>
            //                 <br/>
            //                 <div class="container-login100-form-btn">
            //                     <button class="login100-form-btn" >
            //                         Ingresar
			// 			        </button>
            //                     <input class="login100-form-btn" type="submit" value="Ingresar"/>
            //                 </div>

            //                 <div class="flex-col-c p-t-170 p-b-40">
            //                     <span class="txt1 p-b-9">
            //                         punto de venta
			// 			</span>

            //                     <a href="#" class="txt3">
            //                         v1.0.0
			// 			</a>
            //                 </div>
            //             </form>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default Login;