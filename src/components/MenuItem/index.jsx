import './style.css';

export const MenuItem = ({ text, onSelect, page }) => {
  const handleSelectItem = () => {
    onSelect(false);
    page(text);
  };

  return (
    <a onClick={handleSelectItem} href="#" className="menu-item">
      {text}
    </a>
  );
};
