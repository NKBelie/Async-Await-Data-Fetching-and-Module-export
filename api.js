export function fetchPosts() {

    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function(response) {
            return response.json();
        })
        .then(function(posts) {
            return posts;
        })
        .catch(function(error) {
            console.error("Error fetching posts:", error);
            return [];
        });
}