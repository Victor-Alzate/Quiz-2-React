import Header from "../../components/Header"
import { users  } from "../../data/dataUsers" 
import { useState } from "react"
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"
import './Login.css'

const Login = () => {

    const [getUser,setUser] = useState("")
    const [getPassword,setPassword] = useState("")
    
    let redireccion = useNavigate()
    console.log(users[0])

    function login() {
       if(buscarUsuario()){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,            
            timer: 1500
             
          });
          redireccion('/Doashpage')
        } else {
            Swal.fire({
                title: "IMPOSTOR.",
                width: 600,
                padding: "3em",
                color: "#716add",
                background: "#fff url(/images/trees.png)",
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nyan-cat.gif")
                  left top
                  no-repeat
                `
              });
        }
    }

    function buscarUsuario(){
      let auth = users.some( (user) => getUser == user.email &&
         getPassword == user.password)
         return auth
    }

    return (
        <section className="sectionLogin">
            <Header />
            <form>
                <section>
                    <label htmlFor="">Usuario</label>
                    <input value={getUser} onChange={(e)=> setUser(e.target.value)} type="text" />
                </section>
                <section>
                    <label htmlFor="">Contraseña</label>
                    <input value={getPassword} onChange={(e)=> setPassword(e.target.value)} type="password" />
                </section>
                <button onClick={login} type="button">Iniciar Sesión</button>
            </form>
        </section>
    )
}

export default Login