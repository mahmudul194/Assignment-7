import { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const FriendContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useFriends = () => useContext(FriendContext);

export const FriendProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [timeline, setTimeline] = useState(() => {
    const saved = localStorage.getItem('keenkeeper_timeline');
    return saved ? JSON.parse(saved) : [];
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriends = () => {
      fetch('/friends.json')
        .then(response => response.json())
        .then(
          data => {
            setFriends(data);
            setLoading(false);
          },
          error => {
            console.error('Error fetching friends:', error);
            setLoading(false);
          }
        );
    };

    fetchFriends();
  }, []);

  useEffect(() => {
    localStorage.setItem('keenkeeper_timeline', JSON.stringify(timeline));
  }, [timeline]);

  const addInteraction = (friendName, type) => {
    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }),
      type, 
      title: `${type} with ${friendName}`,
      timestamp: new Date().toISOString()
    };
    setTimeline(prev => [newEntry, ...prev]);
    toast.success(`${type} interaction logged with ${friendName}`);
  };

  return (
    <FriendContext.Provider value={{ friends, timeline, loading, addInteraction }}>
      {children}
    </FriendContext.Provider>
  );
};
