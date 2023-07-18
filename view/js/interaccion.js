const Toast = Swal.mixin({
	toast: true,
	showConfirmButton: false,
	timer: 2000,
	timerProgressBar: true,
	didOpen: (toast) => {
		toast.addEventListener("mouseenter", Swal.stopTimer);
		toast.addEventListener("mouseleave", Swal.resumeTimer);
	},
});

document.getElementById("sign_up_registrar_usuario").addEventListener("click", registrarUsuario);
document.getElementById("iniciar_login").addEventListener("click", ingresar);
document.getElementById("generar_ingreso").addEventListener("click", registrarIngreso);
document.getElementById("generar_egreso").addEventListener("click", registrarEgreso);
document.getElementById("registrar_presupuesto").addEventListener("click", registrarPresupuesto);
document.getElementById("generar_ingreso").addEventListener("click", registrarIngreso);

function registrarUsuario() {
  const nombre = document.querySelector('#section_sign_up input[name="nombre"]').value;
  const contraseña = document.querySelector('#section_sign_up input[name="contraseña"]').value;
  const correo = document.querySelector('#section_sign_up input[name="correo"]').value;

  if (nombre === "" || contraseña === "" || correo === "") {
    Toast.fire({
			icon: "error",
			title: "Por favor ingrese los datos"
		})
    return;
  }

  signUp(nombre, contraseña, correo)
  .then(response => {
    loginPage();
    Toast.fire({
      icon: "success",
			title: "Usuario registrado correctamente",
		})
    console.log("Usuario registrado:", response);
  })
  .catch(error => {
    Toast.fire({
			icon: "error",
			title: "Error al registrar usuario"
		})
    console.error("Error al registrar usuario", error);
  });
}

function ingresar() {
  const nombre = document.querySelector('#section_log_in input[name="nombre_usuario"]').value;
  const contraseña = document.querySelector('#section_log_in input[name="contraseña"]').value;

  if (nombre === "" || contraseña === "") {
    Toast.fire({
      icon: "error",
      title: "Por favor ingrese los datos"
    })
    return;
  }

  login(nombre,contraseña)
    .then(response =>{
      console.log("logeado", response)
      Toast.fire({
        icon: "success",
        title: "Inicio de sesión exitoso",
      })
      principalPage();
      consultarIngresos(nombre);
      consultarEgresos(nombre);
    })
    .catch(error =>{
      Toast.fire({
        icon: "error",
        title: "Hubo un error al iniciar sesión",
      })
      console.error("Error al iniciar sesión", error)
    });
}

function registrarIngreso(){
  const fuente_registro = document.querySelector('#section_registro_ingresos input[name="fuente_ingreso"]').value;
  const monto = document.querySelector('#section_registro_ingresos input[name="monto_recibido').value;
  const fecha = document.querySelector('#section_registro_ingresos input[name="fecha"]').value;

  if(fuente_registro === "" || monto === "" || fecha === ""){
    Toast.fire({
      icon: "error",
      title: "Por favor ingrese los datos"
    })
    return;
  }

  crearIngreso(id_usuario, fuente_registro,monto,fecha)
  .then(response =>{
      console.log("logeado",response)
  })
  .catch(error =>{
      console.error("error al ingresar a la cuenta",error)
  });
}

function registrarEgreso(){
  const adquisicion = document.querySelector('input[name="adquisicion"]').value;
  const precio = document.querySelector('input[name="precio"]').value;
  const fecha_pago = document.querySelector('input[name="fecha_pago"]').value;
  const categoria = document.querySelector('select[name="categoria"]').value;
  const estado = document.querySelector('select[name="estado"]').value;

  if(adquisicion === "" || precio === "" || fecha_pago === "" || categoria === "" || estado === ""){
    Toast.fire({
      icon: "error",
      title: "Por favor ingrese los datos"
    })
    return;
  }

  crearEgreso(id_usuario, id_categoria, id_estado, monto)
  .then(response =>{
      console.log("logeado",response)
      principalPage();
  })
  .catch(error =>{
      console.error("error al ingresar a la cuenta",error)
  });
}

function registrarPresupuesto(){
  const monto = document.querySelector('input[name="monto_limite"]').value;
  const categoria = document.querySelector('select[name="categoria_presupuesto"]').value;

  if(monto === "" || categoria === ""){
    Toast.fire({
      icon: "error",
      title: "Por favor ingrese los datos"
    })
    return;
  }

  registrarPresupuestoPresupuesto(adquisicion,precio,fecha_pago,categoria,estado)
  .then(response =>{
      console.log("logeado",response)
      principalPage();
  })
  .catch(error =>{
      console.error("error al ingresar a la cuenta",error)
  });
}
