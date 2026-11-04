import React from 'react';

interface AdSlotProps {
  format?: 'banner' | 'in-article' | 'square' | 'sticky-mobile';
  className?: string;
  slotId?: string;
}

export const AdSlot: React.FC<AdSlotProps> = ({ 
  format = 'in-article', 
  className = '',
  slotId = '1234567890'
}) => {
  const formatStyles = {
    'banner': 'w-full min-h-[120px] md:min-h-[140px] max-w-4xl mx-auto my-6',
    'in-article': 'w-full min-h-[260px] md:min-h-[280px] my-8',
    'square': 'w-full min-h-[250px] max-w-[320px] mx-auto my-4',
    'sticky-mobile': 'fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 min-h-[60px] py-2 px-4 shadow-lg md:hidden'
  };

  return (
    <div 
      className={`ad-slot-box relative transition-all duration-300 p-4 ${formatStyles[format]} ${className}`}
      data-ad-format={format}
      aria-label="Sponsored Advertising"
    >
      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-2 px-2 py-0.5 bg-slate-100 rounded">
        Sponsored Advertisement
      </span>

      <div className="w-full flex flex-col items-center justify-center text-center">
        <ins 
          className="adsbygoogle"
          style={{ display: 'block', minHeight: '60px', width: '100%' }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot={slotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        
        <div className="flex flex-col items-center justify-center py-4 px-6 text-slate-500">
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-xs font-medium text-slate-600">High-RPM Ad Unit (US Network Target)</span>
          </div>
          <p className="text-[11px] text-slate-500 max-w-md">
            Zero Cumulative Layout Shift (&lt; 0.1 CLS). Pre-allocated dimensions ensure zero reader interruption.
          </p>
        </div>
      </div>
    </div>
  );
};
