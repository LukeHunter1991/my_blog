// Creates a blogList variable from the relevant Div in blog.html
const blogList = document.querySelector('#blog-list');

// Creates empty array for blogs to be stored.
let blogs = []

function renderBlogs() {

    // For loop will run for each object in the array blogs.
    for (let i = 0; i < blogs.length; i++) {

        // blog will now correspond to theobject at the current index in the blogs array.
        let blog = blogs[i];

        // Creates an empty section as a container for a n h3, p, and footer element.
        const section = document.createElement('section');
        blogList.appendChild(section);

        const h3 = document.createElement('h3')
        h3.textContent = blog.title;

        const p = document.createElement('p')
        p.textContent = blog.blogText;

        const footer = document.createElement('footer')
        footer.textContent = 'Made with ❤️ by ' + blog.username;

        // Appends the newly created elements with the current blogs data into the section.
        section.appendChild(h3);
        section.appendChild(p)
        section.appendChild(footer)
    }
}

// Function init to run first
function init() {
    // Get objects from local storage.
    const storedBlogs = JSON.parse(localStorage.getItem('blog'));

    // Check if null
    if (storedBlogs !== null) {
        blogs = storedBlogs;
    } 

    renderBlogs();
}

init();