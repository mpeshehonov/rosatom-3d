import React, {useState} from 'react';
import SockJsClient from 'react-stomp';

export const Socket = () => {
  const [message, setMessage] = useState(Array);

  return (
    <div>
      <SockJsClient
        url="https://ancient-reaches-63076.herokuapp.com/ws"
        topics={['/building']}
        onMessage={(msg) => {
          console.log(msg);
          setMessage(msg);
        }}
      />
      <p>{message.buildingName}</p>
      <table>
        {message.rooms &&
          message.rooms.map((room) => (
            <tr>
              <td>{room.roomId}</td>
              <td>{room.roomName}</td>
              <td>
                {room.sensors.map((sensor) => (
                  <tr>
                    <td>{sensor.sensorId}</td>
                    <td>{sensor.sensorName}</td>
                    <td>{sensor.sensorType}</td>
                  </tr>
                ))}
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Socket;

//https://ancient-reaches-63076.herokuapp.com/ Отправка данных
//data.json - Что приходит через websocket
