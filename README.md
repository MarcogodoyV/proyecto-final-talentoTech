# 🛒 Firebase Products & Users API

Este es un proyecto backend en Node.js que utiliza Firebase Firestore como base de datos. Permite gestionar productos y usuarios mediante una API REST.

## 🚀 Características

- CRUD de **productos** (`products`)
- CRUD de **usuarios** (`users`)
- Protección de rutas mediante roles (`admin`)
- Conexión con Firebase (Firestore)

## 🧾 Endpoints disponibles

### 📦 Productos

| Método | Ruta              | Descripción                  |
|--------|-------------------|------------------------------|
| GET    | `/products`       | Obtener todos los productos  |
| GET    | `/products/:id`   | Obtener producto por ID      |
| POST   | `/products`       | Crear nuevo producto         |
| DELETE | `/products/:id`   | Eliminar producto por ID     |

> 🔐 Para acceder a estas rutas se requiere tener un usuario con rol `admin`.

---

### 👤 Usuarios

| Método | Ruta           | Descripción              |
|--------|----------------|--------------------------|
| GET    | `/users`       | Obtener todos los usuarios |
| GET    | `/users/:id`   | Obtener usuario por ID     |
| POST   | `/users`       | Crear nuevo usuario        |

> ℹ️ Si se desea tener acceso a rutas protegidas (como la gestión de productos), el usuario **debe crearse con rol `admin`**. (cuenta admin por defecto usuario:admin, password: 1234)

---

## 🛠️ Instalación y ejecución

1. Clona el repositorio:

```bash
git clone https://github.com/tuusuario/tu-repo.git
cd tu-repo
```

2. Instala las dependencias:

```bash
npm install
```

3. Configura Firebase:

Crea un archivo `.env` o edita `config/firebase.js` con tu configuración de Firebase:

```js
// config/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

4. Ejecuta el proyecto:

```bash
npm run dev
```

## 📂 Estructura del proyecto

```
├── config/
│   └── firebase.js          # Configuración de Firebase
│   └── envs.js          # Configuración de variables de entorno
├── controllers/
│   └── products.controller.js
│   └── users.controller.js
│   └── auth.controller.js  # En desarrollo
├── models/
│   └── products.model.js
│   └── users.model.js
├── routes/
│   └── products.routes.js
│   └── users.routes.js
│   └── auth.routes.js # En desarrollo
├── services/
│   └── products.service.js
│   └── users.service.js
│   └── auth.service.js # En desarrollo
├── index.js                 # Punto de entrada de la aplicación
```

---

## ✍️ Contribuciones

Las contribuciones son bienvenidas. Abre un issue o un PR con tus mejoras, o escribeme.

---

## 📝 Licencia

Este proyecto está bajo la licencia MIT.
