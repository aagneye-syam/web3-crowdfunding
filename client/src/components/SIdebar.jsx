import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {dashboard, logo, sun} from '../assets';
import {navlinks} from '../constants';

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');

  return (
    <div>
      Sidebar
    </div>
  )
}

export default Sidebar
