import { useState } from 'react';
import UserDetailPage from './UserDetailPage';

interface FollowPageProps {
  onUserDetailOpen?: (isOpen: boolean) => void;
}

interface LeaderboardUser {
  rank: number;
  avatar: string;
  username: string;
  winRate: string;
  trades: string;
  profit: string;
  change: string;
}

const mockTopUsers: LeaderboardUser[] = [
  {
    rank: 1,
    avatar: '🦄',
    username: 'GSHL_LsH9',
    winRate: '39% 胜率',
    trades: '181 聪明度',
    profit: '+$6,724.27',
    change: '+$2.08',
  },
  {
    rank: 2,
    avatar: '💎',
    username: 'EHuF_xTdA',
    winRate: '83% 胜率',
    trades: '6 聪明度',
    profit: '+$7,499.02',
    change: '+$182.76',
  },
  {
    rank: 3,
    avatar: '🦄',
    username: '87NL_x2E7',
    winRate: '69% 胜率',
    trades: '131 聪明度',
    profit: '+$6,594.11',
    change: '+$3.75',
  },
];

const mockUsers: LeaderboardUser[] = [
  {
    rank: 4,
    avatar: '🐸',
    username: 'H7Dn_xr3v',
    winRate: '51% 胜率',
    trades: '12 聪明度',
    profit: '+$6,525.82',
    change: '+$3.06',
  },
  {
    rank: 5,
    avatar: '🐸',
    username: '9AJR_zGZe',
    winRate: '67% 胜率',
    trades: '120k 聪明度',
    profit: '+$6,148.88',
    change: '+$0',
  },
  {
    rank: 6,
    avatar: '🦄',
    username: 'oY3o_jBxk',
    winRate: '55% 胜率',
    trades: '11 聪明度',
    profit: '+$5,935.02',
    change: '+$8.38',
  },
  {
    rank: 7,
    avatar: '🐸',
    username: '3qyy_5zlD',
    winRate: '31% 胜率',
    trades: '42k 聪明度',
    profit: '+$5,874.7',
    change: '+$7.77',
  },
  {
    rank: 8,
    avatar: '🦄',
    username: 'HCae_2GG2',
    winRate: '101% 胜率',
    trades: '134k 聪明度',
    profit: '+$4,938.41',
    change: '+$0.16',
  },
  {
    rank: 9,
    avatar: '🐸',
    username: '7BNa_LGH5',
    winRate: '50% 胜率',
    trades: '6 聪明度',
    profit: '+$4,512.17',
    change: '+$0.28',
  },
  {
    rank: 10,
    avatar: '🐸',
    username: 'ERBv_7jvT',
    winRate: '88% 胜率',
    trades: '30d 聪明度',
    profit: '+$4,003.81',
    change: '+$2.55',
  },
  {
    rank: 11,
    avatar: '🐸',
    username: 'HL3F_zZwt',
    winRate: '101% 胜率',
    trades: '107 聪明度',
    profit: '+$3,914.23',
    change: '+$1.83',
  },
  {
    rank: 12,
    avatar: '🦄',
    username: 'DzGR_8iU3',
    winRate: '76% 胜率',
    trades: '120k 聪明度',
    profit: '+$3,879.04',
    change: '+$0.38',
  },
  {
    rank: 13,
    avatar: '🦄',
    username: '3hY7_tw3',
    winRate: '31% 胜率',
    trades: '427 聪明度',
    profit: '+$3,840.92',
    change: '+$1.23',
  },
  {
    rank: 14,
    avatar: '🐸',
    username: 'SaLY_JUtG',
    winRate: '101% 胜率',
    trades: '80 聪明度',
    profit: '+$3,340.52',
    change: '+$2.10',
  },
  {
    rank: 15,
    avatar: '🐸',
    username: 'F7xL_jcPV',
    winRate: '51% 胜率',
    trades: '12 聪明度',
    profit: '+$3,270.32',
    change: '+$0.35',
  },
  {
    rank: 16,
    avatar: '🦄',
    username: '7GbB_tF0T',
    winRate: '13% 胜率',
    trades: '25 聪明度',
    profit: '+$3,256.26',
    change: '+$6.48',
  },
  {
    rank: 17,
    avatar: '🦄',
    username: '33Zy_cpPq',
    winRate: '67% 胜率',
    trades: '120k 聪明度',
    profit: '+$2,992.16',
    change: '+$4.3',
  },
  {
    rank: 18,
    avatar: '🦄',
    username: 'AD3x_jXPf',
    winRate: '55% 胜率',
    trades: '11 聪明度',
    profit: '+$2,988.95',
    change: '+$4.3',
  },
  {
    rank: 19,
    avatar: '🐸',
    username: 'AoED_iBTh',
    winRate: '92% 胜率',
    trades: '108d 聪明度',
    profit: '+$2,620.9',
    change: '+$1.31',
  },
];

