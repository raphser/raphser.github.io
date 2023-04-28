// Get all the links on the header
const links = document.querySelectorAll('header a');

// Add a click event listener to each link
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // Prevent the default behavior of the link

    // Get the href attribute of the link and remove the # symbol
    const href = link.getAttribute('href').substring(1);

    // Find the element on the page with the same ID as the href value
    const section = document.getElementById(href);

    // Get the top position of the section
    const top = section.offsetTop;

    // Use window.scrollTo() to smoothly scroll to the top of the section
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  });
});
    