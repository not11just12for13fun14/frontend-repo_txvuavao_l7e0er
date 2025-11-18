// Mock data for Seqa Reviews (Egypt/MENA focused)
export const users = [
  {
    id: 'u1',
    name: 'Omar Khaled',
    avatar: 'https://i.pravatar.cc/100?img=12',
    joinDate: '2023-04-12',
    points: 820,
  },
  {
    id: 'u2',
    name: 'Sara Ahmed',
    avatar: 'https://i.pravatar.cc/100?img=5',
    joinDate: '2024-01-10',
    points: 460,
  },
];

export const businesses = [
  {
    id: 'b1',
    name: 'Cairo Bites',
    category: 'Restaurant',
    city: 'Cairo',
    claimed: true,
    description: 'Modern Egyptian fusion with a cozy atmosphere.',
    hours: {
      mon_fri: '10:00 - 22:00',
      sat: '12:00 - 23:00',
      sun: 'Closed',
    },
    location: 'Zamalek, Cairo',
  },
  {
    id: 'b2',
    name: 'Nile Beans Cafe',
    category: 'Cafe',
    city: 'Giza',
    claimed: false,
    description: 'Specialty coffee and light bites by the Nile.',
    hours: {
      mon_fri: '08:00 - 22:00',
      sat: '09:00 - 23:00',
      sun: '09:00 - 21:00',
    },
    location: 'Dokki, Giza',
  },
  {
    id: 'b3',
    name: 'Lotus Clinic',
    category: 'Clinic',
    city: 'Alexandria',
    claimed: true,
    description: 'Dermatology and skincare specialists.',
    hours: {
      mon_fri: '09:00 - 17:00',
      sat: '10:00 - 16:00',
      sun: 'Closed',
    },
    location: 'Smouha, Alexandria',
  },
  {
    id: 'b4',
    name: 'Shehab Salon',
    category: 'Salon',
    city: 'Cairo',
    claimed: false,
    description: 'Hair and beauty services for men and women.',
    hours: {
      mon_fri: '11:00 - 21:00',
      sat: '11:00 - 21:00',
      sun: '11:00 - 18:00',
    },
    location: 'New Cairo, Cairo',
  },
];

export const reviews = [
  {
    id: 'r1',
    businessId: 'b1',
    businessName: 'Cairo Bites',
    category: 'Restaurant',
    rating: 5,
    title: 'Amazing koshary and service',
    text: 'Loved the flavors and the staff were very attentive. Will come again!',
    userId: 'u2',
    userName: 'Sara Ahmed',
    date: '2024-10-14',
    badges: ['Verified purchase'],
    aiScore: 92,
  },
  {
    id: 'r2',
    businessId: 'b2',
    businessName: 'Nile Beans Cafe',
    category: 'Cafe',
    rating: 3,
    title: 'Good coffee, slow Wi-Fi',
    text: 'The espresso was great but I struggled with the internet speed for work.',
    userId: 'u1',
    userName: 'Omar Khaled',
    date: '2024-09-03',
    badges: ['Flagged as suspicious'],
    aiScore: 61,
  },
  {
    id: 'r3',
    businessId: 'b3',
    businessName: 'Lotus Clinic',
    category: 'Clinic',
    rating: 4,
    title: 'Professional doctors',
    text: 'Wait times were a bit long, but the dermatologist was excellent.',
    userId: 'u1',
    userName: 'Omar Khaled',
    date: '2024-08-28',
    badges: ['Verified purchase'],
    aiScore: 88,
  },
  {
    id: 'r4',
    businessId: 'b4',
    businessName: 'Shehab Salon',
    category: 'Salon',
    rating: 2,
    title: 'Not worth it',
    text: 'Haircut was rushed and not what I asked for.',
    userId: 'u2',
    userName: 'Sara Ahmed',
    date: '2024-07-15',
    badges: [],
    aiScore: 74,
  },
];

export const metrics = {
  totalReviews: 428,
  averageRating: 4.2,
  responseRate: 76,
  suspiciousPercent: 8,
  sentiments: [
    { label: 'Positive', value: 62 },
    { label: 'Neutral', value: 24 },
    { label: 'Negative', value: 14 },
  ],
  ratingDistribution: [
    { stars: 5, value: 55 },
    { stars: 4, value: 22 },
    { stars: 3, value: 12 },
    { stars: 2, value: 7 },
    { stars: 1, value: 4 },
  ],
};

export const categories = ['Restaurants', 'Cafes', 'Clinics', 'Salons', 'Groceries', 'Electronics'];
export const cities = ['Cairo', 'Giza', 'Alexandria', 'Mansoura', 'Ismailia', 'Luxor'];
