import { useState } from 'react';
import { ArrowLeft, Calendar, Share2, Edit2, Copy, List, Shield, Coins, RefreshCw, ChevronDown, MoreVertical, ExternalLink, TrendingUp, TrendingDown } from 'lucide-react';
import FollowFormModal from './FollowFormModal';

interface Position {
  tokenName: string;
  tokenIcon: string;
  timeHeld: string;
  timeIcon: 'up' | 'down';
  holdingAmount: string;
  holdingValue: string;
  pnl: string;
  pnlPercentage: string;
  isPositive: boolean;
}

const mockPositions: Position[] = [
  {
    tokenName: 'Coal',
    tokenIcon: '⚫',
    timeHeld: '3m',
    timeIcon: 'up',
    holdingAmount: '0 SOL',
    holdingValue: '0.998 SOL',
    pnl: '-0.0668 SOL',
    pnlPercentage: '(-6.58%)',
    isPositive: false,
  },
  {
    tokenName: 'PIMP',
    tokenIcon: '💜',
    timeHeld: '45m',
    timeIcon: 'down',
    holdingAmount: '0 SOL',
    holdingValue: '0.789 SOL',
    pnl: '+0.0406 SOL',
    pnlPercentage: '(+4.94%)',
    isPositive: true,
  },
  {
    tokenName: 'PIMP',
    tokenIcon: '💜',
    timeHeld: '55m',
    timeIcon: 'down',
    holdingAmount: '0 SOL',
    holdingValue: '1.08 SOL',
    pnl: '+0.147 SOL',
    pnlPercentage: '(+12.92%)',
    isPositive: true,
  },
  {
    tokenName: 'PTR',
    tokenIcon: '🔵',
    timeHeld: '1h',
    timeIcon: 'down',
    holdingAmount: '0 SOL',
    holdingValue: '2.15 SOL',
    pnl: '+0.561 SOL',
    pnlPercentage: '(+26.1%)',
    isPositive: true,
  },
];

interface UserDetailPageProps {
  username: string;
  onBack: () => void;
}

