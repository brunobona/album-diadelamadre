# Para vos, mamá — álbum web

Un sitio estático en HTML, CSS y JavaScript. No necesita instalación ni herramientas de compilación. Está preparado para publicar gratis con GitHub Pages.

## 1. Probar la página

1. Descomprimí `album_mama.zip`.
2. Abrí la carpeta `album_mama`.
3. Hacé doble clic en `index.html` para abrirlo en el navegador.

Las fotos de ejemplo cargan desde Unsplash, así que para verlas hace falta conexión a internet.

## 2. Reemplazar las fotos

1. Abrí `index.html` con un editor de texto (por ejemplo, Visual Studio Code o el Bloc de notas).
2. Buscá `images.unsplash.com`.
3. Cada imagen está en una etiqueta `<img ... src="URL" ...>`. Reemplazá solamente la URL del `src` por la ruta de tu foto, por ejemplo:
   `fotos/mama-y-yo.jpg`
4. Creá una carpeta llamada `fotos` dentro de `album_mama` y copiá allí tus imágenes.
5. Cambiá también el texto `alt="..."` para describir la foto y editá los títulos y textos que aparecen debajo de cada imagen.

Ejemplo:
```html
<img src="fotos/mama-y-yo.jpg" alt="Mamá y yo en un paseo">
```

Usá nombres de archivo simples, sin espacios ni tildes, por ejemplo `cumple-mama.jpg`.

## 3. Agregar música

1. Elegí un archivo de audio que tengas derecho a usar (por ejemplo, una canción propia o música con licencia adecuada).
2. Copialo dentro de la carpeta del sitio y llamalo exactamente `musica.mp3`.
3. El botón “Activar música” lo reproduce cuando la persona lo toca. No hay reproducción automática.

Si la canción es de un servicio de streaming, no copies ni subas el archivo protegido sin permiso. GitHub Pages publica los archivos del repositorio, así que el audio que subas también quedará accesible públicamente.

## 4. Personalizar la sorpresa y la carta

- En `index.html`, buscá `data-message=` para cambiar los recuerdos que aparecen al tocar las fotos.
- Buscá `id="surpriseMessage"` para cambiar el mensaje sorpresa.
- Editá los párrafos dentro de `class="letter-content"` para escribir tu propia carta.
- Podés cambiar “tu hijo” o la firma por tu nombre o apodo.

## 5. Publicar en GitHub Pages

1. Creá una cuenta en [GitHub](https://github.com/) si todavía no tenés una.
2. Creá un repositorio nuevo, por ejemplo `album-para-mama`.
3. Si querés que el sitio sea accesible mediante GitHub Pages gratis, configurá el repositorio como **Public**.
4. Subí el contenido de esta carpeta al repositorio: `index.html`, `styles.css`, `script.js`, `README.md` y tu carpeta `fotos` (si ya la creaste), más `musica.mp3` si corresponde. Subí los archivos y carpetas, no el ZIP.
5. En el repositorio, entrá a **Settings → Pages**.
6. En **Build and deployment**, seleccioná **Deploy from a branch**.
7. Elegí la rama `main` y la carpeta `/(root)`, y guardá.
8. Esperá a que GitHub termine la publicación. En **Settings → Pages** aparecerá la URL del sitio, con un formato parecido a `https://TU-USUARIO.github.io/album-para-mama/`.
9. Abrí esa URL en el celular para probarla y compartila con tu mamá.

Los nombres exactos de algunos controles de GitHub pueden cambiar con el tiempo. Si la URL no aparece enseguida, revisá la sección **Actions** del repositorio para ver el estado de la publicación.

## Privacidad

Un repositorio público y su sitio publicado son públicos. Cualquiera que tenga la URL puede visitar la página, y los archivos que subas al repositorio pueden verse y descargarse. No subas información que quieras mantener privada. Para este regalo, evitá incluir direcciones, datos personales sensibles o fotos que tu familia no quiera compartir públicamente.
