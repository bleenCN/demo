import { useState } from 'react';
import BottomNav from './components/BottomNav';
import DiscoverPage from './components/DiscoverPage';
import FollowPage from './components/FollowPage';
import TradePage from './components/TradePage';
import MonitorPage from './components/MonitorPage';
import AssetsPage from './components/AssetsPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('discover');
  const [hideNav, setHideNav] = useState(false);

  const renderPage = () => {
    switch (activeTab) {
      case 'discover':
        return <DiscoverPage />;
      case 'follow':
        return <FollowPage onUserDetailOpen={setHideNav} />;
      case 'trade':
        return <TradePage />;
      case 'monitor':
        return <MonitorPage />;
      case 'assets':
        return <AssetsPage />;
      default:
        return <DiscoverPage />;
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className="w-full max-w-[428px] h-screen bg-black overflow-hidden relative">
        {renderPage()}
        {!hideNav && <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />}
      </div>
    </div>
  );
}