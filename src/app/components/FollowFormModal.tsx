import { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp, ChevronRight, Plus, Info, Trash2 } from 'lucide-react';

interface FollowFormModalProps {
  username: string;
  onClose: () => void;
}

export default function FollowFormModal({ username, onClose }: FollowFormModalProps) {
  // State management
  const [buyType, setBuyType] = useState('固定买入');
  const [selectedWallet, setSelectedWallet] = useState('白Wallet1');
  const [amount, setAmount] = useState('');
  const [addPositionTimes, setAddPositionTimes] = useState('');
  const [notSupportMerge, setNotSupportMerge] = useState(false);
  
  // 卖出设置
  const [autoSell, setAutoSell] = useState(true);
  const [batchProfit, setBatchProfit] = useState(false);
  const [devSell, setDevSell] = useState(false);
  const [migrateAutoSell, setMigrateAutoSell] = useState(false);
  const [singleProfit, setSingleProfit] = useState(false);
  
  // 过滤设置
  const [expandFilter, setExpandFilter] = useState(true);
  const [marketCapMin, setMarketCapMin] = useState('');
  const [marketCapMax, setMarketCapMax] = useState('');
  const [poolMin, setPoolMin] = useState('');
  const [poolMax, setPoolMax] = useState('');
  const [amountMin, setAmountMin] = useState('');
  const [amountMax, setAmountMax] = useState('');
  const [holdersMin, setHoldersMin] = useState('');
  const [holdersMax, setHoldersMax] = useState('');
  const [ratioMin, setRatioMin] = useState('');
  const [ratioMax, setRatioMax] = useState('');
  const [timeMin, setTimeMin] = useState('');
  const [timeMax, setTimeMax] = useState('');
  const [minBurnPool, setMinBurnPool] = useState('');
  
  // 平台选择
  const [expandPlatform, setExpandPlatform] = useState(true);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([
    'Pumpfun', 'Bonk', 'Moonshot', 'Bags', 'Believe', 'Studio', 
    'Boop', 'Moonit', 'Pump AMM', 'Meteora', 'Raydium', 'Other DEXs'
  ]);
  
  // 黑名单
  const [blacklistAddresses, setBlacklistAddresses] = useState<string[]>(['']);
  
  // 滑点设置
  const [expandSlippage, setExpandSlippage] = useState(true);
  const [slippageType, setSlippageType] = useState('自动');
  const [customSlippage, setCustomSlippage] = useState('');
  
  // 费用设置
  const [priorityFeeType, setPriorityFeeType] = useState('自动');
  const [priorityFeeValue, setPriorityFeeValue] = useState('0.005');
  const [bribeFeeType, setBribeFeeType] = useState('自动');
  const [bribeFeeValue, setBribeFeeValue] = useState('0.005');
  const [antiMevMode, setAntiMevMode] = useState<'关闭' | '普通' | '安全'>('普通');
  
  // 成功提示
  const [showSuccess, setShowSuccess] = useState(false);

  const platforms = [
    { id: 'Pumpfun', icon: '🟢', name: 'Pumpfun' },
    { id: 'Bonk', icon: '🔥', name: 'Bonk' },
    { id: 'Moonshot', icon: '🌙', name: 'Moonshot' },
    { id: 'Bags', icon: '💰', name: 'Bags' },
    { id: 'Believe', icon: '🔰', name: 'Believe' },
    { id: 'Studio', icon: '📻', name: 'Studio' },
    { id: 'Boop', icon: '😊', name: 'Boop' },
    { id: 'Moonit', icon: '⚡', name: 'Moonit' },
    { id: 'Pump AMM', icon: '◆', name: 'Pump AMM' },
    { id: 'Meteora', icon: '🌪️', name: 'Meteora' },
    { id: 'Raydium', icon: '⚛️', name: 'Raydium' },
    { id: 'Other DEXs', icon: '', name: 'Other DEXs' },
  ];

  const togglePlatform = (platformId: string) => {
    if (selectedPlatforms.includes(platformId)) {
      setSelectedPlatforms(selectedPlatforms.filter(p => p !== platformId));
    } else {
      setSelectedPlatforms([...selectedPlatforms, platformId]);
    }
  };

  const addBlacklistAddress = () => {
    setBlacklistAddresses([...blacklistAddresses, '']);
  };

  const removeBlacklistAddress = (index: number) => {
    setBlacklistAddresses(blacklistAddresses.filter((_, i) => i !== index));
  };

  const updateBlacklistAddress = (index: number, value: string) => {
    const newAddresses = [...blacklistAddresses];
    newAddresses[index] = value;
    setBlacklistAddresses(newAddresses);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    setShowSuccess(true);
    setTimeout(() => {
      onClose();
      setShowSuccess(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 max-w-[428px] mx-auto">
      <div className="bg-black w-full h-full overflow-hidden flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-black border-b border-[#2a2a2a] px-4 py-3.5 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="w-6 h-6 flex items-center justify-center -ml-1"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h2 className="text-base">钱包跟单</h2>
          </div>
          <button className="text-sm text-[#00d4aa]">复制</button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
          <div className="px-4 py-4 space-y-5">
            
            {/* 1. 跟单钱包地址 */}
            <div>
              <div className="text-white text-sm font-medium mb-3">1.跟单钱包地址</div>
              <div className="bg-[#1a1a1a] rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-300 to-blue-300 flex items-center justify-center text-xl">
                    🦄
                  </div>
                  <div>
                    <div className="text-white text-sm mb-0.5">F7K1...jcPV</div>
                    <div className="text-[#666] text-xs">F7K1...jcPV</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. 跟买设置 */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-white text-sm font-medium">2.跟买设置</span>
                <button
                  type="button"
                  className="flex items-center gap-1 text-white text-xs bg-[#1a1a1a] px-3 py-1.5 rounded"
                >
                  <span>固定买入</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-3">
                {/* Wallet 选择 */}
                <div className="bg-black rounded-xl p-4 border border-[#1a1a1a]">
                  <div className="flex items-center justify-between mb-3">
                    <button
                      type="button"
                      className="flex items-center gap-2 text-white text-sm"
                    >
                      <span>📁</span>
                      <span>Wallet1</span>
                      <ChevronDown className="w-4 h-4 text-[#808080]" />
                    </button>
                    <div className="flex items-center gap-1.5 text-white text-sm">
                      <span className="text-[#808080]">≡</span>
                      <span>0</span>
                    </div>
                  </div>

                  {/* 余额提示 */}
                  <div className="bg-[#1a0a0a] border border-[#ff0000]/30 rounded-lg px-3 py-2.5 mb-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#ff4444]">
                        提示：余额小于0.05 SOL，跟单可能失败，请及时充值
                      </span>
                      <button type="button" className="text-[#ff4444] flex items-center gap-1 whitespace-nowrap">
                        <span>去充值</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* 数量输入 */}
                  <div className="mb-3">
                    <div className="bg-black border border-[#2a2a2a] rounded-lg px-4 py-3 flex items-center justify-between">
                      <input
                        type="text"
                        placeholder="数量"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="bg-transparent text-white text-sm outline-none flex-1 placeholder:text-[#666]"
                      />
                      <span className="text-[#808080] text-sm">SOL</span>
                    </div>
                    <div className="text-[#ff4444] text-xs mt-2">请输入数量</div>
                  </div>

                  {/* 金额显示 */}
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="text-[#666]">≈$0(SOL)</span>
                    <button type="button" className="flex items-center gap-1.5 text-[#00d4aa]">
                      <span>余额:0 SOL</span>
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* 加仓次数 */}
                  <div className="bg-black border border-[#2a2a2a] rounded-lg px-4 py-3 flex items-center justify-between mb-3">
                    <input
                      type="text"
                      placeholder="加仓次数"
                      value={addPositionTimes}
                      onChange={(e) => setAddPositionTimes(e.target.value)}
                      className="bg-transparent text-white text-sm outline-none flex-1 placeholder:text-[#666]"
                    />
                    <span className="text-[#808080] text-sm">次</span>
                  </div>

                  {/* 不买持仓 */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 text-white text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notSupportMerge}
                        onChange={(e) => setNotSupportMerge(e.target.checked)}
                        className="w-4 h-4 rounded border border-[#2a2a2a] bg-black checked:bg-[#00d4aa] checked:border-[#00d4aa] appearance-none cursor-pointer relative
                          after:content-[''] after:absolute after:left-[3px] after:top-[0px] after:w-[6px] after:h-[10px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:opacity-0 checked:after:opacity-100"
                      />
                      <span className="text-[#999]">不买持仓</span>
                    </label>
                    <button type="button" className="text-[#666] text-xs">
                      什么是加仓次数?
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. 卖出设置 */}
            <div>
              <div className="text-white text-sm font-medium mb-3">3.卖出设置</div>
              <div className="space-y-2">
                <label className="flex items-center gap-2.5 text-white text-sm">
                  <input
                    type="checkbox"
                    checked={autoSell}
                    onChange={(e) => setAutoSell(e.target.checked)}
                    className="w-4 h-4 rounded bg-[#2a2a2a] border-[#2a2a2a]"
                  />
                  <span className="border-b border-dotted border-[#666]">自动跟卖</span>
                </label>
                <label className="flex items-center gap-2.5 text-white text-sm">
                  <input
                    type="checkbox"
                    checked={batchProfit}
                    onChange={(e) => setBatchProfit(e.target.checked)}
                    className="w-4 h-4 rounded bg-[#2a2a2a] border-[#2a2a2a]"
                  />
                  <span className="border-b border-dotted border-[#666]">分批止盈止损</span>
                </label>
                <label className="flex items-center gap-2.5 text-white text-sm">
                  <input
                    type="checkbox"
                    checked={devSell}
                    onChange={(e) => setDevSell(e.target.checked)}
                    className="w-4 h-4 rounded bg-[#2a2a2a] border-[#2a2a2a]"
                  />
                  <span className="border-b border-dotted border-[#666]">Dev卖</span>
                </label>
                <label className="flex items-center gap-2.5 text-white text-sm">
                  <input
                    type="checkbox"
                    checked={migrateAutoSell}
                    onChange={(e) => setMigrateAutoSell(e.target.checked)}
                    className="w-4 h-4 rounded bg-[#2a2a2a] border-[#2a2a2a]"
                  />
                  <span className="border-b border-dotted border-[#666]">迁移自动卖</span>
                </label>
                <label className="flex items-center gap-2.5 text-white text-sm">
                  <input
                    type="checkbox"
                    checked={singleProfit}
                    onChange={(e) => setSingleProfit(e.target.checked)}
                    className="w-4 h-4 rounded bg-[#2a2a2a] border-[#2a2a2a]"
                  />
                  <span className="border-b border-dotted border-[#666]">单次止盈止损</span>
                </label>
              </div>
            </div>

            {/* 过滤设置 */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-white text-sm font-medium">过滤设置</span>
                  <button type="button" className="text-[#666] text-xs">
                    🔄 重置
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => setExpandFilter(!expandFilter)}
                  className="flex items-center gap-1 text-white text-xs"
                >
                  <span>{expandFilter ? '收起' : '展开'}</span>
                  {expandFilter ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

              {expandFilter && (
                <div className="space-y-4">
                  {/* 提示 */}
                  <div className="bg-[#1a1a1a] rounded-lg p-3 flex items-start gap-2">
                    <Info className="w-4 h-4 text-[#808080] flex-shrink-0 mt-0.5" />
                    <span className="text-[#808080] text-xs leading-relaxed">
                      在下方设置条件后，将仅跟单满足条件的币种
                    </span>
                  </div>

                  {/* 市值 */}
                  <div>
                    <div className="text-white text-sm mb-2">市值</div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          placeholder="最小"
                          value={marketCapMin}
                          onChange={(e) => setMarketCapMin(e.target.value)}
                          className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-3 py-2.5 text-white text-sm outline-none focus:border-[#00d4aa] pr-8"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666] text-xs">K</span>
                      </div>
                      <span className="text-[#666] text-xs">to</span>
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          placeholder="最大"
                          value={marketCapMax}
                          onChange={(e) => setMarketCapMax(e.target.value)}
                          className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-3 py-2.5 text-white text-sm outline-none focus:border-[#00d4aa] pr-8"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666] text-xs">K</span>
                      </div>
                    </div>
                  </div>

                  {/* 池子 */}
                  <div>
                    <div className="text-white text-sm mb-2">池子</div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          placeholder="最小"
                          value={poolMin}
                          onChange={(e) => setPoolMin(e.target.value)}
                          className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-3 py-2.5 text-white text-sm outline-none focus:border-[#00d4aa] pr-8"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666] text-xs">K</span>
                      </div>
                      <span className="text-[#666] text-xs">to</span>
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          placeholder="最大"
                          value={poolMax}
                          onChange={(e) => setPoolMax(e.target.value)}
                          className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-3 py-2.5 text-white text-sm outline-none focus:border-[#00d4aa] pr-8"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666] text-xs">K</span>
                      </div>
                    </div>
                  </div>

                  {/* 跟单金额 */}
                  <div>
                    <div className="text-white text-sm mb-2 border-b border-dotted border-[#666] inline-block">跟单金额</div>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          placeholder="最小"
                          value={amountMin}
                          onChange={(e) => setAmountMin(e.target.value)}
                          className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-3 py-2.5 text-white text-sm outline-none focus:border-[#00d4aa] pr-10"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666] text-xs">SOL</span>
                      </div>
                      <span className="text-[#666] text-xs">to</span>
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          placeholder="最大"
                          value={amountMax}
                          onChange={(e) => setAmountMax(e.target.value)}
                          className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-3 py-2.5 text-white text-sm outline-none focus:border-[#00d4aa] pr-10"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666] text-xs">SOL</span>
                      </div>
                    </div>
                  </div>

                  {/* 持有人数 */}
                  <div>
                    <div className="text-white text-sm mb-2">持有人数</div>
                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        placeholder="最小"
                        value={holdersMin}
                        onChange={(e) => setHoldersMin(e.target.value)}
                        className="flex-1 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-3 py-2.5 text-white text-sm outline-none focus:border-[#00d4aa]"
                      />
                      <span className="text-[#666] text-xs">to</span>
                      <input
                        type="text"
                        placeholder="最大"
                        value={holdersMax}
                        onChange={(e) => setHoldersMax(e.target.value)}
                        className="flex-1 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-3 py-2.5 text-white text-sm outline-none focus:border-[#00d4aa]"
                      />
                    </div>
                  </div>

                  {/* 跟单代币比例 */}
                  <div>
                    <div className="text-white text-sm mb-2 border-b border-dotted border-[#666] inline-block">跟单代币比例</div>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          placeholder="最小"
                          value={ratioMin}
                          onChange={(e) => setRatioMin(e.target.value)}
                          className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-3 py-2.5 text-white text-sm outline-none focus:border-[#00d4aa] pr-8"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666] text-xs">%</span>
                      </div>
                      <span className="text-[#666] text-xs">to</span>
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          placeholder="最大"
                          value={ratioMax}
                          onChange={(e) => setRatioMax(e.target.value)}
                          className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-3 py-2.5 text-white text-sm outline-none focus:border-[#00d4aa] pr-8"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666] text-xs">%</span>
                      </div>
                    </div>
                  </div>

                  {/* 代币创建时间 */}
                  <div>
                    <div className="text-white text-sm mb-2">代币创建时间</div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          placeholder="最小"
                          value={timeMin}
                          onChange={(e) => setTimeMin(e.target.value)}
                          className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-3 py-2.5 text-white text-sm outline-none focus:border-[#00d4aa] pr-8"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666] text-xs">m</span>
                      </div>
                      <span className="text-[#666] text-xs">to</span>
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          placeholder="最大"
                          value={timeMax}
                          onChange={(e) => setTimeMax(e.target.value)}
                          className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-3 py-2.5 text-white text-sm outline-none focus:border-[#00d4aa] pr-8"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666] text-xs">m</span>
                      </div>
                    </div>
                  </div>

                  {/* 最低烧池子 */}
                  <div>
                    <div className="text-white text-sm mb-2">最低烧池子</div>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder=""
                        value={minBurnPool}
                        onChange={(e) => setMinBurnPool(e.target.value)}
                        className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-3 py-2.5 text-white text-sm outline-none focus:border-[#00d4aa] pr-8"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666] text-xs">%</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 平台 */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="text-white text-sm font-medium border-b-2 border-white inline-block pb-0.5">平台</div>
                <button
                  type="button"
                  onClick={() => setExpandPlatform(!expandPlatform)}
                  className="flex items-center gap-1 text-white text-xs"
                >
                  <span>{expandPlatform ? '收起' : '展开'}</span>
                  {expandPlatform ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

              {expandPlatform && (
                <div className="grid grid-cols-3 gap-2">
                  {platforms.map((platform) => {
                    const isSelected = selectedPlatforms.includes(platform.id);
                    return (
                      <button
                        key={platform.id}
                        type="button"
                        onClick={() => togglePlatform(platform.id)}
                        className={`relative bg-[#1a1a1a] border rounded-xl px-3 py-3 flex items-center gap-2 transition-colors ${
                          isSelected ? 'border-[#00d4aa]' : 'border-[#2a2a2a]'
                        }`}
                      >
                        {platform.icon && <span className="text-base">{platform.icon}</span>}
                        <span className="text-white text-xs flex-1 text-left">{platform.name}</span>
                        {isSelected && (
                          <div className="absolute top-2 right-2 w-4 h-4 bg-[#00d4aa] rounded flex items-center justify-center">
                            <span className="text-black text-[10px]">✓</span>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 币种黑名单 */}
            <div>
              <div className="text-white text-sm font-medium border-b-2 border-white inline-block pb-0.5 mb-3">币种黑名单</div>
              <div className="space-y-2">
                {blacklistAddresses.map((address, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-white text-sm">{index + 1}.</span>
                    <input
                      type="text"
                      placeholder="请输入代币地址"
                      value={address}
                      onChange={(e) => updateBlacklistAddress(index, e.target.value)}
                      className="flex-1 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-3 py-2.5 text-white text-sm outline-none focus:border-[#00d4aa]"
                    />
                    <button
                      type="button"
                      onClick={() => removeBlacklistAddress(index)}
                      className="w-9 h-9 flex items-center justify-center text-[#666] hover:text-white transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addBlacklistAddress}
                  className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-3 py-3 text-[#666] text-sm flex items-center justify-center gap-2 hover:border-[#00d4aa] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>添加规则</span>
                </button>
              </div>
            </div>

            {/* 滑点限制 */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-white text-sm">🔧 自动</span>
                  <span className="text-white text-sm">📊 0.005</span>
                  <span className="text-white text-sm">💰 0.005</span>
                  <span className="text-white text-sm">🛡️ 普通</span>
                </div>
                <button
                  type="button"
                  onClick={() => setExpandSlippage(!expandSlippage)}
                  className="flex items-center gap-1 text-white text-xs"
                >
                  <span>{expandSlippage ? '收起' : '展开'}</span>
                  {expandSlippage ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

              {expandSlippage && (
                <div>
                  <div className="text-white text-sm mb-3 flex items-center gap-2">
                    <span>滑点限制</span>
                    <span className="text-[#808080] text-xs">🔧</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setSlippageType('自动')}
                      className={`flex-1 py-2.5 rounded-lg text-sm transition-colors ${
                        slippageType === '自动'
                          ? 'bg-[#00d4aa]/20 text-[#00d4aa] border border-[#00d4aa]'
                          : 'bg-[#1a1a1a] text-white border border-[#2a2a2a]'
                      }`}
                    >
                      自动
                    </button>
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        placeholder="自定义"
                        value={customSlippage}
                        onChange={(e) => {
                          setCustomSlippage(e.target.value);
                          setSlippageType('自定义');
                        }}
                        className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-3 py-2.5 text-white text-sm outline-none focus:border-[#00d4aa] pr-8"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666] text-xs">%</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 费用设置 */}
            <div>
              <div className="text-white text-sm font-medium mb-3">费用设置</div>
              
              {/* 优先费 */}
              <div className="mb-3">
                <div className="flex items-center gap-2 text-white text-sm mb-2">
                  <span>优先费(SOL)</span>
                  <span className="text-xs">🔧</span>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setPriorityFeeType('自动')}
                    className={`flex-1 py-2.5 rounded-lg text-sm transition-colors border ${
                      priorityFeeType === '自动'
                        ? 'bg-black text-white border-[#2a2a2a]'
                        : 'bg-[#1a1a1a] text-[#666] border-[#2a2a2a]'
                    }`}
                  >
                    自动 0.00051
                  </button>
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="0.005"
                      value={priorityFeeValue}
                      onChange={(e) => {
                        setPriorityFeeValue(e.target.value);
                        setPriorityFeeType('自定义');
                      }}
                      className="w-full bg-black border border-[#2a2a2a] rounded-lg px-3 py-2.5 text-white text-sm outline-none focus:border-[#00d4aa] pr-12 placeholder:text-[#666]"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666] text-sm">SOL</span>
                  </div>
                </div>
              </div>

              {/* 贿赂费 */}
              <div className="mb-3">
                <div className="flex items-center gap-2 text-white text-sm mb-2">
                  <span>贿赂费(SOL)</span>
                  <span className="text-xs">⚡</span>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setBribeFeeType('自动')}
                    className={`flex-1 py-2.5 rounded-lg text-sm transition-colors border ${
                      bribeFeeType === '自动'
                        ? 'bg-black text-white border-[#2a2a2a]'
                        : 'bg-[#1a1a1a] text-[#666] border-[#2a2a2a]'
                    }`}
                  >
                    自动 0.001
                  </button>
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="0.005"
                      value={bribeFeeValue}
                      onChange={(e) => {
                        setBribeFeeValue(e.target.value);
                        setBribeFeeType('自定义');
                      }}
                      className="w-full bg-black border border-[#2a2a2a] rounded-lg px-3 py-2.5 text-white text-sm outline-none focus:border-[#00d4aa] pr-12 placeholder:text-[#666]"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666] text-sm">SOL</span>
                  </div>
                </div>
              </div>

              {/* 防夹模式 */}
              <div>
                <div className="flex items-center gap-2 text-white text-sm mb-2">
                  <span>防夹模式(Anti-MEV)</span>
                  <span className="text-xs">🛡️</span>
                </div>
                <div className="flex gap-2">
                  {(['关闭', '普通', '安全'] as const).map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setAntiMevMode(mode)}
                      className={`flex-1 py-2.5 rounded-lg text-sm transition-colors border ${
                        antiMevMode === mode
                          ? 'bg-black text-white border-[#2a2a2a]'
                          : 'bg-[#1a1a1a] text-[#666] border-[#2a2a2a]'
                      }`}
                    >
                      {mode === '关闭' && '🔴 '}
                      {mode === '普通' && '♥️ '}
                      {mode === '安全' && '💚 '}
                      {mode}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2 pb-6">
              <button
                type="submit"
                className="w-full py-3.5 bg-white rounded-xl font-medium text-black text-sm shadow-lg hover:opacity-90 transition-opacity font-bold"
              >
                开始跟单
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-[#1a1a1a] rounded-2xl p-6 mx-4 max-w-sm w-full border border-[#2a2a2a] animate-in fade-in zoom-in duration-200">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#00d4aa]/20 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#00d4aa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-white text-lg font-medium mb-2">跟单成功</h3>
              <p className="text-[#808080] text-sm text-center">
                已成功创建跟单订单，正在为您跳转...
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}