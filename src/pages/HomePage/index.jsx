import { MenuItem } from '../../components/MenuItem';
import './style.css';
import { useState } from 'react';

export const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState('Domů');

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
            <MenuItem onSelect={setMenuOpen} text="Domů" page={setPageTitle} />
            <MenuItem
              onSelect={setMenuOpen}
              page={setPageTitle}
              text="Naše nabídka"
            />
            <MenuItem
              onSelect={setMenuOpen}
              page={setPageTitle}
              text="Náš tým"
            />
            <MenuItem onSelect={setMenuOpen} page={setPageTitle} text="Blog" />
            <MenuItem
              onSelect={setMenuOpen}
              page={setPageTitle}
              text="Kontakt"
            />
          </div>
        </div>
      </header>
      <main>
        <h1>{pageTitle}</h1>
      </main>
    </>
  );
};
