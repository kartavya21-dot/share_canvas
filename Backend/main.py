from fastapi import FastAPI, WebSocket
from typing import List

app = FastAPI()
clients: List[WebSocket] = []

@app.websocket("/ws")
async def websocket_endpoint(ws: WebSocket):
    await ws.accept()
    clients.append(ws)

    try:
        while True:
            data = await ws.receive_json()

            # broadcast to all clients
            for client in clients:
                if client != ws:
                    await client.send_json(data)

    except:
        clients.remove(ws)