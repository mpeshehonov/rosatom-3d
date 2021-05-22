import React, {useState} from 'react';
import SockJsClient from 'react-stomp';

export const Socket = () => {
    const [message, setMessage] = useState(Array)
    return (
        <div>
            <SockJsClient url='https://ancient-reaches-63076.herokuapp.com/ws' topics={['/building']}
                          onMessage={(msg) => {
                              console.log(msg)
                              setMessage(msg)
                          }}/>
            {
                <p>{message.buildingName}</p>
            }
        </div>
    )
}

export default Socket

//https://ancient-reaches-63076.herokuapp.com/ Отправка данных
//data.json - Что приходит через websocket