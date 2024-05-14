  // Función para contar las categorías seleccionadas
  function countSelectedCategories() {
    const selectedCategories = document.querySelectorAll('.selected');
    return selectedCategories.length;
  }

  // Función para actualizar el texto del botón "Aplicar filtros"
  function updateApplyFiltersButton() {
    const selectedCategories = countSelectedCategories();
    const applyFiltersButton = document.getElementById('applyFilters');
    applyFiltersButton.textContent = `Aplicar filtros (${selectedCategories})`;
  }

  // Función para manejar el clic en una categoría
  function toggleCategory() {
    this.classList.toggle('selected'); // Cambia el estilo de la categoría
    updateApplyFiltersButton(); // Actualiza el texto del botón
  }

  // Agrega el evento de clic a todas las categorías
  const categories = document.querySelectorAll('.category');
  categories.forEach(category => {
    category.addEventListener('click', toggleCategory);
  });
  