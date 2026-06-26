function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    const allDropdowns = document.querySelectorAll('.dropdown-options');

    // Close all other dropdowns
    allDropdowns.forEach(d => {
        if (d.id !== id) d.classList.remove('show');
    });

    dropdown.classList.toggle('show');

    // Focus on search input when dropdown opens
    if (dropdown.classList.contains('show')) {
        const searchInput = dropdown.querySelector('.dropdown-search');
        setTimeout(() => searchInput.focus(), 100);
    }
}

function selectUser(userName) {
    document.getElementById('userSelect').innerHTML = `<option value="${userName}">${userName}</option>`;
    document.getElementById('userDropdown').classList.remove('show');

    // Update user avatar
    const avatar = document.querySelector('.user-avatar');
    avatar.textContent = userName.split(' ').map(n => n[0]).join('').toUpperCase();
}

function selectRole(roleName) {
    document.getElementById('roleSelect').innerHTML = `<option value="${roleName}">${roleName}</option>`;
    document.getElementById('roleDropdown').classList.remove('show');
}

function filterOptions(dropdownId, searchId) {
    const searchTerm = document.getElementById(searchId).value.toLowerCase();
    const dropdown = document.getElementById(dropdownId);
    const options = dropdown.querySelectorAll('.dropdown-option');

    options.forEach(option => {
        const text = option.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            option.classList.remove('hidden');
        } else {
            option.classList.add('hidden');
        }
    });
}

// Close dropdowns when clicking outside
document.addEventListener('click', function (event) {
    if (!event.target.closest('.form-group')) {
        document.querySelectorAll('.dropdown-options').forEach(dropdown => {
            dropdown.classList.remove('show');
        });
    }
});

// Prevent dropdown from closing when clicking on search input
document.querySelectorAll('.dropdown-search').forEach(input => {
    input.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});

// Add hover effects to role badges
document.querySelectorAll('.role-badge').forEach(badge => {
    badge.addEventListener('click', function () {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'translateY(-2px)';
        }, 100);
    });
});