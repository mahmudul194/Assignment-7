import { Link } from 'react-router-dom';
const FriendCard = ({ friend }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'overdue': return 'bg-red-500 text-white';
      case 'almost due': return 'bg-orange-400 text-white';
      case 'on-track': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getStatusText = (status) => {
    return status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200"
    >
      <Link to={`/friend/${friend.id}`} className="block p-6 text-center">
        <div className="relative inline-block mb-4">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-[#1a3b2e]/10 mx-auto"
          />
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-1">{friend.name}</h3>
        <p className="text-xs text-gray-500 mb-3">{friend.days_since_contact}d ago</p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {friend.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 bg-green-50 text-green-700 rounded-full border border-green-100">
              {tag}
            </span>
          ))}
        </div>
        
        <div className={`inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getStatusColor(friend.status)}`}>
          {getStatusText(friend.status)}
        </div>
      </Link>
    </div>
  );
};

export default FriendCard;
