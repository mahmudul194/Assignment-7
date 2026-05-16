import { useState } from 'react';
import { useFriends } from '../context/FriendContext';
import { Phone, MessageCircle, Video, Filter } from 'lucide-react';

const Timeline = () => {
  const { timeline } = useFriends();
  const [filter, setFilter] = useState('All');

  const filteredTimeline = filter === 'All' 
    ? timeline 
    : timeline.filter(entry => entry.type === filter);

  const getIcon = (type) => {
    switch (type) {
      case 'Call': return <Phone size={18} className="text-blue-500" />;
      case 'Text': return <MessageCircle size={18} className="text-green-500" />;
      case 'Video': return <Video size={18} className="text-purple-500" />;
      default: return null;
    }
  };

  const filterOptions = ['All', 'Call', 'Text', 'Video'];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Timeline</h1>
        
        <div className="relative flex items-center gap-3">
          <Filter size={18} className="text-gray-400" />
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="appearance-none bg-white border border-gray-200 px-4 py-2 pr-10 rounded-lg text-sm font-medium focus:ring-2 focus:ring-[#1a3b2e] focus:border-transparent outline-none shadow-sm cursor-pointer"
          >
            {filterOptions.map(opt => (
              <option key={opt} value={opt}>{opt} interactions</option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {filteredTimeline.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
            <p className="text-gray-400 font-medium">No interactions found for this filter.</p>
          </div>
        ) : (
          <>
            {filteredTimeline.map((entry) => (
              <div
                key={entry.id}
                className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-5 hover:border-[#1a3b2e]/20 transition-colors group"
              >
                <div className="p-3 bg-gray-50 rounded-full group-hover:bg-gray-100 transition-colors">
                  {getIcon(entry.type)}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 leading-tight mb-1">{entry.title}</h3>
                  <p className="text-xs text-gray-400 font-medium">{entry.date}</p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Timeline;
