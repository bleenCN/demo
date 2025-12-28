interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

// Custom SVG Icons
const DiscoverIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WalletFollowIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V6Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 10H21" stroke="currentColor" strokeWidth="2"/>
    <circle cx="7" cy="15" r="1" fill="currentColor"/>
  </svg>
);

const TradeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
    <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M10.5 10.5L13.5 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const MonitorIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 4V2M12 22V20M20 12H22M2 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const AssetsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M6 21V19C6 16.7909 7.79086 15 10 15H14C16.2091 15 18 16.7909 18 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: 'discover', label: '发现', icon: DiscoverIcon },
    { id: 'follow', label: '钱包跟单', icon: WalletFollowIcon },
    { id: 'trade', label: '交易', icon: TradeIcon },
    { id: 'monitor', label: '监控', icon: MonitorIcon },
    { id: 'assets', label: '资产', icon: AssetsIcon },
  ];

  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50 pointer-events-none">
      <div className="pointer-events-auto bg-[#1a1a1a]/95 backdrop-blur-xl rounded-full px-4 py-3 shadow-2xl border border-[#2a2a2a]">
        <div className="flex items-center gap-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className="flex flex-col items-center justify-center gap-1.5 min-w-[60px]"
              >
                <div className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
                  isActive 
                    ? 'bg-[#00d4aa]/20' 
                    : 'bg-[#2a2a2a]'
                }`}>
                  <Icon
                    className={`w-6 h-6 transition-colors ${
                      isActive ? 'text-[#00d4aa]' : 'text-[#808080]'
                    }`}
                  />
                </div>
                <span
                  className={`text-[10px] leading-tight transition-colors ${
                    isActive ? 'text-[#00d4aa]' : 'text-[#808080]'
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}