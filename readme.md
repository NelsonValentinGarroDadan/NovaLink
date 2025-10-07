# NovaLink

NovaLink es un sitio web de presentación y contacto desarrollado con HTML, CSS y JavaScript puro (vanilla).
Forma parte del proyecto integrador de la materia Web 1 de la Tecnicatura Universitaria en Desarrollo de Software en la Universidad de La Punta.

## Descripción

El proyecto busca demostrar la aplicación práctica de conceptos fundamentales de desarrollo web frontend, incluyendo estructura semántica en HTML, diseño responsivo con CSS, y manipulación dinámica del DOM mediante JavaScript.

NovaLink es un sitio estática y ligera con tres paginas: Home, Missions y Contact. Además, incluye un formulario de contacto con validación y un mensaje de éxito animado.

## Tecnologías usadas

- HTML5

- CSS3 (variables, flexbox, estilos responsivos, sombras)

- JavaScript (módulos ES6, manipulación del DOM, expresiones regulares para validación)

- Git / GitHub para control de versiones

## Funcionalidades principales

- Header dinámico con navegación adaptativa y detección de la página activa

- Menú tipo “burger” para dispositivos móviles

- Formulario de contacto con validación de campos (nombre completo, email, teléfono y mensaje)

- Mensaje de confirmación visual tras un envío exitoso

- Scroll automático al mensaje de éxito

- Reaparición del formulario luego de unos segundos

## Estructura del proyecto

NovaLink/
├── index.html
├── src/
│ ├── pages/
│ │ ├── missions.html
│ │ └── contact.html
│ └── scripts/
│ ├── main.js
│ └── components/
│ └── getSuccessfullyForm.js
├── css/
│ └── estilos.css
├── README.md
└── .gitignore

(Esta estructura puede variar levemente según ajustes personales.)

## Validaciones implementadas

Las validaciones de los campos del formulario utilizan expresiones regulares en JavaScript:

- Nombre completo: Debe tener al menos un nombre y un apellido.

- Email: Validación estándar (ejemplo: nombre@dominio.com
).

- Teléfono: Permite números con o sin prefijo internacional, mínimo 8 dígitos.

- Mensaje: Al menos 5 caracteres válidos (letras, números y algunos signos de puntuación).

Si algún campo no pasa la validación, se muestra un mensaje de error debajo del input correspondiente.
Si todo es correcto, el formulario desaparece temporalmente y se muestra un mensaje de éxito con la fecha y hora locales.

## Posibles mejoras futuras

Enviar los datos del formulario a un backend o API real mediante Fetch.

Agregar animaciones más suaves al mostrar/ocultar el mensaje de éxito.

Mejorar las validaciones del mensaje (por ejemplo, detectar solo texto coherente).

Implementar almacenamiento temporal (localStorage) para conservar los datos del formulario.

Integrar una sección de feedback visual adicional (por ejemplo, un loader mientras se envía el mensaje).

## Deploy 
- 