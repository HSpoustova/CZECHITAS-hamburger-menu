import './style.css';

export const MenuItem = ({ text, onSelect }) => {
  const handleSelectItem = () => {
    onSelect(false);
  };

  return (
    <a onClick={handleSelectItem} href="#" className="menu-item">
      {text}
    </a>
  );
};
