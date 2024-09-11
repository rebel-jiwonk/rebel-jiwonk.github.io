document.addEventListener('DOMContentLoaded', function() {
    const versionDropdown = document.createElement('div');
    versionDropdown.innerHTML = `
      <div class="version-dropdown">
        <label for="version-select">Version: </label>
        <select id="version-select" onchange="changeVersion(this.value)">
          <!-- Options will be inserted here -->
        </select>
      </div>
    `;
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
        });

    // Function to change the version when a new one is selected
    function changeVersion(version) {
        window.location.href = version;
    }
});