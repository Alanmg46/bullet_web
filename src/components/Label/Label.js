import React from 'react';

export default function Label (props) {
  const style = {
    color: props.invalidValue ? '#d50000' : '#444444',
    fontWeight: 'bold',
    fontSize: 25,
  };

  return <label style={style} htmlFor={props.htmlFor}>{props.text}</label>;
}
