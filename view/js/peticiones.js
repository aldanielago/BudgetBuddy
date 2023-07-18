const urlBase = "http://localhost:3000/api";

// Crear usuario
async function signUp(nombre, contraseña, email) {
  const url = `${urlBase}/usuario/sign_up`;
  const body = {
    nombre_usuario: nombre,
    contraseña: contraseña,
    email: email
  };
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });
  return true;
}

// Autenticar usuario
async function login(nombre, contraseña){
  const url = `${urlBase}/usuario/log_in`;
  const body = {
    nombre_usuario: nombre,
    contraseña: contraseña
  };
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const json = await response.json();
  return json;
}

// Crear presupuesto
async function crearPresupuesto(id_usuario, id_categoria, id_estado, monto){
  const url = `${urlBase}/presupuesto/crear`;
  const body = {
    id_usuario: id_usuario,
    id_categoria: id_categoria,
    id_estado: id_estado,
    monto: monto
  };
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const json = await response.json();
  return json;
}

// Eliminar presupuesto
async function eliminarPresupuesto(id_presupuesto){
  const url = `${urlBase}/presupuesto/eliminar`;
  const body = {
    id_presupuesto: id_presupuesto
  };
  const response = await fetch(url, {
    method: "DELETE",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const json = await response.json();
  return json;
}

// Crear egreso
async function crearEgreso(id_usuario, id_categoria, id_estado, monto, fecha_pago){
  const url = `${urlBase}/egreso/crear`;
  const body = {
    id_usuario: id_usuario,
    id_categoria: id_categoria,
    id_estado: id_estado,
    monto: monto,
    fecha_pago: fecha_pago
  };
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const json = await response.json();
  return json;
}

// Consultar egreso por usuario
async function consultarEgresos(id_usuario){
  const url = `${urlBase}/egreso/consultar`;
  const body = {
    id_usuario: 0
  };
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const json = await response.json();
  insertarEgresos(json)
}

// Insertar datos en la tabla de egresos
async function insertarEgresos(json){
  json.forEach(function(dato) {
    var fila = document.createElement("tr");
    fila.innerHTML = "<td>" + dato.id_categoria + "</td><td>" + dato.id_estado + "</td><td>" + dato.fecha_pago + "</td>";
    tabla.appendChild(fila);
  });

  // Agregar la tabla al div
  tabla_consulta_egresos.appendChild(tabla);
}

// Eliminar egreso
async function eliminarEgreso(id_egreso){
  const url = `${urlBase}/egreso/eliminar`;
  const body = {
    id_egreso: id_egresow
  };
  const response = await fetch(url, {
    method: "DELETE",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const json = await response.json();
  return json;
}

// Crear ingreso
async function crearIngreso(id_usuario, id_categoria, id_estado, monto, fecha_pago){
  const url = `${urlBase}/ingreso/crear`;
  const body = {
    id_usuario: id_usuario,
    id_categoria: id_categoria,
    id_estado: id_estado,
    monto: monto,
    fecha_pago: fecha_pago
  };
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const json = await response.json();
  return json;
}

// Consultar ingreso por usuario
async function consultarIngresos(){
  const url = `${urlBase}/ingreso/consultar`;
  const body = {
    id_usuario: 0
  };
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const json = await response.json();
  return json;
}

// Eliminar ingreso
async function eliminarIngreso(id_ingreso){
  const url = `${urlBase}/ingreso/eliminar`;
  const body = {
    id_ingreso: id_ingreso
  };
  const response = await fetch(url, {
    method: "DELETE",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const json = await response.json();
  return json;
}
