import { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

interface LoginFormProps {
  onBack: () => void;
  onLoginSuccess: () => void;
}

export default function LoginForm({ onBack, onLoginSuccess }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app this would call an API
    onLoginSuccess();
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      {/* Header */}
      <div className="px-5 pt-6 pb-8">
        <button
          onClick={onBack}
          className="w-9 h-9 flex items-center justify-center -ml-1 hover:bg-[#1a1a1a] rounded-lg transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-5 flex flex-col">
        <h1 className="text-[34px] font-medium mb-10 leading-tight">登录</h1>

        <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
          <div className="space-y-3.5 mb-6">
            {/* Email Input */}
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="输入邮箱"
                className="w-full bg-black border border-[#2a2a2a] rounded-[16px] px-[18px] py-[15px] text-white text-[15px] outline-none focus:border-[#3a3a3a] placeholder:text-[#4a4a4a] transition-colors"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="输入密码"
                className="w-full bg-black border border-[#2a2a2a] rounded-[16px] px-[18px] py-[15px] text-white text-[15px] outline-none focus:border-[#3a3a3a] placeholder:text-[#4a4a4a] pr-14 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#4a4a4a] hover:text-white transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-[18px] h-[18px]" />
                ) : (
                  <Eye className="w-[18px] h-[18px]" />
                )}
              </button>
            </div>
          </div>

          {/* Next Button */}
          <button
            type="submit"
            className="w-full py-[15px] bg-[#2a2a2a] rounded-[16px] text-white text-[15px] font-medium hover:bg-[#333] transition-colors mb-4"
          >
            下一步
          </button>

          {/* Links */}
          <div className="flex items-center justify-between mb-10">
            <button
              type="button"
              className="text-[14px] text-white hover:text-[#00d4aa] transition-colors"
            >
              还没有账号？<span className="text-[#00d4aa]">立即注册</span>
            </button>
            <button
              type="button"
              className="text-[14px] text-[#666] hover:text-white transition-colors"
            >
              忘记密码？
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-7">
            <div className="flex-1 h-[0.5px] bg-[#2a2a2a]" />
            <span className="text-[#666] text-[13px]">OR</span>
            <div className="flex-1 h-[0.5px] bg-[#2a2a2a]" />
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3 pb-10">
            <button
              type="button"
              className="w-full py-[15px] bg-black border border-[#2a2a2a] rounded-[16px] text-white text-[15px] font-medium hover:bg-[#1a1a1a] transition-colors flex items-center justify-center gap-3"
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
              Telegram
            </button>

            <button
              type="button"
              className="w-full py-[15px] bg-black border border-[#2a2a2a] rounded-[16px] text-white text-[15px] font-medium hover:bg-[#1a1a1a] transition-colors flex items-center justify-center gap-3"
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.863 10.843c-.098.232-.24.453-.423.656a2.677 2.677 0 01-.656.524 3.173 3.173 0 01-.863.313c-.314.07-.639.104-.969.104-.396 0-.777-.05-1.143-.152a3.368 3.368 0 01-1.031-.465 3.473 3.473 0 01-.824-.746 4.172 4.172 0 01-.586-.992h6.495v-.168c0-.448-.048-.874-.144-1.277a4.24 4.24 0 00-.456-1.119 3.563 3.563 0 00-.769-.919 3.647 3.647 0 00-1.079-.621 4.062 4.062 0 00-1.373-.228c-.572 0-1.095.095-1.57.285-.474.19-.881.45-1.221.781a3.575 3.575 0 00-.805 1.171 3.743 3.743 0 00-.289 1.476c0 .54.096 1.04.289 1.5.193.46.461.857.805 1.195.344.337.751.599 1.221.785.47.186.988.279 1.554.279.495 0 .958-.073 1.39-.219.431-.146.814-.347 1.147-.603.334-.256.612-.553.834-.891.223-.338.376-.696.46-1.073h-1.56z"/>
              </svg>
              Phantom
            </button>

            <button
              type="button"
              className="w-full py-[15px] bg-black border border-[#2a2a2a] rounded-[16px] text-white text-[15px] font-medium hover:bg-[#1a1a1a] transition-colors flex items-center justify-center gap-3"
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}