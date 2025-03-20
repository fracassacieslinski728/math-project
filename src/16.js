// Example 1: Basic script to log messages to console
console.log("Hello, World!");

// Example 2: Fetching data from an API using XMLHttpRequest (async/await syntax)
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.log(`Data received: ${data}`);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Example 3: Using a library like jQuery for AJAX requests
$.getJSON('https://api.example.com/data', function(data) {
    console.log("AJAX Data:", data);
});

// Example 4: Implementing state management using Vuex (for simplicity, we're only showing the basic code)
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    // Add your own custom store configuration here
})

store.dispatch('fetchData')