export default function UserDetailPage({ username, onBack }: UserDetailPageProps) {
  const [selectedTab, setSelectedTab] = useState('持仓');
  const [selectedAnalysisTab, setSelectedAnalysisTab] = useState('PnL');
  const [selectedPeriod, setSelectedPeriod] = useState('7d');
  const [showFollowModal, setShowFollowModal] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header - Fixed */}
      <div className="sticky top-0 z-20 bg-black">
        {/* Top Action Bar */}
        <div className="flex items-center justify-between px-3 py-3">
          <button
            onClick={onBack}
            className="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="px-4 pb-3">
          {/* Avatar and Follow Button */}
          <div className="flex items-start justify-between mb-3">
            <div className="w-[72px] h-[72px] rounded-lg overflow-hidden border-2 border-[#2a2a2a] bg-[#f5deb3]">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' fill='%23f5deb3'/%3E%3Crect x='8' y='4' width='2' height='2' fill='%23000'/%3E%3Crect x='14' y='4' width='2' height='2' fill='%23000'/%3E%3Crect x='6' y='6' width='2' height='2' fill='%23ffb6c1'/%3E%3Crect x='16' y='6' width='2' height='2' fill='%23ffb6c1'/%3E%3Crect x='10' y='8' width='4' height='2' fill='%23000'/%3E%3Crect x='8' y='10' width='8' height='6' fill='%2387ceeb'/%3E%3Crect x='6' y='12' width='2' height='4' fill='%23ffb6c1'/%3E%3Crect x='16' y='12' width='2' height='4' fill='%23ffb6c1'/%3E%3Crect x='10' y='16' width='4' height='2' fill='%23654321'/%3E%3C/svg%3E"
                alt="Avatar"
                className="w-full h-full object-cover"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
            <button
              onClick={() => setIsFollowing(!isFollowing)}
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                isFollowing 
                  ? 'bg-[#2a2a2a] text-white border-[#3a3a3a]' 
                  : 'bg-white text-black border-white'
              }`}
            >
              {isFollowing ? '✓ 已关注' : '关注'}
            </button>
          </div>

          {/* Username and Icons */}
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-lg font-medium">{username}</h1>
            <button className="p-1 hover:bg-[#1a1a1a] rounded">
              <Edit2 className="w-3.5 h-3.5 text-gray-400" />
            </button>
            <button className="p-1 hover:bg-[#1a1a1a] rounded">
              <Copy className="w-3.5 h-3.5 text-gray-400" />
            </button>
            <button className="p-1 hover:bg-[#1a1a1a] rounded">
              <List className="w-3.5 h-3.5 text-gray-400" />
            </button>
            <div className="flex items-center gap-1 ml-1">
              <Shield className="w-4 h-4 text-green-500" />
              <Coins className="w-4 h-4 text-yellow-500" />
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
            <span>粉丝 <span className="text-white">27</span></span>
            <span>被关注 <span className="text-white">18</span></span>
          </div>

          {/* Wallet Balance Card */}
          <div className="bg-[#1a1a1a] rounded-xl p-3.5 mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 bg-[#0f0f0f] rounded-md flex items-center justify-center border border-[#2a2a2a]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-400">
                  <rect x="2" y="4" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M2 6h12M2 8h12" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="11" cy="10" r="0.5" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-sm text-gray-400">钱包余额</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[17px] font-bold">5.92 SOL</span>
              <button className="p-1.5 hover:bg-[#2a2a2a] rounded transition-colors">
                <RefreshCw className="w-3.5 h-3.5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Analysis Tabs */}
          <div className="flex items-center gap-2 mb-4 overflow-x-auto scrollbar-hide">
            {['PnL', '分析', '盈利分布', '钓鱼检测'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedAnalysisTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors ${
                  selectedAnalysisTab === tab
                    ? 'bg-[#2a2a2a] text-white'
                    : 'bg-[#0f0f0f] text-gray-400'
                }`}
              >
                {tab}
              </button>
            ))}
            <button className="px-4 py-2 bg-[#0f0f0f] rounded-lg text-sm text-gray-400 flex items-center gap-1 whitespace-nowrap">
              {selectedPeriod}
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Statistics List */}
          <div className="space-y-3 mb-4">
            {[
              { label: '黑名单:', value: '0 (0%)', color: 'bg-green-500' },
              { label: '未购买:', value: '0 (0%)', color: 'bg-green-500' },
              { label: '卖出量大于买入量:', value: '0 (0%)', color: 'bg-green-500' },
              { label: '十秒内完成买/卖:', value: '8 (5.03%)', color: 'bg-yellow-500' },
            ].map((stat, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${stat.color}`}></div>
                  <span className="text-sm text-gray-400">{stat.label}</span>
                </div>
                <span className={`text-sm ${stat.color === 'bg-yellow-500' ? 'text-yellow-500' : 'text-white'}`}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-6 border-b border-[#1a1a1a]">
            {['持仓', '活动'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`pb-2 text-sm transition-colors relative ${
                  selectedTab === tab ? 'text-white font-medium' : 'text-gray-500'
                }`}
              >
                {tab}
                {selectedTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content - Scrollable */}
      <div className="flex-1 overflow-y-auto px-4 pb-28">
        {selectedTab === '持仓' && (
          <div className="pt-3">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 py-3 mb-2">
              <div className="w-8 h-8 bg-[#1a1a1a] rounded-full flex items-center justify-center">
                <TrendingDown className="w-4 h-4 text-red-500" />
              </div>
              <button className="flex items-center gap-2 text-sm text-gray-400">
                <ChevronDown className="w-4 h-4" />
                <span>最后活跃排序</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Column Headers */}
            <div className="grid grid-cols-[1fr,1fr,1fr] gap-2 px-2 pb-2 text-xs text-gray-500">
              <div>币种/总成入 💰</div>
              <div className="text-center">余额/总成入 💰</div>
              <div className="text-right">总利润 与</div>
            </div>

            {/* Position List */}
            <div className="space-y-0">
              {mockPositions.map((position, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 py-3 border-b border-[#0f0f0f]"
                >
                  {/* Token Icon and Info */}
                  <div className="flex items-center gap-2 min-w-0" style={{ flex: '0 0 32%' }}>
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-xl flex-shrink-0 border border-[#2a2a2a]">
                      {position.tokenIcon}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-medium truncate">{position.tokenName}</span>
                        <Copy className="w-3 h-3 text-gray-500 flex-shrink-0" />
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <span>{position.timeHeld}</span>
                        {position.timeIcon === 'up' ? (
                          <TrendingUp className="w-3 h-3 text-red-500" />
                        ) : (
                          <TrendingDown className="w-3 h-3 text-red-500" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Holdings */}
                  <div className="text-center min-w-0" style={{ flex: '0 0 28%' }}>
                    <div className="text-sm text-white truncate">{position.holdingAmount}</div>
                    <div className="text-xs text-gray-500 truncate">{position.holdingValue}</div>
                  </div>

                  {/* PnL */}
                  <div className="text-right min-w-0" style={{ flex: '0 0 32%' }}>
                    <div className="flex items-center justify-end gap-1">
                      <ExternalLink className="w-3 h-3 text-gray-500 flex-shrink-0" />
                      <span className={`text-sm font-medium truncate ${
                        position.isPositive ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {position.pnl}
                      </span>
                    </div>
                    <div className={`text-xs truncate ${
                      position.isPositive ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {position.pnlPercentage}
                    </div>
                  </div>

                  {/* More Options */}
                  <button className="flex-shrink-0 p-1" style={{ flex: '0 0 auto' }}>
                    <MoreVertical className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === '活动' && (
          <div className="py-20 text-center text-gray-500">
            <p>暂无活动数据</p>
          </div>
        )}
      </div>

      {/* Follow Button - Fixed at Bottom */}
      <div className="fixed bottom-0 left-0 right-0 px-4 pb-6 pt-4 bg-gradient-to-t from-black via-black to-transparent max-w-[428px] mx-auto">
        <button
          onClick={() => setShowFollowModal(true)}
          className="w-full py-3.5 bg-white rounded-xl font-bold text-black text-base hover:opacity-90 transition-opacity shadow-lg"
        >
          立即跟单
        </button>
      </div>

      {/* Follow Form Modal */}
      {showFollowModal && (
        <FollowFormModal
          username={username}
          onClose={() => setShowFollowModal(false)}
        />
      )}
    </div>
  );
}