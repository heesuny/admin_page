import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function leftnav(props) {
    return (
      <div className='left_nav'>
        <p className='title'>{props.name}</p>
        <ul>
          {props.sub.map((subTitle, index) => (
            <li key={index} className={index == props.active ? 'active' : ""}>
              <Link to={subTitle[1]}>{subTitle[0]}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default leftnav;