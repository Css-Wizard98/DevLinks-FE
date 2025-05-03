import { useState } from 'react';
import { Plus } from 'lucide-react';

// Airbnb-inspired Floating Action Button (FAB)
export default function FloatingActionButton({ onClick, text="Add Category" }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button onClick={onClick}
        className={`
          flex items-center
          h-16 
          ${isHovered ? 'pl-4 pr-6' : 'w-16'} 
          bg-[var(--color-primary)] 
          hover:bg-[color:var(--color-primary)]
          text-white 
          rounded-full
          shadow-lg 
          transition-all duration-900 ease-out
          focus:outline-none 
          focus:ring-2 
          focus:ring-offset-2 
          focus:ring-teal-500
          cursor-pointer
          ${isHovered ? '' : 'flex items-center justify-center'}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        aria-label="Add bookmark"
      >
        <div className={`flex items-center justify-center ${isHovered ? '' : 'w-full'}`}>
          <Plus
            size={24}
            className="shrink-0"
          />
        </div>

        <span
          className={`
            whitespace-nowrap
            ml-2
            overflow-hidden
            transition-opacity duration-400
            ${isHovered ? 'opacity-100 max-w-40' : 'opacity-0 max-w-0'}
          `}
        >
          {text}
        </span>
      </button>
    </div>
  );
}