'use client'

import React, { useState, useRef } from 'react';
import { Info } from '@/Data/Info';
import DirectoryStructure from '../Components/PageComponents/DirectoryStructure';
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { IconType } from 'react-icons';

const InfoTabs = () => {
  const [activeTab, setActiveTab] = useState(Info[0].Title);
  const containerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  const tabs = Info.map((info) => ({
    id: info.Title,
    title: info.Title,
    directory_struct: info.directory_struct,
    images: info.images
  }));

  const renderIcons = (icons?: IconType[]) => {
    return icons?.map((Icon, index) => <Icon key={index} size={30} className="mr-2 text-black/80" />);
  };

  const parseMarkdown = (text: string): JSX.Element[] => {
    const tokens = text.split(/(\*\*.*?\*\*|\*.*?\*|~~.*?~~|__.*?__)/g);
    return tokens.map((token, i) => {
      if (/^\*\*(.*?)\*\*$/.test(token)) {
        return <strong key={i}>{token.slice(2, -2)}</strong>;
      } else if (/^\*(.*?)\*$/.test(token)) {
        return <em key={i}>{token.slice(1, -1)}</em>;
      } else if (/^~~(.*?)~~$/.test(token)) {
        return <s key={i}>{token.slice(2, -2)}</s>;
      } else if (/^__(.*?)__$/.test(token)) {
        return <u key={i}>{token.slice(2, -2)}</u>;
      } else {
        return <span key={i}>{token}</span>;
      }
    });
  };

  const tabContent = Info.reduce((acc, info) => {
    acc[info.Title] = info.points.map((point, i) => (
      <p key={i} className="text-sm mb-2">{parseMarkdown(point)}</p>
    ));
    return acc;
  }, {} as Record<string, JSX.Element[]>);


  return (
    <div
      ref={containerRef}
      className="p-2 flex flex-col bg-gray-100 border border-gray-600 min-h-full font-sans"
    >
      <div className="flex items-center bg-gray-300 max-w-full border-gray-600 px-2 py-1 min-h-16">
        <div className="flex flex-row bg-gray-300 gap-2 px-2 py-1 min-h-12 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`border border-gray-600 p-2 text-left ${activeTab === tab.id ? 'bg-white text-black' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'} text-nowrap`}
              style={{
                boxShadow: activeTab === tab.id ? 'inset 2px 2px 0px #fff, inset -2px -2px 0px #bbb' : '2px 2px 0px #aaa',
                fontSize: '14px',
              }}
            >
              {parseMarkdown(tab.title)}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-grow bg-white p-4 border border-gray-600 shadow-inner overflow-y-auto">
        <h2 className="font-bold text-lg mb-4 pb-2 border-b-2 border-gray-300">
          {parseMarkdown(tabs.find((tab) => tab.id === activeTab)?.title!)}
        </h2>
        <div className="mb-6">{(tabContent[activeTab])}</div>
        {tabs.find((tab) => tab.id === activeTab)?.directory_struct && (
          <div>
            <h3 className="font-bold text-md mb-2">Directory Structure</h3>
            <DirectoryStructure
              structure={tabs.find((tab) => tab.id === activeTab)?.directory_struct!}
            />
          </div>
        )}
        {
          tabs.find((tab) => tab.id === activeTab)?.images && (
            <div className='flex flex-row items-center gap-1 flex-grow'>
              {renderIcons(tabs.find((tab) => tab.id === activeTab)?.images)}
            </div>
          )
        }
      </div>
    </div>
  );
};

export default InfoTabs;

