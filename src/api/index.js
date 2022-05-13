import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/'

export const fetchPosts = () => fetch(url +'posts').then((response) => response.json());

export const fetchUsers = () => fetch(url +'users').then((response) => response.json()) ;

export const fetchPostsBySearch = (searchQuery) => fetch(url +'posts?userId='+searchQuery).then((response) => response.json()) ;
