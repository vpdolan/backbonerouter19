import $ from 'jquery';



const APP_ID = 'HOt6uGKtE3KMKJhgzlRQDIntoKNiwhhM8h2buFL9';
const API_KEY = 'dIcHQTRg1e6MI5AaF2bUkwALpaYsCUxt9sg5l8LN';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});
