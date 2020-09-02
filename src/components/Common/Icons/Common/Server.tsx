import React from 'react'

interface IServerIcon {
  color: string
}

const Server: React.FC<IServerIcon> = ({ color = '#000000' }) => {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
	 viewBox="0 0 371.005 371.005" fill={color}>
  <g>
    <g>
      <path d="M281.016,14.241C255.627,5.058,221.703,0,185.503,0S115.379,5.061,89.99,14.248c-22.174,8.026-35.412,18.5-35.412,28.029
        c0,9.529,13.238,20.001,35.413,28.023h0c25.388,9.188,59.309,14.249,95.512,14.249s70.124-5.061,95.513-14.249
        c22.174-8.026,35.412-18.5,35.412-28.03C316.428,32.74,303.19,22.27,281.016,14.241z"/>
    </g>
  </g>
  <g>
    <g>
      <path d="M185.503,291.078c-51.314,0-105-10.602-131-30.684v68.332c0,9.532,13.283,20.012,35.454,28.035
        c25.382,9.184,59.351,14.242,95.565,14.242c21.305,0.079,42.571-1.825,63.523-5.686c39.697-7.617,67.458-22.663,67.458-36.591
        v-68.332C290.503,280.476,236.817,291.078,185.503,291.078z M208.503,337.5h-46c-4.418,0-8-3.582-8-8s3.582-8,8-8h46
        c4.418,0,8,3.582,8,8S212.921,337.5,208.503,337.5z"/>
    </g>
  </g>
  <g>
    <g>
      <path d="M185.503,195.814c-51.314,0-105-10.601-131-30.683V232.8c0,9.532,13.283,20.012,35.454,28.035
        c25.382,9.185,59.351,14.242,95.565,14.242s70.154-5.057,95.536-14.242c22.171-8.022,35.445-18.502,35.445-28.035v-67.67
        C290.503,185.212,236.817,195.814,185.503,195.814z M208.503,240.5h-46c-4.418,0-8-3.582-8-8s3.582-8,8-8h46c4.418,0,8,3.582,8,8
        S212.921,240.5,208.503,240.5z"/>
    </g>
  </g>
  <g>
    <g>
      <path d="M185.503,100.553c-51.314,0-105-10.603-131-30.685v67.67c0,9.532,13.283,20.013,35.454,28.035
        c25.382,9.185,59.351,14.242,95.565,14.242s70.154-5.057,95.536-14.242c22.171-8.022,35.445-18.503,35.445-28.035v-67.67
        C290.503,89.95,236.817,100.553,185.503,100.553z M208.503,146.5h-46c-4.418,0-8-3.582-8-8s3.582-8,8-8h46c4.418,0,8,3.582,8,8
        S212.921,146.5,208.503,146.5z"/>
    </g>
  </g>
</svg>
  )
}

export default Server
