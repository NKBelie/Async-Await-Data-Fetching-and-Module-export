function fetchPosts(){

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(response) {
        return response.json();
    })
    .then(function(posts) {
        console.log(posts);
    })
    .catch(function(error) {
        console.error("Error fetching posts:", error);
        return [];
    })
}
fetchPosts();