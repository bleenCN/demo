export default function TradePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white pb-32 px-4">
      <div className="w-20 h-20 mb-6 opacity-30">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
          <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M10.5 10.5L13.5 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <h2 className="text-xl mb-2">交易</h2>
      <p className="text-sm text-[#666666] text-center">此功能正在开发中</p>
    </div>
  );
}