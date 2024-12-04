/* eslint-disable @typescript-eslint/no-unused-expressions */
'use client';
import React, { useState } from 'react';

interface TabProps {
  tabs: {
    label: string;
    id: string;
  }[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  className?: string;
  defaultActiveTab?: string;
}

const TabSelector: React.FC<TabProps> = ({ 
  tabs, 
  activeTab, 
  onTabChange, 
  className = '', 
  defaultActiveTab 
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(
    defaultActiveTab || tabs[0].id
  );

  const currentActiveTab = activeTab ?? internalActiveTab;

  const handleTabChange = (tabId: string) => {
    onTabChange ? onTabChange(tabId) : setInternalActiveTab(tabId);
  };

  return (
    <div className={`inline-flex items-center justify-center rounded-full bg-[#AFAFAF] text-textdark-200 ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabChange(tab.id)}
          className={`
            inline-flex items-center justify-center 
            whitespace-nowrap text-mobile6 font-im_fell 
            px-4 py-3 transition-all 
            focus-visible:outline-none 
            disabled:pointer-events-none 
            disabled:opacity-50
            first:rounded-l-full 
            last:rounded-r-full
            ${currentActiveTab === tab.id 
              ? 'bg-sec text-textdark-300 shadow' 
              : 'shadow-[inset_1px_1px_8px_rgba(0,0,0,0.2)]'}
          `}
          data-state={currentActiveTab === tab.id ? 'active' : 'inactive'}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabSelector;