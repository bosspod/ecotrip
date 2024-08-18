// Mockup hotels data
export const hotels = [
  {
    id: 1,
    name: "Super-Premier-Hotel",
    position: [13.7563, 100.5018],
    rating: 4.5,
    ecoRating: "1k",
    location: "Eco-Friendly, Thailand",
    distance: "3km",
    ecoScore: 75,
    features: ["Renewable Energy", "Water Saving System", "Recycled Materials"],
    description: "Super Premier Hotel is dedicated to being eco-friendly. The hotel uses renewable energy, water-saving systems, recycled materials, and avoids single-use plastics. It supports local products.",
    image: "/assets/img/hotel/1/hotel.jpg",
    rooms: [
      { type: 'Standard Room', price: 500, people: 2, image: '/assets/img/hotel/1/room1.jpg' },
      { type: 'Superior Room', price: 800, people: 2, image: '/assets/img/hotel/1/room2.jpg' }
    ]
  },
  {
    id: 2,
    name: "Green-Oasis-Resort",
    position: [13.7466, 100.5350],
    rating: 4.2,
    ecoRating: "800",
    location: "Eco-Friendly, Thailand",
    distance: "5km",
    ecoScore: 68,
    features: ["Solar Panels", "Organic Garden", "Eco-friendly Toiletries"],
    description: "Green Oasis Resort offers a sustainable stay with its solar-powered facilities and farm-to-table restaurant featuring produce from its own organic garden.",
    image: "/assets/img/hotel/2/hotel.jpg",
    rooms: [
      { type: 'Deluxe Room', price: 600, people: 2, image: '/assets/img/hotel/2/room1.jpg' },
      { type: 'Suite Room', price: 900, people: 3, image: '/assets/img/hotel/2/room2.jpg' }
    ]
  },
  {
    id: 3,
    name: "Eco-Skyline-Hotel",
    position: [13.7280, 100.5680],
    rating: 4.7,
    ecoRating: "1.2k",
    location: "Eco-Friendly, Thailand",
    distance: "7km",
    ecoScore: 82,
    features: ["Green Roof", "Energy-efficient Lighting", "Rainwater Harvesting"],
    description: "Eco Skyline Hotel boasts a green roof that helps regulate temperature and collect rainwater. The building is designed for maximum energy efficiency.",
    image: "/assets/img/hotel/3/hotel.jpg",
    rooms: [
      { type: 'Eco Room', price: 550, people: 2, image: '/assets/img/hotel/3/room1.jpg' },
      { type: 'Green Suite', price: 950, people: 3, image: '/assets/img/hotel/3/room2.jpg' }
    ]
  }
];
