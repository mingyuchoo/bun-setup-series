import { useEffect, useCallback, useState } from 'react'
import useWebSocket, { ReadyState } from 'react-use-websocket';

const WS_SERVER_URL = 'ws://127.0.0.1:3000';

function App() {

  const [socketUrl, setSocketUrl] = useState(WS_SERVER_URL);
  const [messageHistory, setMessageHistory] = useState([]);
  const {
    sendMessage,
    lastMessage,
    readyState,
    } = useWebSocket(socketUrl, {
    onOpen: () => console.log('WebSocket connection is established.'),
    shouldReconnect: () => true,
  });

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage, setMessageHistory]);

  const onClickHandler = useCallback(() => sendMessage('Hello'), []);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  return (
    <>
      {/* Container */}
      <div className={"max-w-screen-xl mx-auto px-4 py-4"}>
        {/* Grid wrapper */}
        <div className={"-mx-4 flex flex-wrap"}>
          {/* Grid column */}
          <div className={"w-full p-4 sm:w-1/2 lg:w-1/3"}>
            <div className={"px-10 py-12 bg-white rounded-lg shadow-lg"}>
              <button
                className={"py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700"}
                onClick={onClickHandler}
                disabled={readyState !== ReadyState.OPEN}
              >
                Send
              </button>
              <br />
              <span>
                The WebSocket is currently {connectionStatus}
              </span>
              {lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
              <ul>
                {messageHistory.map((message, index) => (
                  <span key={index}>{message ? message.data : null}</span>
                ))}
              </ul>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
