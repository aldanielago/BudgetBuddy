// No olvides poner los puntitos para evitar dolores de cabeza por fa
const $ = (id) => document.querySelector(id);

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

// Botones de navegación
const btn_sign_up_registrar = $('#sign_up_registrar');
const btn_sign_up_login = $('#sign_up_iniciar');
const btn_log_in_registrar = $('#log_in_registrar');
const btn_log_in_login = $('#log_in_iniciar');
const btn_registrar_ingreso = $('#registrar_ingreso');
const btn_registrar_egreso = $('#registrar_egreso');
const btn_registrar_presupuesto = $('#registrar_presupuesto');

// Para el sign up
const section_sign_up = $('#section_sign_up');

// Para el logn in
const section_log_in = $('#section_log_in');

// Para el registro de ingresos
const section_registro_ingresos = $('#section_registro_ingresos');

// Para el registro de egresos
const section_registro_egresos = $('#section_registro_egresos');

// Para el registro de presupuesto
const section_registro_presupuesto = $('#section_registro_presupuesto');

// Para la consulta de ingresos
const section_consulta_ingresos = $('#section_consulta_ingresos');
const tabla_consulta_ingresos = $('#section_consulta_ingresos table tbody');

// Para la consulta de egresos
const section_consulta_egresos = $('#section_consulta_egresos');
const tabla_consulta_egresos = $('#section_consulta_egresos table tbody');
