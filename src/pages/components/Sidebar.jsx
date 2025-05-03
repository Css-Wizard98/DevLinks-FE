import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Bookmark,
  FolderOpen,
  Folder,
  Home,
  Star,
  Clock,
} from "lucide-react";

const Sidebar = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeRoute, setActiveRoute] = useState("home");
  const [expandedFolders, setExpandedFolders] = useState(["work", "personal"]);

  const toggleFolder = (folderId) => {
    if (expandedFolders.includes(folderId)) {
      setExpandedFolders(expandedFolders.filter((id) => id !== folderId));
    } else {
      setExpandedFolders([...expandedFolders, folderId]);
    }
  };

  const handleRouteChange = (route) => {
      setActiveRoute(route);
  };

  // Sample folder structure
  const folders = [
    {
      id: "work",
      name: "Work", icon: <Folder size={18} />,
      openIcon: <FolderOpen size={18} />,
      subfolders: [
        { id: "work-design", name: "Design Resources", icon: <Bookmark size={16}/> },
        { id: "work-docs", name: "Documentation", icon: <Bookmark size={16}/> }
      ]
    },
    {
      id: "personal",
      name: "Personal", icon: <Folder size={18} />,
      openIcon: <FolderOpen size={18} />,
      subfolders: [
        { id: "personal-recipes", name: "Recipes", icon: <Bookmark size={16}/> },
        { id: "personal-travel", name: "Travel", icon: <Bookmark size={16}/> }
      ]
    },
    {
      id: "learning",
      name: "Learning", icon: <Folder size={18} />,
      openIcon: <FolderOpen size={18} />,
      subfolders: [
        { id: "learning-courses", name: "Courses", icon: <Bookmark size={16}/> },
        { id: "learning-tutorials", name: "Tutorials", icon: <Bookmark size={16}/> }
      ]
    }
  ];

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <aside
      className={`bg-gray-100 border-r border-gray-200 flex flex-col transition-all duration-300 relative ${isSidebarCollapsed ? "w-8" : "w-64"}`}
    >
      {/* Sidebar collapse button on right edge */}
      <button
        onClick={toggleSidebar}
        className="absolute right-0 bottom-[20%] z-10 bg-white border border-gray-200 shadow-sm hover:bg-gray-100 transition-all duration-300"
        style={{ padding: "0.4rem", transform: isSidebarCollapsed ? "translateX(50%)" : "translateX(0)", borderRadius: "0" }}
      >
        {isSidebarCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      {/* Sidebar Content - Only shown when expanded */}
      {!isSidebarCollapsed && (
        <div className="flex-1 overflow-y-auto py-4 pt-[5rem]">
          {/* Main Navigation */}
          <nav>
            <ul className='ml-2'>
              <li>
                <button
                  onClick={() => handleRouteChange("home")}
                  className={`flex items-center w-full  px-4 py-2 mb-1 ${activeRoute === "home"
                    ? "bg-rose-100 text-rose-700 font-medium"
                    : "hover:bg-gray-200"
                    }`}
                >
                  <Home size={18} className="flex-shrink-0" />
                  <span className="ml-4">Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleRouteChange("favorites")}
                  className={`flex items-center w-full px-4 py-2 mb-1 ${activeRoute === "favorites"
                    ? "bg-rose-100 text-rose-700 font-medium"
                    : "hover:bg-gray-200"
                    }`}
                >
                  <Star size={18} className="flex-shrink-0" />
                  <span className="ml-4">Favorites</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleRouteChange("recent")}
                  className={`flex items-center w-full px-4 py-2 mb-1 ${activeRoute === "recent"
                    ? "bg-rose-100 text-rose-700 font-medium"
                    : "hover:bg-gray-200"
                    }`}
                >
                  <Clock size={18} className="flex-shrink-0" />
                  <span className="ml-4">Recent</span>
                </button>
              </li>
            </ul>
          </nav>

          {/* Folder Tree */}
          <div className="mt-6">
            <h2 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Folders
            </h2>
            <ul>
              {folders.map((folder) => (
                <li key={folder.id} className="mb-1">
                  {/* Folder item */}
                  <div className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    <button
                      onClick={() => toggleFolder(folder.id)}
                      className="mr-1 p-1 rounded hover:bg-gray-300"
                    >
                      {expandedFolders.includes(folder.id) ? (
                        <ChevronDown size={14} />
                      ) : (
                        <ChevronRight size={14} />
                      )}
                    </button>

                    <button
                      onClick={() => handleRouteChange(folder.id)}
                      className={`flex items-center ${activeRoute === folder.id ? "text-rose-700 font-medium" : ""
                        }`}
                    >
                      {expandedFolders.includes(folder.id) ? folder.openIcon : folder.icon}
                      <span className="ml-2">{folder.name}</span>
                    </button>
                  </div>

                  {/* Subfolders */}
                  {expandedFolders.includes(folder.id) &&
                    <ul className="pl-6 mt-1">
                      {folder.subfolders.map((subfolder) =>
                        <li key={subfolder.id}>

                          <button
                            onClick={() => handleRouteChange(subfolder.id)}
                            className={`flex items-center w-full px-4 py-2 hover:bg-gray-200 ${activeRoute === subfolder.id
                              ? "bg-rose-100 text-rose-700 font-medium"
                              : ""
                              }`}
                          >
                            {subfolder.icon}
                            <span className="ml-2">{subfolder.name}</span>
                          </button>
                        </li>)}
                    </ul>
                  }
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
