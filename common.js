// common.js - shared utility functions for enhanced project
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));

function fetchMoviesData(){
  // For this frontend-only build, movies are embedded here.
  return [
    {id:'kaththi', title:'Kaththi', genre:'Action', duration:'2h20m', director:'A R Murugadas', price:180, poster:''},
    {id:'mersal', title:'Mersal', genre:'Drama', duration:'2h35m', director:'Atlee', price:200, poster:''},
    {id:'got', title:'Game of Thrones', genre:'Historical', duration:'50min', director:'D.Benioff', price:150, poster:''},
    {id:'inception', title:'Inception', genre:'Sci-Fi', duration:'2h28m', director:'Christopher Nolan', price:220, poster:''},
    {id:'parasite', title:'Parasite', genre:'Thriller', duration:'2h12m', director:'Bong Joon-ho', price:190, poster:''},
    {id:'goat', title:'GOAT', genre:'Action', duration:'2h10m', director:'Venkat Prabhu', price:160, poster:''},
    {id:'toy', title:'Toy Story', genre:'Animation', duration:'1h30m', director:'John Lasseter', price:140, poster:''},
    {id:'avatar2', title:'Avatar: The Way of Water', genre:'Sci-Fi', duration:'3h12m', director:'James Cameron', price:250, poster:''}
  ];
}

function saveBooking(booking){
  const all = JSON.parse(localStorage.getItem('bookings')||'[]');
  all.push(booking);
  localStorage.setItem('bookings', JSON.stringify(all));
}

function getBookings(){ return JSON.parse(localStorage.getItem('bookings')||'[]'); }

function formatCurrency(v){ return '₹'+v; }
