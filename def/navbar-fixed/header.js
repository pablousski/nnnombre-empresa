function buscarProducto() {
  const query = document.getElementById("busqueda").value.trim().toLowerCase();
  if (!query) return false;

  // Recorremos los enlaces del menú para encontrar coincidencias en el texto
  const links = document.querySelectorAll('.navbar-nav .nav-link');
  for (const link of links) {
    if (link.textContent.toLowerCase().includes(query)) {
      window.location.href = link.href;
      return false;
    }
  }

  // Si no hay coincidencias en el menú, redirigimos a la página de productos
  // con el término en la query string para que se pueda filtrar allí.
  window.location.href = 'productos.html?search=' + encodeURIComponent(query);
  return false;
}