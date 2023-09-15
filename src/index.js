import ReactDOM from 'react-dom/client';
import React from 'react';
import { showToast } from './CrunchyToast/toastUtil';

function App() {
  return (
    <div>
      <button
        onClick={() => showToast('This is a toast message', 'success')}
      >
        Show Success Toast
      </button>
      <div className="toast-container">
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <App />
</>);



