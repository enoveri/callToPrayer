// Sample sermon/message data
export const sermonMessages = [
  {
    id: 1,
    title: "Finding Peace in Troubled Times",
    preacher: "Pastor John Doe",
    date: "2025-05-01",
    duration: "45:32",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    description: "In this powerful message, Pastor John explores how we can find God's peace even in the midst of life's most challenging circumstances.",
    categories: ["Faith", "Peace", "Encouragement"],
    scripture: "John 14:27",
    views: 1245,
    comments: [
      {
        id: 101,
        userId: 1,
        username: "FaithfulFollower",
        text: "This message really touched my heart. Thank you for sharing God's word!",
        date: "2025-05-05",
        likes: 24
      },
      {
        id: 102,
        userId: 3,
        username: "GraceSeeker",
        text: "I've been struggling with anxiety lately and this was exactly what I needed to hear.",
        date: "2025-05-06",
        likes: 18
      }
    ]
  },
  {
    id: 2,
    title: "The Power of Prayer",
    preacher: "Pastor Jane Smith",
    date: "2025-04-25",
    duration: "52:17",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1545281141-57e0a895da93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    description: "Pastor Jane shares profound insights on how prayer can transform your life and bring you closer to God's purpose.",
    categories: ["Prayer", "Spiritual Growth"],
    scripture: "James 5:16",
    views: 983,
    comments: [
      {
        id: 201,
        userId: 2,
        username: "PrayerWarrior",
        text: "I've started implementing these prayer strategies and already seeing God move in my life!",
        date: "2025-04-28",
        likes: 31
      }
    ]
  },
  {
    id: 3,
    title: "Walking in Faith",
    preacher: "Pastor John Doe",
    date: "2025-04-18",
    duration: "38:45",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1506918546484-0346ff9f0cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    description: "Learn how to step out in faith when God calls you to the unknown and trust in His perfect plan for your life.",
    categories: ["Faith", "Trust", "Spiritual Growth"],
    scripture: "Hebrews 11:1",
    views: 1056,
    comments: [
      {
        id: 301,
        userId: 5,
        username: "BlessedBeliever",
        text: "This message gave me courage to take that leap of faith I've been putting off. Thank you!",
        date: "2025-04-20",
        likes: 42
      },
      {
        id: 302,
        userId: 4,
        username: "TruthSeeker",
        text: "The examples from Scripture really helped me understand how faith works in practical terms.",
        date: "2025-04-21",
        likes: 15
      }
    ]
  },
  {
    id: 4,
    title: "Overcoming Challenges",
    preacher: "Pastor Jane Smith",
    date: "2025-04-11",
    duration: "49:23",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1485841938031-1bf81239b815?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    description: "Pastor Jane shares biblical principles for overcoming life's greatest challenges and finding victory in Christ.",
    categories: ["Perseverance", "Victory", "Faith"],
    scripture: "Romans 8:37",
    views: 875,
    comments: [
      {
        id: 401,
        userId: 7,
        username: "Overcomer123",
        text: "I needed this reminder that we are more than conquerors through Christ!",
        date: "2025-04-15",
        likes: 28
      }
    ]
  },
  {
    id: 5,
    title: "Living with Purpose",
    preacher: "Pastor John Doe",
    date: "2025-04-04",
    duration: "41:56",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1486962278416-4865ec6b8a04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    description: "Discover God's unique purpose for your life and how to align your daily decisions with His divine plan.",
    categories: ["Purpose", "Calling", "Vision"],
    scripture: "Jeremiah 29:11",
    views: 1432,
    comments: [
      {
        id: 501,
        userId: 6,
        username: "PurposeDriven",
        text: "I've been searching for my purpose and this message gave me clarity on where to start.",
        date: "2025-04-08",
        likes: 37
      },
      {
        id: 502,
        userId: 3,
        username: "GraceSeeker",
        text: "The three steps outlined in this sermon are practical and biblical. Already putting them into practice!",
        date: "2025-04-10",
        likes: 22
      }
    ]
  }
];

// Sample user data (for authenticated users/subscribers)
export const users = [
  {
    id: 1,
    username: "FaithfulFollower",
    email: "faithful@example.com",
    isSubscribed: true,
    profileImage: "https://randomuser.me/api/portraits/women/43.jpg"
  },
  {
    id: 2,
    username: "PrayerWarrior",
    email: "prayer@example.com",
    isSubscribed: true,
    profileImage: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    id: 3,
    username: "GraceSeeker",
    email: "grace@example.com",
    isSubscribed: true,
    profileImage: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    id: 4,
    username: "TruthSeeker",
    email: "truth@example.com",
    isSubscribed: false,
    profileImage: "https://randomuser.me/api/portraits/men/41.jpg"
  },
  {
    id: 5,
    username: "BlessedBeliever",
    email: "blessed@example.com",
    isSubscribed: true,
    profileImage: "https://randomuser.me/api/portraits/women/32.jpg"
  }
];
