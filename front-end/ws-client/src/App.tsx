import { useState } from 'react'
import useWebSocket from 'react-use-websocket';

import './App.css'

const WS_SERVER_URL = 'ws://127.0.0.1:8000';

function App() {

  useWebSocket(WS_SERVER_URL, {
    onOpen: () => { console.log('WebSocket connection is established.');}
  });

  return (
    <div>
      Hello WebSocket!
    </div>
  )
}

export default App
