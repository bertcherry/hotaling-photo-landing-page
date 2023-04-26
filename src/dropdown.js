const activateDropdowns = () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropdownParent = dropdown.parentElement;
        dropdownParent.onmouseover = showDropdown;
        dropdownParent.onfocus = showDropdown;
        dropdownParent.onmouseout = hideDropdown;
        dropdownParent.onblur = hideDropdown;
    });
}

function showDropdown(e) {
    const element = e.currentTarget.querySelector(':nth-child(2)');
    element.classList.add('visible');
}

function hideDropdown(e) {
    const element = e.currentTarget.querySelector(':nth-child(2)');
    element.classList.remove('visible');
}

export { activateDropdowns };