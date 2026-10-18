# Álbum para mamá — versión personalizada

Esta carpeta contiene la página, los estilos, las interacciones y las fotos que enviaste.

## Por qué no se veían las fotos
Las rutas de Windows usan barras invertidas (`\`) y una de las imágenes tenía una ruta absoluta de tu computadora (`C:\Users\...`). Esas rutas no funcionan en una página web publicada. Ahora todas las imágenes usan rutas relativas como `fotos/mama-y-yo-1.jpeg`, que funcionan localmente y en GitHub Pages.

## Ver la página
Abrí `index.html` en tu navegador. Mantené la carpeta `fotos` junto a `index.html`, `styles.css` y `script.js`.

## Cambiar o sumar fotos
Las fotos están en la carpeta `fotos`. Para cambiar una, reemplazá el archivo conservando exactamente el mismo nombre, o editá el atributo `src` correspondiente en `index.html`. Para sumar más, duplicá uno de los elementos `<article class="memory-card reveal">` de la galería y cambia el nombre del archivo, el `alt` y el mensaje `data-message`.

La galería muestra las fotos del ZIP sin repetir la foto de portada. Las fotos horizontales se presentan en formato apaisado y completas; las imágenes no muestran títulos, textos ni mensajes al tocarlas.

## Publicar en GitHub Pages
1. Creá un repositorio público en GitHub, por ejemplo `album-para-mama`.
2. Subí el contenido de esta carpeta (no el ZIP): `index.html`, `styles.css`, `script.js`, `README.md` y la carpeta `fotos` completa.
3. Abrí **Settings → Pages**.
4. En **Build and deployment**, elegí **Deploy from a branch**, rama `main` y carpeta `/(root)`. Guardá.
5. Cuando termine el despliegue, GitHub mostrará la URL pública en esa misma sección.

**Privacidad:** en un repositorio público, el sitio y las fotos se pueden ver y descargar.


### Cambios de esta versión
- Las fotos del álbum no hacen nada al tocarlas: no aparece ningún mensaje.
- Se agregaron recortes decorativos de las orquídeas de mamá en distintas partes de la página.
- Conservá los archivos `orquidea-amarilla.jpg`, `orquidea-fucsia.jpg` y `orquidea-lila.jpg` dentro de `fotos/` al publicar.

