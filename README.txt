# API Challenge for Aflore - Frontend Job

El proyecto se realizo con HTML5, CSS3 y Vanilla JavaScript

## Ejecución del proyecto

Una vez descargado el proyecto se debe abrir desde cualquier editor de código, una vez abierto es importante seguir los siguientes pasos:

- Abrir el index.html con algún plugin para servidores estáticos, puede ser LiveServer, LiveServerPreview, HTTP Server, o cualquier otro. Es importante seguir este paso debido a que la petición al API requiere del protocolo HTTP:// , si no la conexión no servirá y no listará los productos.
- Una vez corriendo la aplicación listará los productos del API.
- El buscador esta hecho para buscar el ID de cualquier producto en caso de no encontrarlo mostrara un error, además abrá un botón para recargar la página y volver a ver los productos.

## ¿Cómo se realizó el proyecto?

El proyecto se realizo con vanilla javascript, hay una función autoejecutable en la carga inicial de la aplicación, de inmediato se llaman los elementos del DOM que van a ser usados para la interacción y el renderizado.

Luego se escribieron funciones y métodos claves en el programa:

- getData(url) Retorna una promesa con los datos del API: https://api.mocki.io/v1/56e929d8
- createTemplate(HTMLString) Me permite crear un documento HTML asociado con el DOM actual para poder renderizar los elementos proveniente del API.
- createTemplateString(item) Mediante Literal Strings creamos HTML asociado a los diferentes items que vamos a renderizar posteriormente, es una manera sencilla de crear HTML vía JavaScript.
- findId(id, array) Esta función nos permite sustraer los id de una lista de array que coincidan con el número de búsqueda del formulario.

Por último agregamos los Listener del formulario para realizar las búsquedas, los momentos claves del programa son:

- Al cargar la página por primera vez.
- Al buscar un producto.
- Al no encontrar un producto.
- Usamos en las peticiones al API async/await para prevenir los eventos asíncronos de javascript y asi nuestro programa se ejecute normalmente.
- Algunas funciones se repiten enfocadas a diferentes contextos, se tuvo en cuenta el principio de la responsabilidad a pesar de escribir más código, asi evitamos que una sola función haga múltiples tareas y reduzcamos los posibles bugs.

## En cuanto al diseño

- Se realizó con CSSGRID, para optimizar hacia diferentes dispositivos móviles,
- Se uso Flexbox para alinear varios elementos.
- La paleta de colores es azúl pensando en productos de aseo, y se complemento con un amarillo oscuro.
- Se usaron las variables nativas de css en :root{}
- Algunos elementos como el spinner son tomados de internet y las fuentes de google fonts.

## Mejoras

Las mejoras de la aplicación serían variadas, en mi opinión propondría las siguientes:

- Buscar los productor con tan solo escribir en el input y que esta busque en tiempo real mediante un onChange() en el input de búsqueda.
- Crear una interfaz con los subproductos, listandolos por categorías y haciendo un diseño más produndo con esas listas.
- Realizar búsquedas avanzadas sobre la misma API, creando una experiencia más rica para el usuario.

## Conclusión

La aplicación se realizó aprovechando los 3 días de la prueba, las soluciones presentes se mezclaron con un poco de creatividad, están expuestas a consejos, ya que se puede optimizar mucho el código, doy gracias por la oportunidad, estaré muy feliz de su feedback ya que eso me hará crecer como profesional y como ser humano.

Gracias.
Att: Arnold Restrepo Hernandez | Frontend - React Developer
