import React, { useEffect, useState } from 'react';
import './CrunchyToast.css';

const TOAST_TYPE_EMOJI = {
  'info': ['ℹ️', '📢', '📣', '📝', '📌'],
  'success': ['✅', '✔️', '👍'],
  'warning': ['⚠️', '🚧', '🔔'],
  'alert': ['🚨', '🛑', '🔴'],
}

const getRandomEmoji = (type) => {
  if (!TOAST_TYPE_EMOJI[type]) {
    return '📢';
  }

  const emojiList = TOAST_TYPE_EMOJI[type];
  const randomIndex = Math.floor(Math.random() * emojiList.length);
  return emojiList[randomIndex];
}

const CrunchyToast = ({ message, type, duration }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  return (
    isVisible &&
    <div className={`crunchy-toast ${type} ${isVisible ? 'show' : 'hide'}`}>
      {getRandomEmoji(type)} {message}
    </div>
  );
};

export default CrunchyToast;
