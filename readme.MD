
Ejercicio Formularios (4 ptos.)
1. Apartado 1
Realiza un formulario que pida una dirección de email y la valide antes de enviarla:
a) Debe validar si el email sigue el formato texto@servidor.loquesea
b) Además de validar el formato anterior, debe comprobar que servidor.loquesea este
como servidor admitido en un array de servidores llamado “listaServidores”.
Dicho array debe ser definido a mano en el código.
Ejemplo
listaServidores=[“terra.es”,”google.com”,”marca.es”,”yahoo.es”];

2. Apartado 2
Realiza un formulario con dos elementos “select”. Al cambiar el primero, se actualizará el
segundo. Al enviar el formulario, se comprobará que ambos han sido marcados.
Cuando no tengan ninguna selección previa, los “select” mostrarán “Selector no
seleccionado”.
Los valores del primer “select” serán “Madrid”, “Barcelona”, “Valencia”. Por defecto no
habrá ninguno seleccionado.
Los valores del segundo “select” son:
• Para Madrid: “Madrid Capital”, “Alcalá de Henares”, “Alcorcón”.
• Para Barcelona: “Barcelona Capital”, “Badalona”, “Mataró”.
• Para Valencia: “Valencia Capital”, “Torrent”, “Mislata”. (Aquí saldrá por defecto
seleccionado “Mislata”).