import { Palette, Trash2, Edit } from 'lucide-react';
import { useState } from 'react';

export default function CategoryCard({ 
  title = "Design",
  description = "Explore creative design resources and tools. Discover innovative approaches to enhance your projects."
}) {
  // Optional truncation state if description gets too long
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="relative max-w-md w-full bg-gray-100 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg min-h-48 max-h-96">
      {/* Card content */}
      <div className="p-6 flex flex-col h-full">
        {/* Header with icon and title */}
        <div className="flex items-start mb-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 via-red-500 to-teal-500 p-0.5 mr-4 shrink-0">
            <div className="bg-white rounded-full w-11 h-11 flex items-center justify-center">
              <Palette className="h-6 w-6 text-teal-500" />
            </div>
          </div>
          <div className="min-w-0"> {/* This helps with text overflow */}
            <h2 className="text-2xl font-bold text-gray-800 mb-1">{title}</h2>
            <p className="text-gray-600 line-clamp-3">{description}</p>
          </div>
        </div>
        
        {/* Additional content area (if needed) */}
        <div className="flex-grow py-2">
          {/* Optional content would go here */}
        </div>
        
        {/* Footer with action buttons */}
        <div className="flex justify-end mt-auto">
          <button className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors" aria-label="Edit">
            <Edit size={20} />
          </button>
          <button className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors ml-2" aria-label="Delete">
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}