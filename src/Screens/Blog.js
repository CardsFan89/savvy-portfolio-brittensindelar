import { html } from 'lit-html';

export default function Blog(state){
    return state
        .posts
        .map((post) => `<p>${post.title}</p>`)
        .join('');
}