const blogList = document.querySelector('#blog-list');
let blogs = []

function renderBlogs() {
    blogList.innerHTML = '';

    for (let i = 0; i < blogs.length; i++) {
        let blog = blogs[i];

        const section = document.createElement('section');
        blogList.appendChild(section);

        const h3 = document.createElement('h3')
        h3.textContent = blog.title;

        const p = document.createElement('p')
        p.textContent = blog.blogText;

        const footer = document.createElement('footer')
        footer.textContent = 'Made with ❤️ by ' + blog.username;

        section.appendChild(h3);
        section.appendChild(p)
        section.appendChild(footer)
    }
}


function init() {
    const storedBlogs = JSON.parse(localStorage.getItem('blog'));

    if (storedBlogs !== null) {
        blogs = storedBlogs;
    } 

    renderBlogs();
}

init();