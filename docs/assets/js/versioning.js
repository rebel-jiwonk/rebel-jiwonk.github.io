// Create a versioning dropdown
const versionDropdown = document.createElement('div');
versionDropdown.innerHTML = `
  <div class="version-dropdown">
    <label for="version-select">Version: </label>
    <select id="version-select" onchange="changeVersion(this.value)">
      <!-- Versions will be dynamically inserted here -->
    </select>
  </div>
`;
document.body.prepend(versionDropdown);  // Add it to the top of the page

// Function to load versions.json and populate the dropdown
fetch('/versions.json')
  .then(response => response.json())
  .then(versions => {
    const versionSelect = document.getElementById('version-select');
    const currentVersion = window.location.pathname.split('/')[1] || 'latest';

    versions.forEach(version => {
      const option = document.createElement('option');
      option.value = `/${version}/`;
      option.textContent = version;
      if (version === currentVersion) {
        option.selected = true;
      }
      versionSelect.appendChild(option);
    });
  });

// Function to change the version when a new version is selected
function changeVersion(version) {
  window.location.href = version;
}
