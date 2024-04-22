import React, { useState } from 'react';

const NightModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl p-5">
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Night Mode</span>
          <input 
            type="checkbox" 
            className="toggle toggle-primary" 
            checked={darkMode}
            onChange={toggleDarkMode} 
          />
        </label>
      </div>
    </div>
  );
};

export default NightModeToggle;