export default function FollowPage({ onUserDetailOpen }: FollowPageProps) {
  const [selectedTab, setSelectedTab] = useState('牛人榜');
  const [selectedCategory, setSelectedCategory] = useState('热门');
  const [selectedPeriod, setSelectedPeriod] = useState('7D');
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  const tabs = ['链包跟单', '牛人榜', '活动', '关注', '粉丝'];
  const categories = ['热门', '全部', 'SOL', '聪明钱', '内盘概率住', 'AI', 'Meme'];
  const periods = ['1D', '7D', '30D'];

  const handleUserSelect = (username: string) => {
    setSelectedUser(username);
    onUserDetailOpen?.(true);
  };

  const handleUserBack = () => {
    setSelectedUser(null);
    onUserDetailOpen?.(false);
  };

  // If user is selected, show detail page
  if (selectedUser) {
    return (
      <UserDetailPage
        username={selectedUser}
        onBack={handleUserBack}
      />
    );
  }

  return (
    <div className="flex flex-col h-screen bg-black text-white pb-32">
      {/* Top Navigation */}
      <div className="sticky top-0 z-20 bg-black">
        {/* Tab Navigation */}
        <div className="flex items-center px-4 pt-4 pb-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-3 py-1 text-sm transition-colors ${
                selectedTab === tab
                  ? 'text-white font-medium'
                  : 'text-[#808080] font-normal'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Category Chips */}
        <div className="flex items-center gap-2 px-4 pb-3 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 rounded-md text-xs whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-[#2a2a2a] text-white'
                  : 'bg-[#1a1a1a] text-[#808080]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* RANK Header with Period Selector */}
        <div className="flex items-center justify-between px-4 pt-2 pb-3">
          <div className="relative">
            <h1 className="text-2xl font-bold tracking-wider" style={{
              background: 'linear-gradient(135deg, #00d4aa 0%, #00ffc8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              RANK
            </h1>
          </div>
          <div className="flex items-center gap-1 bg-[#1a1a1a] rounded-lg p-1">
            {periods.map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                  selectedPeriod === period
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black'
                    : 'bg-transparent text-[#808080]'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Top 3 Cards */}
        <div className="px-4 pt-2 pb-4">
          <div className="flex items-end justify-center gap-2">
            {/* Rank 2 - Left */}
            <div className="flex-1 relative" onClick={() => handleUserSelect(mockTopUsers[1].username)}>
              <div className="absolute top-2 left-2 w-7 h-7 bg-gradient-to-br from-gray-400 to-gray-600 rounded flex items-center justify-center z-10 shadow-lg">
                <span className="text-sm font-bold text-white">2</span>
              </div>
              <div className="relative bg-gradient-to-br from-gray-700/40 to-gray-900/40 rounded-xl p-3 border-2 border-gray-400/60 overflow-hidden cursor-pointer hover:border-gray-300 transition-colors">
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gray-300"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gray-300"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gray-300"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gray-300"></div>
                
                <div className="flex flex-col items-center pt-3">
                  {/* Crown icon */}
                  <div className="w-8 h-6 mb-1">
                    <svg viewBox="0 0 32 24" fill="none" className="w-full h-full">
                      <path d="M4 20L6 8L12 14L16 4L20 14L26 8L28 20H4Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1.5"/>
                      <circle cx="6" cy="8" r="2" fill="#d1d5db"/>
                      <circle cx="16" cy="4" r="2" fill="#d1d5db"/>
                      <circle cx="26" cy="8" r="2" fill="#d1d5db"/>
                    </svg>
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-300 to-blue-300 flex items-center justify-center text-3xl mb-2 shadow-lg">
                    {mockTopUsers[1].avatar}
                  </div>
                  <div className="text-xs text-white mb-1 text-center truncate w-full">{mockTopUsers[1].username}</div>
                  <div className="text-[10px] text-gray-400 mb-1">{mockTopUsers[1].trades.split(' ')[0]} 粉丝</div>
                  <div className="text-sm font-bold text-[#00ff88]">{mockTopUsers[1].profit}</div>
                </div>
              </div>
            </div>

            {/* Rank 1 - Center (Winner - Larger) */}
            <div className="flex-1 relative" onClick={() => handleUserSelect(mockTopUsers[0].username)}>
              <div className="absolute top-2 left-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded flex items-center justify-center z-10 shadow-xl">
                <span className="text-base font-bold text-black">1</span>
              </div>
              <div className="relative bg-gradient-to-br from-yellow-600/40 to-yellow-800/60 rounded-xl p-4 border-2 border-yellow-400 overflow-hidden shadow-xl cursor-pointer hover:border-yellow-300 transition-colors">
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-300"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-yellow-300"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-yellow-300"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-yellow-300"></div>
                
                <div className="flex flex-col items-center pt-2">
                  {/* Crown icon - larger for winner */}
                  <div className="w-12 h-8 mb-1">
                    <svg viewBox="0 0 48 32" fill="none" className="w-full h-full">
                      <path d="M6 26L8 10L18 20L24 4L30 20L40 10L42 26H6Z" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
                      <circle cx="8" cy="10" r="3" fill="#fbbf24"/>
                      <circle cx="24" cy="4" r="3" fill="#fbbf24"/>
                      <circle cx="40" cy="10" r="3" fill="#fbbf24"/>
                    </svg>
                  </div>
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-purple-200 to-blue-300 flex items-center justify-center text-4xl mb-2 shadow-xl">
                    {mockTopUsers[0].avatar}
                  </div>
                  <div className="text-xs text-white mb-1 text-center truncate w-full font-medium">{mockTopUsers[0].username}</div>
                  <div className="text-[10px] text-yellow-200 mb-1">{mockTopUsers[0].trades.split(' ')[0]} 粉丝</div>
                  <div className="text-base font-bold text-[#00ff88]">{mockTopUsers[0].profit}</div>
                </div>
              </div>
            </div>

            {/* Rank 3 - Right */}
            <div className="flex-1 relative" onClick={() => handleUserSelect(mockTopUsers[2].username)}>
              <div className="absolute top-2 left-2 w-7 h-7 bg-gradient-to-br from-orange-400 to-orange-600 rounded flex items-center justify-center z-10 shadow-lg">
                <span className="text-sm font-bold text-white">3</span>
              </div>
              <div className="relative bg-gradient-to-br from-orange-700/40 to-orange-900/40 rounded-xl p-3 border-2 border-orange-400/60 overflow-hidden cursor-pointer hover:border-orange-300 transition-colors">
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-orange-300"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-orange-300"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-orange-300"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-orange-300"></div>
                
                <div className="flex flex-col items-center pt-3">
                  {/* Crown icon */}
                  <div className="w-8 h-6 mb-1">
                    <svg viewBox="0 0 32 24" fill="none" className="w-full h-full">
                      <path d="M4 20L6 8L12 14L16 4L20 14L26 8L28 20H4Z" fill="#fb923c" stroke="#f97316" strokeWidth="1.5"/>
                      <circle cx="6" cy="8" r="2" fill="#fb923c"/>
                      <circle cx="16" cy="4" r="2" fill="#fb923c"/>
                      <circle cx="26" cy="8" r="2" fill="#fb923c"/>
                    </svg>
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-200 to-orange-300 flex items-center justify-center text-3xl mb-2 shadow-lg">
                    {mockTopUsers[2].avatar}
                  </div>
                  <div className="text-xs text-white mb-1 text-center truncate w-full">{mockTopUsers[2].username}</div>
                  <div className="text-[10px] text-orange-300 mb-1">{mockTopUsers[2].trades.split(' ')[0]} 粉丝</div>
                  <div className="text-sm font-bold text-[#00ff88]">{mockTopUsers[2].profit}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard List */}
        <div className="px-4 space-y-2">
          {mockUsers.map((user) => (
            <div
              key={user.rank}
              className="flex items-center gap-3 bg-[#0a0a0a] rounded-lg p-2.5 border border-[#1a1a1a]"
              onClick={() => handleUserSelect(user.username)}
            >
              {/* Rank */}
              <div className="w-7 h-7 bg-[#1a1a1a] rounded flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-white">{user.rank}</span>
              </div>

              {/* Avatar */}
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-green-300 to-blue-300 flex items-center justify-center text-2xl flex-shrink-0 border-2 border-[#2a2a2a]">
                {user.avatar}
              </div>

              {/* User Info */}
              <div className="flex-1 min-w-0">
                <div className="text-sm text-white mb-0.5 truncate">{user.username}</div>
                <div className="text-[10px] text-[#666666] truncate">
                  {user.winRate} {user.trades}
                </div>
              </div>

              {/* Profit */}
              <div className="text-right flex-shrink-0">
                <div className="text-sm font-bold text-[#00ff88] mb-0.5">{user.profit}</div>
                <div className="text-[10px] text-[#666666]">{user.change}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Spacing */}
        <div className="h-8" />
      </div>
    </div>
  );
}