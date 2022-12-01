import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Sidebar.scss';

export default function Sidebar() {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  const sidebarItems = [
    { icon: <i className="fa-solid fa-house" />, path: '/', title: 'Home', bgColor: '#838383' },
    { icon: <i class="fa-solid fa-users"></i>, path: '/members', title: 'Members', bgColor: '#FBBC05' },
    // { icon: <i class="fa-solid fa-sitemap"></i>, path: '/product', title: 'Product', bgColor: '#34A853' },
    { icon: <i class="fa-solid fa-calendar-check"></i>, path: '/events', title: 'Events', bgColor: '#EA4335' },
    { icon: <i class="fa fa-comment"></i>, path: '/contact', title: 'Contact', bgColor: '#4285F4]' },
  ];

  useEffect(() => {
    const activeItem = sidebarItems.findIndex(
      (item) => window.location.pathname.split('/')[1] === item.path.split('/')[1],
    );
    setActiveIndex(activeItem);
  }, [location]);

  const activeStyle = (index, color) => {
    return index === activeIndex ? `${color}` : '';
  };

  const renderNavBar = () => {
    return sidebarItems.map((item, index) => {
      return (
        <li key={index} className={`list rounded-full`}>
          <NavLink className="navLink" to={`${item.path}`}>
            <span
              style={{
                backgroundColor: `${activeStyle(index, item.bgColor)}`,
                color: `${activeStyle(index, 'white')}`,
              }}
              className={`icon duration-200 `}
            >
              {item.icon}
            </span>
            <span className="title">{item.title}</span>
          </NavLink>
        </li>
      );
    });
  };

  return (
    <aside>
      <div className="navigation">
        <ul>{renderNavBar()}</ul>
      </div>
    </aside>
  );
}
