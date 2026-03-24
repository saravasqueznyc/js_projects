# Library Manager - Versión del Profesor

Este proyecto es una solución educativa diseñada para enseñar y asentar conceptos intermedios de JavaScript moderno en el entorno del navegador y en el servidor (con Node.js). 

## Objetivo Educativo
La aplicación demuestra cómo estructurar un proyecto profesional de una forma sencilla, dividiendo las responsabilidades entre el frontend y el backend, y aplicando patrones de diseño básicos y técnicas esenciales sin depender de bibliotecas complejas (como React o Express).

## Temas que se enseñan
- **Clases, Herencia y Polimorfismo**: Modelamos tipos de ítems (`Book`, `Magazine`) que heredan de una base (`LibraryItem`).
- **Manejo del DOM**: Interfaz dinámica generada desde JavaScript.
- **Node.js Nativo**: Uso del módulo `http` en lugar de Express para enseñar cómo funciona un servidor web por debajo (enrutamiento de `/api` y archivos estáticos).
- **Lectura/Escritura de Archivos**: Uso de `fs/promises` para persistir datos en `books.json`.
- **Programación Asincrónica**: Abundante uso de `async`/`await` y la API `fetch` (tanto desde el navegador para consumir nuestra API, como para consultar a Open Library).
- **Closures**: Uso práctico en la función `debounce` del buscador, que mantiene un estado privado de los *timers*.
- **Recursión**: Presente en la renderización de un árbol de categorías anidadas en el frontend.
- **Bucles iterativos (`for...in`)**: Iterando propiedades dinámicas para mostrar los detalles de un libro.
- **Estructura `switch`**: Lógica de filtrado de los ítems de la biblioteca según su estado.

## Estructura del proyecto

```text
library-manager-solution/
├── data/
│   └── books.json             <- Base de datos simulada
├── server/
│   ├── app.js                 <- Gestor de rutas principales
│   ├── server.js              <- Punto de entrada de Node
│   ├── config/                <- Configuraciones de entorno (Puerto, Rutas)
│   ├── routes/                <- Definición de endpoints API y rutas de vistas estáticas
│   ├── controllers/           <- Lógica de control entre rutas y servicios
│   ├── services/              <- Lógica de negocio y acceso a archivos
│   └── utils/                 <- Helpers de respuestas HTTP y parseo de tipos de archivo
└── public/                    <- Carpeta servida públicamente al navegador
    ├── index.html
    ├── css/
    └── js/
        ├── main.js            <- Punto de entrada del Frontend
        ├── models/            <- Clases de JS (POO)
        ├── ui/                <- Modificadores directos del DOM
        ├── handlers/          <- Controladores de eventos de la vista
        ├── services/          <- Comunicación con la API (fetch)
        ├── state/             <- Estado global rudimentario
        └── utils/             <- Funciones auxiliares (closures, recursión)
```

## Requisitos e Instalación
1. Asegúrate de tener instalado **Node.js** (versión 14 o superior recomendada).
2. Clona o descarga esta carpeta.
3. Abre una terminal en la raíz del proyecto.
4. (Opcional) Ejecuta `npm install` si existieran dependencias de desarrollo, pero en este proyecto **todo es nativo**, por lo que no es necesario instalar `node_modules`.

## Cómo correr el servidor
1. En la raíz del proyecto, ejecuta:
   ```bash
   npm start
   ```
   (o directamente `node server/server.js`)
2. Abre tu navegador y dirígete a `http://localhost:3000`.

## Cómo estudiar este proyecto
Si eres un estudiante, lo mejor es seguir este orden:
1. **El punto de partida**: Analiza `public/index.html` y `public/css/styles.css` para entender la estructura visual.
2. **El Servidor (Backend)**: 
   - Lee `server/server.js` y `server/app.js` para entender cómo Node recibe peticiones HTTP usando solo módulos nativos.
   - Revisa `server/routes/apiRoutes.js` y `server/controllers/bookController.js` para entender qué rutas ofrece el API interno.
   - Comprende cómo se leen/guardan datos localmente en `server/services/bookFileService.js` (uso de `fs/promises`).
3. **El Cliente (Frontend)**:
   - Entiende cómo inicia la app leyendo `public/js/main.js`.
   - Repasa los modelos en `public/js/models/` prestando atención a la herencia y métodos de clase.
   - Observa cómo `public/js/services/bookApi.js` usa `fetch` para comunicarse con la API de Node.
   - Analiza `public/js/ui/` para ver cómo se inyectan variables e historias en el DOM.
4. **Conceptos Avanzados**:
   - Estudia `public/js/utils/closures.js` para asimilar cómo funcionan las variables privadas en JS (función debounce).
   - Estudia `public/js/utils/recursion.js` para observar cómo una función puede llamarse a sí misma.
