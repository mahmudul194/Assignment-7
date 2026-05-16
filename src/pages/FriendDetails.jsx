import { useParams, useNavigate } from 'react-router-dom';
import { useFriends } from '../context/FriendContext';
import { 
  Phone, 
  MessageCircle, 
  Video, 
  Edit2, 
  Clock, 
  Package, 
  Trash2, 
  ArrowLeft 
} from 'lucide-react';
const FriendDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { friends, addInteraction } = useFriends();

  const friend = friends.find(f => f.id === parseInt(id));

  if (!friend) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold text-gray-800">Friend not found</h2>
        <button onClick={() => navigate('/')} className="mt-4 text-[#1a3b2e] underline">Back to home</button>
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'overdue': return 'bg-red-500 text-white';
      case 'almost due': return 'bg-orange-400 text-white';
      case 'on-track': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const actions = [
    { type: 'Call', icon: <Phone size={24} />, color: 'text-blue-600' },
    { type: 'Text', icon: <MessageCircle size={24} />, color: 'text-green-600' },
    { type: 'Video', icon: <Video size={24} />, color: 'text-purple-600' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 text-gray-500 hover:text-[#1a3b2e] mb-8 transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div className="lg:col-span-4 space-y-6">
          <div 
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center"
          >
            <img 
              src={friend.picture} 
              alt={friend.name} 
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-50 mx-auto mb-6 shadow-sm"
            />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{friend.name}</h1>
            
            <div className={`inline-block px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 ${getStatusColor(friend.status)}`}>
              {friend.status.replace('-', ' ')}
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {friend.tags.map(tag => (
                <span key={tag} className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 bg-green-50 text-green-700 rounded-full border border-green-100">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-gray-600 italic mb-4">"{friend.bio}"</p>
            <p className="text-sm text-gray-400 font-medium">{friend.email}</p>
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white border border-gray-200 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
              <Clock size={18} /> Snooze 2 Weeks
            </button>
            <button className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white border border-gray-200 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
              <Package size={18} /> Archive
            </button>
            <button className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white border border-red-100 rounded-xl font-semibold text-red-500 hover:bg-red-50 transition-colors shadow-sm">
              <Trash2 size={18} /> Delete
            </button>
          </div>
        </div>

        
        <div className="lg:col-span-8 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Days Since Contact', value: friend.days_since_contact },
              { label: 'Goal (Days)', value: friend.goal },
              { label: 'Next Due', value: friend.next_due_date },
            ].map((stat) => (
              <div 
                key={stat.label} 
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center"
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>

          
          <div 
            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Relationship Goal</h3>
              <p className="text-gray-500">Connect every <span className="font-bold text-gray-900">{friend.goal} days</span></p>
            </div>
            <button className="p-2 bg-gray-50 text-gray-400 rounded-lg hover:text-[#1a3b2e] hover:bg-gray-100 transition-all">
              <Edit2 size={20} />
            </button>
          </div>

          
          <div 
            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-6">
              {actions.map((action) => (
                <button
                  key={action.type}
                  onClick={() => addInteraction(friend.name, action.type)}
                  className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-gray-50 border border-transparent hover:border-[#1a3b2e] hover:bg-white transition-all group shadow-sm"
                >
                  <div className={`${action.color} group-hover:scale-110 transition-transform`}>
                    {action.icon}
                  </div>
                  <span className="font-bold text-gray-700">{action.type}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
