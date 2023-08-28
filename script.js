
function delayedHello() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve("Hello, world!");
        }, 1000); // 1 second delay
      });
    }

    // Call the delayedHello function and update the content of the output div
    delayedHello()
      .then(result => {
        const outputDiv = document.getElementById('output');
        outputDiv.textContent = result;
      })
      .catch(error => {
        console.error('Promise rejected:', error);
      });