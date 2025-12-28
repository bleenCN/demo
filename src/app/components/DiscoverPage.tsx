import { Search, SlidersHorizontal, TrendingUp } from 'lucide-react';
import { useState } from 'react';

interface Token {
  id: string;
  name: string;
  symbol: string;
  icon: string;
  price: string;
  marketCap: string;
  change24h: number;
  volume24h: string;
  holders: string;
  tags?: string[];
}

const mockTokens: Token[] = [
  {
    id: '1',
    name: 'PNUT',
    symbol: 'PNUT',
    icon: '🥜',
    price: '$3.38M',
    marketCap: '$1.07B',
    change24h: -3.71,
    volume24h: '$2.35M',
    holders: '火 3.97K',
  },
  {
    id: '2',
    name: 'IRONSHIB',
    symbol: 'IRONSHIB',
    icon: '🐕',
    price: '$2.16M',
    marketCap: '$1.02M',
    change24h: 12.45,
    volume24h: '1h: 854K',
    holders: '1.23K',
  },
  {
    id: '3',
    name: 'BLIND',
    symbol: 'BLIND',
    icon: '👁️',
    price: '$2.36M',
    marketCap: '$179K',
    change24h: -8.23,
    volume24h: '1h: 112K',
    holders: '火 2.34K',
  },
  {
    id: '4',
    name: 'BTP',
    symbol: 'BTP',
    icon: '💎',
    price: '$3.96M',
    marketCap: '$755.79K',
    change24h: 24.56,
    volume24h: '1h: 345K',
    holders: '4.56K',
  },
  {
    id: '5',
    name: 'FARTCOIN',
    symbol: 'FARTCOIN',
    icon: '💨',
    price: '$1.23M',
    marketCap: '$456.78K',
    change24h: -15.67,
    volume24h: '1h: 678K',
    holders: '1.89K',
  },
  {
    id: '6',
    name: 'pepeto',
    symbol: 'PEPETO',
    icon: '🐸',
    price: '$8.84M',
    marketCap: '$943.82M',
    change24h: 5.32,
    volume24h: '1h: 2.34M',
    holders: '5.67K',
    tags: ['🔥'],
  },
  {
    id: '7',
    name: 'YINYANG',
    symbol: 'YINYANG',
    icon: '☯️',
    price: '$2.97M',
    marketCap: '$710.16M',
    change24h: -12.45,
    volume24h: '1h: 1.23M',
    holders: '3.45K',
  },
  {
    id: '8',
    name: 'TestDie',
    symbol: 'TESTDIE',
    icon: '🎲',
    price: '$3M',
    marketCap: '$815.48M',
    change24h: 18.92,
    volume24h: '1h: 987K',
    holders: '2.34K',
  },
  {
    id: '9',
    name: 'LAUNCH',
    symbol: 'LAUNCH',
    icon: '🚀',
    price: '$7.96M',
    marketCap: '$972.16M',
    change24h: -6.78,
    volume24h: '1h: 4.56M',
    holders: '7.89K',
  },
  {
    id: '10',
    name: 'Jaypegill',
    symbol: 'JAYPEGILL',
    icon: '🖼️',
    price: '$1.97M',
    marketCap: '$342.84M',
    change24h: 9.34,
    volume24h: '1h: 765K',
    holders: '1.23K',
  },
  {
    id: '11',
    name: 'KOKO',
    symbol: 'KOKO',
    icon: '🥥',
    price: '$3.58M',
    marketCap: '$493.13M',
    change24h: -4.56,
    volume24h: '1h: 1.45M',
    holders: '3.89K',
  },
  {
    id: '12',
    name: 'DEVSCAN',
    symbol: 'DEVSCAN',
    icon: '🔍',
    price: '$1.24M',
    marketCap: '$243.47K',
    change24h: 7.23,
    volume24h: '1h: 567K',
    holders: '1.67K',
  },
  {
    id: '13',
    name: 'PUMPYS',
    symbol: 'PUMPYS',
    icon: '🎃',
    price: '$852.26K',
    marketCap: '$823.97K',
    change24h: -18.45,
    volume24h: '1h: 234K',
    holders: '2.14K',
  },
  {
    id: '14',
    name: 'Normie',
    symbol: 'NORMIE',
    icon: '😐',
    price: '$7.44M',
    marketCap: '$649.98K',
    change24h: 15.67,
    volume24h: '1h: 3.21M',
    holders: '4.32K',
  },
  {
    id: '15',
    name: '2026',
    symbol: '2026',
    icon: '🗓️',
    price: '$356.79K',
    marketCap: '$483.17K',
    change24h: -9.12,
    volume24h: '1h: 156K',
    holders: '987',
  },
];

export default function DiscoverPage() {
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const categories = ['全部', '热门', '新币', 'AI', 'Meme', 'DeFi', 'Gaming'];

  return (
    <div className="flex flex-col h-screen bg-black text-white pb-32">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-black border-b border-[#1a1a1a]">
        <div className="flex items-center gap-2 p-3 pt-4">
          <div className="flex-1 flex items-center gap-2 bg-[#1a1a1a] rounded-lg px-3 py-2.5">
            <Search className="w-4 h-4 text-[#666666]" />
            <input
              type="text"
              placeholder="搜索代币/地址"
              className="flex-1 bg-transparent border-none outline-none text-sm text-white placeholder:text-[#666666]"
            />
          </div>
          <button className="p-2.5 bg-[#1a1a1a] rounded-lg hover:bg-[#2a2a2a] transition-colors">
            <SlidersHorizontal className="w-5 h-5 text-white" />
          </button>
          <button className="p-2.5 bg-[#1a1a1a] rounded-lg hover:bg-[#2a2a2a] transition-colors">
            <TrendingUp className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 px-3 pb-3 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-3 py-1.5 ${
                selectedCategory === category ? 'bg-[#00d4aa] text-black' : 'bg-[#1a1a1a] text-white'
              } rounded-md text-sm whitespace-nowrap hover:bg-[#2a2a2a] transition-colors`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Token List */}
      <div className="flex-1 overflow-y-auto">
        {mockTokens.map((token) => (
          <div
            key={token.id}
            className="flex items-center gap-3 px-3 py-3 border-b border-[#1a1a1a] hover:bg-[#0a0a0a] active:bg-[#0a0a0a] transition-colors"
          >
            {/* Token Icon */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] flex items-center justify-center text-xl flex-shrink-0">
              {token.icon}
            </div>

            {/* Token Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-medium text-[15px]">{token.name}</span>
                {token.tags && (
                  <span className="text-xs">{token.tags.join(' ')}</span>
                )}
                <span className="text-xs text-[#666666]">
                  {token.holders}
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-xs text-[#666666]">{token.symbol}</span>
                <span className="text-xs text-[#666666]">•</span>
                <span className="text-xs text-[#666666]">
                  {token.volume24h}
                </span>
              </div>
            </div>

            {/* Price Info */}
            <div className="flex flex-col items-end">
              <span className="text-sm font-medium">{token.price}</span>
              <span className="text-xs text-[#666666] mt-1">
                {token.marketCap}
              </span>
            </div>

            {/* Change */}
            <div className="flex flex-col items-end min-w-[60px]">
              <span className="text-xs text-[#666666]">24h</span>
              <span
                className={`text-sm font-medium mt-1 ${
                  token.change24h >= 0 ? 'text-[#00d4aa]' : 'text-[#ff4d4f]'
                }`}
              >
                {token.change24h >= 0 ? '+' : ''}
                {token.change24h.toFixed(2)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}