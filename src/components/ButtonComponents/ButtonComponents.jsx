import React from 'react';


export const ButtonComponent = ({clickEvent, label}) => {
  return (
    <button onClick={clickEvent}>{label}</button>
  );
}


