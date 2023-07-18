function signUpPage() {
  section_sign_up.classList.remove('invisible')
  section_log_in.classList.add('invisible')
  section_registro_ingresos.classList.add('invisible')
  section_registro_egresos.classList.add('invisible')
  section_registro_presupuesto.classList.add('invisible')
  section_consulta_ingresos.classList.add('invisble')
  section_consulta_egresos.classList.add('invisible')
}

function loginPage() {
  section_sign_up.classList.add('invisible')
  section_log_in.classList.remove('invisible')
  section_registro_ingresos.classList.add('invisible')
  section_registro_egresos.classList.add('invisible')
  section_registro_presupuesto.classList.add('invisible')
  section_consulta_ingresos.classList.add('invisble')
  section_consulta_egresos.classList.add('invisible')
}

function registroIngresoPage(){
  section_sign_up.classList.add('invisible')
  section_log_in.classList.add('invisible')
  section_registro_ingresos.classList.remove('invisible')
  section_registro_egresos.classList.add('invisible')
  section_registro_presupuesto.classList.add('invisible')
  section_consulta_ingresos.classList.add('invisble')
  section_consulta_egresos.classList.add('invisible')
}

function registroEgresoPage() {
  section_sign_up.classList.add('invisible')
  section_log_in.classList.add('invisible')
  section_registro_ingresos.classList.add('invisible')
  section_registro_egresos.classList.remove('invisible')
  section_registro_presupuesto.classList.add('invisible')
  section_consulta_ingresos.classList.add('invisble')
  section_consulta_egresos.classList.add('invisible')
}

function registroPresupuestoPage() {
  section_sign_up.classList.add('invisible')
  section_log_in.classList.add('invisible')
  section_registro_ingresos.classList.add('invisible')
  section_registro_egresos.classList.add('invisible')
  section_registro_presupuesto.classList.remove('invisible')
  section_consulta_ingresos.classList.add('invisble')
  section_consulta_egresos.classList.add('invisible')
}

function principalPage() {
  section_sign_up.classList.add('invisible');
  section_log_in.classList.add('invisible');
  section_registro_ingresos.classList.add('invisible');
  section_registro_egresos.classList.add('invisible');
  section_registro_presupuesto.classList.add('invisible');
  section_consulta_ingresos.classList.remove('invisible');
  section_consulta_egresos.classList.remove('invisible');
}
