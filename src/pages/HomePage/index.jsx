import { MenuItem } from '../../components/MenuItem';
import './style.css';
import { useState } from 'react';

export const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <div className="menu">
          <button
            className="menu__btn"
            onClick={() => setMenuOpen(true)}
          ></button>
          <div
            className={menuOpen ? 'menu__items' : 'menu--closed menu__items'}
          >
            <MenuItem onSelect={setMenuOpen} text="Domů" />
            <MenuItem onSelect={setMenuOpen} text="Naše nabídka" />
            <MenuItem onSelect={setMenuOpen} text="Náš tým" />
            <MenuItem onSelect={setMenuOpen} text="Blog" />
            <MenuItem onSelect={setMenuOpen} text="Kontakt" />
          </div>
        </div>
      </header>
      <main>
        <h1>Domů</h1>
      </main>
    </>
  );
};
