import React, { useState } from 'react';
import { IoIosFolderOpen } from "react-icons/io";
import { IoIosDocument } from "react-icons/io";
import { FaCircleChevronDown } from "react-icons/fa6";
import { FaChevronCircleRight } from "react-icons/fa";

interface DirectoryItem {
  title: string;
  type: 'file' | 'folder';
  link?: string;
  children?: DirectoryItem[];
}

interface DirectoryStructureProps {
  structure: DirectoryItem;
}

const DirectoryItem: React.FC<{ item: DirectoryItem; depth: number }> = ({ item, depth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const paddingLeft = `${depth * 1.5}rem`;

  if (item.type === 'file') {
    return (
      <div className="flex items-center py-1" style={{ paddingLeft }}>
        <IoIosDocument className="h-5 w-5 mr-2 text-gray-500" />
        <a
          href={`https://github.com/ikshit264/Portfolio${item.link}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm"
        >
          {item.title}
        </a>
      </div>
    );
  }

  return (
    <div>
      <div
        className="flex items-center py-1 cursor-pointer"
        style={{ paddingLeft }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <FaCircleChevronDown className="h-4 w-4 mr-1" />
        ) : (
          <FaChevronCircleRight className="h-4 w-4 mr-1" />
        )}
        <IoIosFolderOpen className="h-5 w-5 mr-2 text-yellow-500" />
        <span className="text-sm">{item.title}</span>
      </div>
      {isOpen && item.children && (
        <div>
          {item.children.map((child, index) => (
            <DirectoryItem key={index} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const DirectoryStructure: React.FC<DirectoryStructureProps> = ({ structure }) => {
  return (
    <div className="font-mono bg-gray-100 p-4 rounded-lg border border-gray-300">
      <DirectoryItem item={structure} depth={0} />
    </div>
  );
};

export default DirectoryStructure;

