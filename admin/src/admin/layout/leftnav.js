import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';

function Leftnav(props) {
    const [subnavOn, subnavChange] = useState(true);
    return (
      <div className='left_nav'>
        <p className='title'  onClick={() => {
            //switchOn의 값을 계속해서 반대로 전해줌.
            subnavChange(!subnavOn);
          }}>{props.name}</p>
        <ul className={`${subnavOn ? "active" : ""}`}>
          {props.sub.map((subTitle, index) => (
            <li key={index} className={index == props.active ? 'active' : ""}>
              <Link to={subTitle[1]}>{subTitle[0]}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Leftnav;