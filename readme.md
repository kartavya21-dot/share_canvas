# 🎨 Real-Time Global Canvas

A real-time collaborative drawing application where multiple users can draw simultaneously on a shared canvas and see each other's strokes instantly.

---

## 🚀 Features

* 🌐 **Global Canvas** — No rooms, all users draw on the same canvas
* ⚡ **Real-Time Sync** — Instant drawing updates using WebSockets
* ✏️ **Pencil & Eraser Tool**
* 🧠 **Efficient Data Transfer** — Sends stroke data instead of full images
* 🔄 **Ephemeral State** — Canvas resets on refresh (no persistence)
* 👥 **Multi-User Interaction** — See others drawing live

---

## 🏗️ Tech Stack

### Frontend

* React
* HTML5 Canvas API
* Native WebSocket

### Backend

* FastAPI
* WebSockets

---

## 🧠 How It Works

Instead of sending the entire canvas or image data, this application sends **drawing instructions (strokes)** over WebSockets.

Each stroke contains:

* Current coordinates `(x, y)`
* Previous coordinates `(prevX, prevY)`
* Color and brush settings

### Flow:

1. User draws on canvas
2. Frontend captures stroke data
3. Data is sent via WebSocket to server
4. Server broadcasts to all connected clients
5. Other clients render the stroke

This makes the system:

* ⚡ Fast
* 📦 Lightweight
* 📈 Scalable

---

## 📁 Project Structure

```
/frontend
  /src
    /Canvas
      Canvas.jsx
    /hooks
      useSocket.js
    App.jsx

/backend
  main.py
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/realtime-canvas.git
cd realtime-canvas
```

---

### 2️⃣ Backend Setup (FastAPI)

```bash
cd backend
pip install fastapi uvicorn
uvicorn main:app --reload
```

Server will run on:

```
http://localhost:8000
```

---

### 3️⃣ Frontend Setup (React)

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 🔌 WebSocket Endpoint

```
ws://localhost:8000/ws
```

---

## 🧪 Usage

1. Open the app in multiple browser tabs
2. Start drawing in one tab
3. Watch strokes appear in real-time in other tabs

---

## ⚠️ Design Decisions

* ❌ No database used
* ❌ No canvas persistence
* ✅ Pure real-time streaming system

This ensures:

* Low latency
* Simpler architecture
* Focus on real-time communication

---

## 💡 Learnings

This project demonstrates:

* Real-time systems design
* WebSocket communication
* Canvas rendering techniques
* Event-based architecture
* Efficient data streaming

---

## 🙌 Acknowledgement

Built as a learning project to explore real-time collaboration and system design concepts.
