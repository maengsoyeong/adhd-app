import { WebSocketServer } from 'ws';
import { createServer } from 'http';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

// Figma plugin port
const PORT = 3055;

// Store connected clients
const clients = new Set();

wss.on('connection', (ws) => {
    console.log('New client connected');
    clients.add(ws);

    // Handle incoming messages
    ws.on('message', (message) => {
        try {
            const data = JSON.parse(message.toString());
            console.log('Received:', data);
            
            // Broadcast message to all connected clients
            clients.forEach(client => {
                if (client !== ws && client.readyState === WebSocketServer.OPEN) {
                    client.send(JSON.stringify(data));
                }
            });
        } catch (error) {
            console.error('Error processing message:', error);
        }
    });

    // Handle client disconnection
    ws.on('close', () => {
        console.log('Client disconnected');
        clients.delete(ws);
    });

    // Send welcome message
    ws.send(JSON.stringify({
        type: 'connection',
        message: 'Connected to Figma MCP server'
    }));
});

// Error handling
wss.on('error', (error) => {
    console.error('WebSocket server error:', error);
});

// Start server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 