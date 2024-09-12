document.addEventListener('DOMContentLoaded', function() {
    console.log('Versioning script is loaded and running');
    // Rest of the script...
});

document.addEventListener('DOMContentLoaded', function() {
    const versionDropdown = document.createElement('div');
    
    // Use backticks to define a multi-line template literal string
    versionDropdown.innerHTML = `
      <div class="version-dropdown">
        <label for="version-select">Version: </label>
        <select id="version-select" onchange="changeVersion(this.value)">
        </select>
      </div>
    `;  // Note: The innerHTML content is now enclosed in backticks.
    
    document.body.prepend(versionDropdown);  // Add the dropdown at the top of the page

    // Function to load versions.json and populate the dropdown
    fetch('/versions.json')
        .then(response => response.json())
        .then(versions => {
            const versionSelect = document.getElementById('version-select');
            const currentVersion = window.location.pathname.split('/')[1] || 'latest';

            versions.forEach(versionInfo => {
                const option = document.createElement('option');
                option.value = `/${versionInfo.version}/`;  // Set the URL to the version folder
                option.textContent = versionInfo.title;     // Display the version title
                if (versionInfo.aliases.includes('latest') && currentVersion === '') {
                    option.selected = true;
                } else if (versionInfo.version === currentVersion) {
                    option.selected = true;
                }
                versionSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error loading versions.json:', error));  // Catch any errors

    // Function to change the version when a new one is selected
    function changeVersion(version) {
        window.location.href = version;
    }
});