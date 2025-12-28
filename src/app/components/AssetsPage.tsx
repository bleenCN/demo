import {
  Eye,
  ArrowDownToLine,
  Repeat,
  MoreHorizontal,
  Copy,
  ExternalLink,
  ChevronDown,
  Filter,
  X,
} from 'lucide-react';
import { useState } from 'react';
import LoginWelcome from './LoginWelcome';
import LoginForm from './LoginForm';

export default function AssetsPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  // If not logged in and not showing login form, show welcome screen
  if (!isLoggedIn && !showLoginForm) {
    return (
      <LoginWelcome
        onLoginClick={() => setShowLoginForm(true)}
        onRegisterClick={() => {
          // Handle register - for now just show login form
          setShowLoginForm(true);
        }}
      />
    );
  }

  // If showing login form
  if (!isLoggedIn && showLoginForm) {
    return (
      <LoginForm
        onBack={() => setShowLoginForm(false)}
        onLoginSuccess={() => {
          setIsLoggedIn(true);
          setShowLoginForm(false);
        }}
      />
    );
  }

  // Logged in - show main assets page
  return (
    <div className="flex flex-col h-screen bg-black text-white pb-32">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-black px-4 pt-4 pb-3">
        <div className="flex items-center justify-between mb-6">
          <div className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-white" />
          </div>
          <div className="flex items-center gap-2">
            <button className="relative p-2 rounded-lg hover:bg-[#1a1a1a] transition-colors">
              <div className="w-6 h-6 bg-[#2a2a2a] rounded flex items-center justify-center">
                <span className="text-xs">🎓</span>
              </div>
              <span className="absolute -top-0.5 -right-0.5 px-1.5 h-4 bg-red-500 rounded-full text-[9px] flex items-center justify-center font-medium">
                New
              </span>
            </button>
            <button className="p-2 rounded-lg hover:bg-[#1a1a1a] transition-colors">
              <div className="w-6 h-6 bg-[#2a2a2a] rounded flex items-center justify-center">
                <span className="text-xs">📋</span>
              </div>
            </button>
            <button className="relative p-2 rounded-lg hover:bg-[#1a1a1a] transition-colors">
              <div className="w-6 h-6 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-[#00d4aa] flex items-center justify-center">
                  <div className="flex flex-col gap-[2px]">
                    <div className="w-3 h-[2px] bg-black rounded-full" />
                    <div className="w-3 h-[2px] bg-black rounded-full" />
                    <div className="w-3 h-[2px] bg-black rounded-full" />
                  </div>
                </div>
              </div>
              <ChevronDown className="w-3 h-3 text-white absolute bottom-1 right-1" />
            </button>
          </div>
        </div>

        {/* Balance Section */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-[#666666]">总余额</span>
            <Eye className="w-4 h-4 text-[#666666]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-[56px] font-normal leading-none tracking-tight">0</span>
            <div className="flex items-center gap-1.5 text-[#808080] mb-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
              <span className="text-sm">SOL</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 mb-4">
          <button className="flex-1 flex items-center justify-center gap-2 bg-[#1a1a1a] rounded-lg py-3 hover:bg-[#2a2a2a] transition-colors">
            <div className="w-4 h-4 flex items-center justify-center text-[#00d4aa]">
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                <path d="M8 2L8 14M8 14L4 10M8 14L12 10" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-sm font-normal">充值</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 bg-[#1a1a1a] rounded-lg py-3 hover:bg-[#2a2a2a] transition-colors">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
            <span className="text-sm font-normal">跨链/闪兑</span>
          </button>
          <button className="flex items-center justify-center gap-1.5 bg-[#1a1a1a] rounded-lg py-3 px-3 hover:bg-[#2a2a2a] transition-colors">
            <MoreHorizontal className="w-4 h-4" />
            <span className="text-sm font-normal">更多</span>
          </button>
        </div>

        {/* Wallet Info */}
        <div className="bg-[#1a1a1a] rounded-xl p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border border-[#666666] flex items-center justify-center">
                <span className="text-[10px]">📁</span>
              </div>
              <span className="text-sm">钱包1</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#666666]" />
            </div>
            <span className="text-sm text-[#808080]">0 SOL</span>
          </div>

          <div className="flex items-start justify-between mb-4 pb-4 border-b border-[#2a2a2a]">
            <div className="flex items-start gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-lg flex-shrink-0">
                🐸
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[15px] font-normal">Hi9M...Xygm</span>
                  <Copy className="w-3.5 h-3.5 text-[#666666] cursor-pointer hover:text-white transition-colors" />
                  <ExternalLink className="w-3.5 h-3.5 text-[#666666] cursor-pointer hover:text-white transition-colors" />
                </div>
                <div className="flex items-center gap-3 text-xs text-[#666666]">
                  <span>粉丝 0</span>
                  <span>被监注 0</span>
                </div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#666666] cursor-pointer hover:text-white transition-colors flex-shrink-0" />
          </div>

          {/* Wallet Tabs */}
          <div className="flex items-center gap-2 mb-4 overflow-x-auto scrollbar-hide">
            <button className="px-3 py-1.5 bg-[#2a2a2a] text-white rounded-md text-xs font-normal whitespace-nowrap">
              PnL
            </button>
            <button className="px-3 py-1.5 bg-transparent text-[#666666] rounded-md text-xs whitespace-nowrap hover:text-white transition-colors">
              分析
            </button>
            <button className="px-3 py-1.5 bg-transparent text-[#666666] rounded-md text-xs whitespace-nowrap hover:text-white transition-colors">
              盈利分布
            </button>
            <button className="px-3 py-1.5 bg-transparent text-[#666666] rounded-md text-xs whitespace-nowrap hover:text-white transition-colors">
              钓鱼检测
            </button>
            <button className="px-2 py-1.5 bg-transparent text-[#666666] rounded-md text-xs whitespace-nowrap hover:text-white transition-colors flex items-center gap-1">
              7d
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>

          {/* Stats List */}
          <div className="space-y-2.5">
            {[
              { label: '黑名单:', value: '--' },
              { label: '未购买:', value: '--' },
              { label: '卖出量大于买入量:', value: '--' },
              { label: '十秒内完成买/卖:', value: '--' },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00d4aa]" />
                  <span className="text-sm text-white font-normal">{item.label}</span>
                </div>
                <span className="text-sm text-[#808080]">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Holdings Section */}
      <div className="flex-1 bg-black overflow-y-auto">
        {/* Tabs */}
        <div className="flex items-center border-b border-[#1a1a1a] px-4 sticky top-0 bg-black">
          <button className="px-0 py-3 text-sm text-white border-b-2 border-white font-normal mr-6">
            持仓
          </button>
          <button className="px-0 py-3 text-sm text-[#666666] hover:text-white transition-colors mr-6">活动</button>
          <button className="px-0 py-3 text-sm text-[#666666] hover:text-white transition-colors">订单</button>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#1a1a1a] sticky top-[49px] bg-black">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0">
              <Filter className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm">最后活跃排序</span>
            <ChevronDown className="w-4 h-4 text-[#666666]" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-sm text-white">余额/总买入</span>
            <X className="w-4 h-4 text-red-500" />
          </div>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-24 h-24 mb-4 opacity-30">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <rect x="20" y="20" width="15" height="15" fill="#404040" rx="2" />
              <rect x="40" y="20" width="15" height="15" fill="#404040" rx="2" />
              <rect x="60" y="20" width="15" height="15" fill="#404040" rx="2" />
              <rect x="20" y="40" width="15" height="15" fill="#404040" rx="2" />
              <rect x="60" y="40" width="15" height="15" fill="#404040" rx="2" />
              <rect x="30" y="60" width="15" height="15" fill="#404040" rx="2" />
              <rect x="50" y="60" width="15" height="15" fill="#404040" rx="2" />
              <rect x="40" y="75" width="15" height="15" fill="#404040" rx="2" />
            </svg>
          </div>
          <span className="text-sm text-[#666666]">未持有资产</span>
        </div>
      </div>

      {/* Footer Tabs */}
      <div className="sticky bottom-20 bg-black border-t border-[#1a1a1a] z-10">
        <div className="flex items-center justify-around px-4 py-2.5">
          <button className="text-xs text-[#666666] hover:text-white transition-colors font-normal">币种/最后活跃</button>
          <button className="text-xs text-[#666666] hover:text-white transition-colors font-normal flex items-center gap-1">
            余额/总买入
            <X className="w-3 h-3 text-red-500" />
          </button>
          <button className="text-xs text-white font-normal">
            利润 与
          </button>
        </div>
      </div>
    </div>
  );
}