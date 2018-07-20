export default function run() {
  window.addEventListener('load', () => {
    const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`
    register(swUrl)
  })

  const register = swUrl => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register(swUrl)
        .then(function(reg) {
          // registration worked
          console.log('Registration succeeded. Scope is ' + reg.scope)
        })
        .catch(function(error) {
          // registration failed
          console.log('Registration failed with ' + error)
        })
    }
  }
}
