const terminalScreen = document.getElementById('terminalScreen');
const commandInput = document.getElementById('commandInput');

commandInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const command = commandInput.value.trim();
        if (command !== '') {
            const output = document.createElement('p');
            output.textContent = `$ ${command}`;
            
            // Handle specific commands
            let response;
            if (command.toLowerCase() === '4') {
                response = 'True';
            } else {
                response = `False`;
            }
            
            const outputResponse = document.createElement('p');
            outputResponse.textContent = response;
            terminalScreen.appendChild(outputResponse);
            
            output.style.animation = 'terminal-animation 0.3s ease-out';
            outputResponse.style.animation = 'terminal-animation 0.3s ease-out';
            
            commandInput.value = '';
            terminalScreen.scrollTop = terminalScreen.scrollHeight;
        }
    }
});
