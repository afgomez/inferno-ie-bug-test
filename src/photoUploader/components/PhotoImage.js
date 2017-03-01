import React from 'react';

export default function PhotoImage({ file, id, sending }) {
  let className = "image";
  if (sending) {
    className += " sending";
  }

  return (
    <li className={className}>
      <img src={file.preview} alt={file.name} />
    </li>
  );
}
