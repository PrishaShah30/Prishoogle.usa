const searchBox = document.getElementById('search-box');
const dropdownOptions = document.getElementById('dropdown-options');
const micIcon = document.getElementById('mic');
const bookCallIcon = document.getElementById('book-call');
const headerAbout = document.querySelector('.header-about');
const sections = document.querySelectorAll('.content-section');
const searchSection = document.getElementById('search');

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
  // Hide all sections except search on load
  sections.forEach(section => {
    section.style.display = 'none';
  });
  searchSection.style.display = 'flex';
  headerAbout.textContent = 'About';
});

// Show/Hide Dropdown Menu
searchBox.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdownOptions.style.display = dropdownOptions.style.display === 'block' ? 'none' : 'block';
});

// Hide Dropdown When Clicking Outside
document.addEventListener('click', (e) => {
  if (!searchBox.contains(e.target)) {
    dropdownOptions.style.display = 'none';
  }
});

// Function to Show Section
function showSection(sectionId) {
  // First hide search section with fade out
  searchSection.style.opacity = '0';
  searchSection.style.transition = 'opacity 0.3s ease';
  
  setTimeout(() => {
    // Hide search and all content sections
    searchSection.style.display = 'none';
    sections.forEach(section => {
      section.style.display = 'none';
    });

    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.style.display = 'block';
      targetSection.style.opacity = '0';
      
      // Trigger reflow
      void targetSection.offsetWidth;
      
      // Fade in the target section
      targetSection.style.opacity = '1';
      targetSection.style.transition = 'opacity 0.3s ease';
    }

    // Update header text and behavior
    headerAbout.textContent = 'Home';
    headerAbout.setAttribute('href', '#');
    
    // Hide dropdown
    dropdownOptions.style.display = 'none';
  }, 300);
}

// Function to Return to Search
function returnToSearch() {
  // Fade out current section
  const currentSection = Array.from(sections).find(section => section.style.display === 'block');
  if (currentSection) {
    currentSection.style.opacity = '0';
  }

  setTimeout(() => {
    // Hide all sections
    sections.forEach(section => {
      section.style.display = 'none';
    });

    // Show and fade in search section
    searchSection.style.display = 'flex';
    searchSection.style.opacity = '0';
    
    // Trigger reflow
    void searchSection.offsetWidth;
    
    // Fade in
    searchSection.style.opacity = '1';
    headerAbout.textContent = 'About';
  }, 300);
}

// Navigation Event Listeners
document.getElementById('nav-about')?.addEventListener('click', () => showSection('about'));
document.getElementById('nav-experience')?.addEventListener('click', () => showSection('experience'));
document.getElementById('nav-leadership')?.addEventListener('click', () => showSection('leadership'));

// Header Navigation
headerAbout.addEventListener('click', (e) => {
  e.preventDefault();
  if (headerAbout.textContent === 'Home') {
    returnToSearch();
  } else {
    showSection('about');
  }
});

// Icon Click Handlers
micIcon.addEventListener('click', () => {
  alert("I’m just a call away to discuss how I can contribute to your team. [8628465011]");
});

bookCallIcon.addEventListener('click', () => {
  alert('Your next problem-solver awaits – drop me an email![shah2004prisha@gmail.com]');
});

// Disable wheel-based navigation as it can be disorienting
document.querySelectorAll('section').forEach(section => {
  section.addEventListener('wheel', (e) => {
    e.stopPropagation();
  });
});

// Change opacity or size of clouds dynamically based on user interaction
document.querySelectorAll(".cloud").forEach((cloud, index) => {
  cloud.addEventListener("mouseenter", () => {
    cloud.style.transform = "scale(1.2)";
  });
  cloud.addEventListener("mouseleave", () => {
    cloud.style.transform = "scale(1)";
  });
});

