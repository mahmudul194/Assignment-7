import { useFriends } from '../context/FriendContext';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
const Stats = () => {
  const { timeline } = useFriends();

  const interactionData = [
    { name: 'Call', value: timeline.filter(t => t.type === 'Call').length },
    { name: 'Text', value: timeline.filter(t => t.type === 'Text').length },
    { name: 'Video', value: timeline.filter(t => t.type === 'Video').length },
  ].filter(d => d.value > 0);


  const displayData = interactionData.length > 0 ? interactionData : [
    { name: 'Call', value: 12 },
    { name: 'Text', value: 8 },
    { name: 'Video', value: 5 },
  ];

  const COLORS = ['#1a3b2e', '#a855f7', '#22c55e']; 

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-12 text-center sm:text-left">Friendship Analytics</h1>

      <div 
        className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm"
      >
        <h3 className="text-lg font-bold text-gray-500 mb-8 uppercase tracking-wider">By Interaction Type</h3>
        
        <div className="h-100 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={displayData}
                cx="50%"
                cy="50%"
                innerRadius={100}
                outerRadius={140}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {displayData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend verticalAlign="bottom" height={36} iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {interactionData.length === 0 && (
          <p className="text-center text-xs text-gray-400 mt-4 italic">
            * Displaying sample data until you log some real interactions.
          </p>
        )}
      </div>
    </div>
  );
};

export default Stats;
