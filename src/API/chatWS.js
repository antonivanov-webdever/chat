const wsConnect = async () => {
    const ws = await new WebSocket('wss://ws.qexsystems.ru');
    console.log(ws)
    ws.addEventListener('message', e => {
        console.log(e)
        console.log(e.data)
        return e.data;
    })
}

export default wsConnect;