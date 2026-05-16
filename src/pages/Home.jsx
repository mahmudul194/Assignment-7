import { PlusCircle } from 'lucide-react';
import { useFriends } from '../context/FriendContext';
import FriendCard from '../components/FriendCard';
const Home = () => {
  const { friends, timeline, loading } = useFriends();

  const stats = [
    { label: 'Total Friends', value: friends.length },
    { label: 'On Track', value: friends.filter(f => f.status === 'on-track').length },
    { label: 'Need Attention', value: friends.filter(f => f.status !== 'on-track').length },
    { label: 'Interactions This Month', value: timeline.length },
  ];

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#1a3b2e] border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-gray-500 font-medium font-outfit">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
      
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <button className="inline-flex items-center gap-2 bg-[#1a3b2e] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#132c23] transition-colors shadow-lg">
          <PlusCircle size={20} />
          Add a Friend
        </button>
      </section>

      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Your Friends</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <div
              key={friend.id}
            >
              <FriendCard friend={friend} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
