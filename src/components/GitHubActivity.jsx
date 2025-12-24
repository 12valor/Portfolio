import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';

const GitHubActivity = () => {
  // Seamless theme matching your dark background
  const customTheme = {
    light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    // 1. Centering wrapper
    <section className="flex flex-col items-center justify-center w-full py-10">
      <h2 className="text-2xl font-bold text-white mb-8">My Contributions</h2>
      
      {/* 2. Responsive & Seamless Container */}
      <div className="w-full max-w-4xl p-6 bg-[#0d1117]/50 rounded-xl border border-gray-800 backdrop-blur-sm">
        <div className="flex justify-center overflow-x-auto custom-scrollbar">
          <GitHubCalendar 
            username="12valor" // Change this to your username
            theme={customTheme}
            fontSize={14}
            blockSize={12}
            blockMargin={4}
            hideTotalCount={false} // Set to true for a cleaner look
            showWeekdayLabels={true}
          />
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;