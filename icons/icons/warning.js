import React from 'react';

export const Warning = ({ width = 24, height = 24, color = '#000000' }) => (
  <svg fill={color} width={`${width}px`} height={`${height}px`} viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
    <path d="M960 0c530.193 0 960 429.807 960 960s-429.807 960-960 960S0 1490.193 0 960 429.807 0 960 0Zm-9.838 1342.685c-84.47 0-153.19 68.721-153.19 153.19 0 84.47 68.72 153.192 153.19 153.192s153.19-68.721 153.19-153.191-68.72-153.19-153.19-153.19ZM1153.658 320H746.667l99.118 898.623h208.755L1153.658 320Z" fillRule="evenodd"/>
  </svg>
);