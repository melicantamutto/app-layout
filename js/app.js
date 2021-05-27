const closeFilters = document.getElementById('close-filters')
const filterOptions = document.getElementById('filter-options')

const openFilters = () =>{
    filterOptions.style.display = 'block';
}

closeFilters.addEventListener('click', () =>{
    filterOptions.style.display = 'none';
})