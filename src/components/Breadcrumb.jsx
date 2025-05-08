import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  return (
    <div className='breadcrumb'>
      <div className='container'>
        <div className='breadcrumb-wrapper'>
          <h6>{title}</h6>
          <ul className='breadcrumb-inner'>
            <li className='breadcrumb-inner-item'>
              <Link
                to='/'
              >
                <i className='ph ph-house' />
                Home
              </Link>
            </li>
            <li className='breadcrumb-inner'>
              <i className='ph ph-caret-right' />
            </li>
            <li className='breadcrumb-inner breadcrumb-inner-active'> {title} </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
