function signUpPage() {
  section_sign_up.classList.remove('hidden')
  section_log_in.classList.add('hidden')
  section_registro_ingresos.classList.add('hidden')
  section_registro_egresos.classList.add('hidden')
  section_registro_presupuesto.classList.add('hidden')
  section_consulta_ingresos.classList.add('hidden')
  section_consulta_egresos.classList.add('hidden')
}

function loginPage() {
  section_sign_up.classList.add('hidden')
  section_log_in.classList.remove('hidden')
  section_registro_ingresos.classList.add('hidden')
  section_registro_egresos.classList.add('hidden')
  section_registro_presupuesto.classList.add('hidden')
  section_consulta_ingresos.classList.add('hidden')
  section_consulta_egresos.classList.add('hidden')
}

function registroIngresoPage(){
  section_sign_up.classList.add('hidden')
  section_log_in.classList.add('hidden')
  section_registro_ingresos.classList.remove('hidden')
  section_registro_egresos.classList.add('hidden')
  section_registro_presupuesto.classList.add('hidden')
  section_consulta_ingresos.classList.add('hidden')
  section_consulta_egresos.classList.add('hidden')
}

function registroEgresoPage() {
  section_sign_up.classList.add('hidden')
  section_log_in.classList.add('hidden')
  section_registro_ingresos.classList.add('hidden')
  section_registro_egresos.classList.remove('hidden')
  section_registro_presupuesto.classList.add('hidden')
  section_consulta_ingresos.classList.add('hidden')
  section_consulta_egresos.classList.add('hidden')
}

function registroPresupuestoPage() {
  section_sign_up.classList.add('hidden')
  section_log_in.classList.add('hidden')
  section_registro_ingresos.classList.add('hidden')
  section_registro_egresos.classList.add('hidden')
  section_registro_presupuesto.classList.remove('hidden')
  section_consulta_ingresos.classList.add('hidden')
  section_consulta_egresos.classList.add('hidden')
}

function principalPage() {
  section_sign_up.classList.add('hidden');
  section_log_in.classList.add('hidden');
  section_registro_ingresos.classList.add('hidden');
  section_registro_egresos.classList.add('hidden');
  section_registro_presupuesto.classList.add('hidden');
  section_consulta_ingresos.classList.remove('hidden');
  section_consulta_egresos.classList.remove('hidden');
}
