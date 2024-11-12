document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message === '') return;

        chatInput.value = '';

        // Add message to the chat box (simulated user message)
        chatBox.innerHTML += `<div><strong>You:</strong> ${message}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;

        // Simulate sending message to the server
        fetch('/api/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        })
        .then(response => response.json())
        .then(data => {
            // Simulated response handling
            if (data.reply) {
                chatBox.innerHTML += `<div><strong>Server:</strong> ${data.reply}</div>`;
                chatBox.scrollTop = chatBox.scrollHeight;
            }
        })
        .catch(err => console.error('Error:', err));
    }

    function pollServer() {
        fetch('/api/poll')
            .then(response => response.json())
            .then(data => {
                if (data.messages) {
                    data.messages.forEach(msg => {
                        chatBox.innerHTML += `<div><strong>Server:</strong> ${msg}</div>`;
                        chatBox.scrollTop = chatBox.scrollHeight;
                    });
                }
                // Continue polling
                setTimeout(pollServer, 3000); // Poll every 3 seconds
            })
            .catch(err => {
                console.error('Polling error:', err);
                setTimeout(pollServer, 5000); // Retry after 5 seconds on failure
            });
    }

    // Start polling
    pollServer();
});
