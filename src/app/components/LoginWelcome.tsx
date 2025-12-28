interface LoginWelcomeProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

export default function LoginWelcome({ onLoginClick, onRegisterClick }: LoginWelcomeProps) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white px-6">
      {/* Main Content - Centered */}
      <div className="flex flex-col items-center flex-1 justify-center -mt-24">
        <h1 className="text-[26px] font-medium mb-4 text-center leading-tight tracking-tight">
          更快发现，秒级交易 🚀
        </h1>
        <p className="text-[#808080] text-[14px] mb-14 text-center leading-relaxed">
          快速链上操作，一键交易，自动止盈止损。
        </p>
        
        {/* Buttons */}
        <div className="flex items-center gap-3 w-full max-w-[360px] px-2">
          <button
            onClick={onRegisterClick}
            className="flex-1 py-3.5 bg-transparent border-2 border-[#2a2a2a] rounded-[14px] text-white text-[15px] font-medium hover:border-[#3a3a3a] transition-colors"
          >
            注册
          </button>
          <button
            onClick={onLoginClick}
            className="flex-1 py-3.5 bg-[#00d4aa] rounded-[14px] text-black text-[15px] font-bold hover:bg-[#00c49a] transition-colors shadow-lg shadow-[#00d4aa]/30"
          >
            登录
          </button>
        </div>
      </div>
    </div>
  );
}