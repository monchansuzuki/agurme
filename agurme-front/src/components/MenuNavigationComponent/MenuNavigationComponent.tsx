import React, {useState} from 'react';
import * as style from './MenuNavigationComponentstyle.module.sass'

export type MenuNavigationComponentProps = {
  onNavigate: (value: number) => void;
  className?: {}
}

export default function MenuNavigationComponent(props: MenuNavigationComponentProps) {

  const [activeLink, setActiveLink] = useState<number>(1);

  const handleNavigation = (value: number) => {
    props.onNavigate(value);
    setActiveLink(value);
  };

  return (
    <ul className={`${style.container} ${props.className}`}>
      <li className={`${style.link} ${activeLink !== 1 || style.activeLink}`} onClick={() => handleNavigation(1)}>Pizza</li>
      <li className={`${style.link} ${activeLink !== 2 || style.activeLink}`} onClick={() => handleNavigation(2)}>Pasta</li>
      <li className={`${style.link} ${activeLink !== 3 || style.activeLink}`} onClick={() => handleNavigation(3)}>Second Piatto</li>
      <li className={`${style.link} ${activeLink !== 4 || style.activeLink}`} onClick={() => handleNavigation(4)}>AntiPasti</li>
      <li className={`${style.link} ${activeLink !== 5 || style.activeLink}`} onClick={() => handleNavigation(5)}>Insalate</li>
      <li className={`${style.link} ${activeLink !== 6 || style.activeLink}`} onClick={() => handleNavigation(6)}>Dolce</li>
    </ul>
  );
}

