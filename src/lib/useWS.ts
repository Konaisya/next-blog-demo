import { useEffect, useRef, useState, useCallback } from 'react'

export default function useWebSocket(url: string) {
  const ws = useRef<WebSocket | null>(null)
  const [lastMessage, setLastMessage] = useState<string | null>(null)

  useEffect(() => {
    ws.current = new WebSocket(url)

    ws.current.onmessage = (e) => setLastMessage(e.data)
    ws.current.onclose = () => console.log('WebSocket закрыт')
    ws.current.onerror = (err) => console.error('WS ошибка', err)

    return () => ws.current?.close()
  }, [url])

  const sendMessage = useCallback((msg: string) => {
    if (ws.current?.readyState === WebSocket.OPEN) {
      ws.current.send(msg)
    } else {
      console.warn('WS не открыт, сообщение не отправлено')
    }
  }, [])

  return { sendMessage, lastMessage }
}
