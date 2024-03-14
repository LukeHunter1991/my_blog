// Collects username, title, and blog text from the form as a variable
const usernameEl = document.querySelector('#username');
const titleEl = document.querySelector('#title');
const blogTextEl = document.querySelector('#blog-text');
// Collects the submit button from the form as a variable
const submitBtn = document.querySelector('#submit');
// Collects the issue element from the form as a variable. This will be empty until an error is triggered.
const issueEL = document.querySelector("#issue")

// So that memory is persistant, array data will be collected from local storage. If no data in local storage, creates blank array.
let blogCollection = JSON.parse(localStorage.getItem('blog')) || [];

// Event listener is triggered when the submit button is clicked.
submitBtn.addEventListener('click', function(event) {
    //preventDefault will prevent the default behavior for this event
    event.preventDefault();

    // Checks if any field in the form is left blank. If blank, error text is pushed to the issue element.
    if (usernameEl.value === ""|| titleEl.value === ""|| blogTextEl.value === "") {
        issueEL.textContent = 'Please provide a username, title, and some blog text'
    } else {

    // Creates an object witht he data from the form.
    const blogPost = {
        username: usernameEl.value,
        title: titleEl.value,
        blogText: blogTextEl.value
    }


    // Pushes new object into array.
    blogCollection.push(blogPost);

    // Saves array to local storage.
    localStorage.setItem('blog', JSON.stringify(blogCollection));

    // Used to navigate to the blog page.
    window.location.replace("blog.html");
}
});