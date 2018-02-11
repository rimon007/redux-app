//Get posts from wordpress

export const fetchPosts = () => fetch('https://jesseweigel.com/wp-json/wp/v2/posts').then( data => data.json() )