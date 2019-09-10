module.exports = {
    apps: [{
        name: 'api',
        script: 'index.js', // Your entry point
        instances: 1,
        watch: ["server", "client"],
        // Delay between restart
        watch_delay: 1000,
    }]
}