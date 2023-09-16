import React from 'react';
import ReactDOM from 'react-dom/client';
import CrunchyToast from './CrunchyToast.jsx';

const createToastContainer = () => {
  let container = document.getElementById('toast-container');

  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
  return container;
};

export const showToast = (message, type, duration = 3000) => {
  const toastContainer = createToastContainer();

  const toastElement = document.createElement('div');
  toastContainer.appendChild(toastElement);

  const root = ReactDOM.createRoot(toastElement);
  root.render(<CrunchyToast message={message} type={type} duration={duration} />);

  setTimeout(() => {
    removeToast(toastElement);
  }, duration);
};

const removeToast = (toastElement) => {
  const toastContainer = document.getElementById('toast-container');
  if (toastContainer && toastElement) {
    toastContainer.removeChild(toastElement);
  }
};
