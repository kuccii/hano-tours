import { Tour } from './types';

export const tours: Tour[] = [
  {
    id: 'national-memorial',
    title: 'Rwanda National Memorial',
    description: 'A moving journey through Rwanda\'s history at the Kigali Genocide Memorial and other significant memorial sites, highlighting the country\'s path to reconciliation and hope.',
    image: '/images/tours/Memorial1.jpg',
    gallery: [
      '/images/tours/Memorial1.jpg',
      '/images/tours/Memorial2.jpg',
      '/images/tours/Memorial3.jpg'
    ],
    videos: [],
    view360: [],
    highlights: [
      'Kigali Genocide Memorial visit',
      'Ntarama Genocide Memorial',
      'Nyamata Genocide Memorial',
      'Campaign Against Genocide Museum',
      'Meeting with survivors and hearing their stories'
    ],
    duration: '2 Days',
    location: {
      name: 'Multiple Locations',
      description: 'Various memorial sites across Rwanda, centered in Kigali',
      coordinates: {
        latitude: -1.9437,
        longitude: 30.0594
      }
    },
    groupSize: 'Max 10 people',
    difficulty: 'Easy',
    price: 600,
    included: [
      'Professional guide',
      'Memorial site entrance fees',
      'Transportation between sites',
      'Lunch on both days',
      'Water'
    ],
    notIncluded: [
      'Accommodation',
      'Transportation to/from Kigali',
      'Personal expenses',
      'Tips'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Kigali Memorials',
        description: 'Visit the main memorial sites in Kigali.',
        activities: [
          'Kigali Genocide Memorial visit',
          'Campaign Against Genocide Museum',
          'Lunch break',
          'Meeting with survivors',
          'Evening reflection'
        ]
      },
      {
        day: 2,
        title: 'Rural Memorial Sites',
        description: 'Visit memorial sites outside Kigali.',
        activities: [
          'Ntarama Memorial visit',
          'Nyamata Memorial visit',
          'Lunch break',
          'Peace and reconciliation discussion'
        ]
      }
    ],
    category: 'Cultural',
    bestTimeToVisit: 'Year-round (April is Genocide Memorial Month)',
    featured: true
  },
  {
    id: 'kigali-city',
    title: 'Kigali City Tour',
    description: 'Discover the vibrant capital of Rwanda, known for its cleanliness, safety, and modern African charm. Experience local culture, arts, and cuisine while exploring the city\'s highlights.',
    image: '/images/tours/City-centre-of-Kigali-Rwanda-1200x750.jpg',
    gallery: [
      '/images/tours/Kigali.jpg',
      '/images/tours/Visit-Rwanda_-Kigali-Skyline-to-CBD-700x467_24.jpg',
      '/images/tours/City-centre-of-Kigali-Rwanda-1200x750.jpg'
    ],
    videos: [],
    view360: [],
    highlights: [
      'Visit to local markets and craft centers',
      'Modern shopping districts tour',
      'Cultural performances',
      'Local cuisine tasting',
      'Art galleries and museums'
    ],
    duration: '1 Day',
    location: {
      name: 'KN2st 56 AVE',
      description: 'Rwanda\'s clean, green and vibrant capital city',
      coordinates: {
        latitude: -1.9437,
        longitude: 30.0594
      }
    },
    groupSize: 'Max 12 people',
    difficulty: 'Easy',
    price: 250,
    included: [
      'Professional city guide',
      'Transportation within Kigali',
      'Entrance fees',
      'Lunch at local restaurant',
      'Water'
    ],
    notIncluded: [
      'Accommodation',
      'Personal shopping',
      'Additional meals',
      'Tips'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Kigali City Tour',
        description: 'Full day exploring the highlights of Kigali.',
        activities: [
          'Morning visit to Kimironko Market',
          'Tour of the Inema Arts Center',
          'Lunch at a local restaurant',
          'Visit to the Presidential Palace Museum',
          'Shopping at modern centers',
          'Evening cultural performance'
        ]
      }
    ],
    category: 'Cultural',
    bestTimeToVisit: 'Year-round',
    featured: true
  },
  // Wildlife Experiences
  {
    id: 'gorilla-tracking',
    title: 'Gorilla Tracking',
    description: 'Track mountain gorillas in their natural habitat in Volcanoes National Park, observing these magnificent creatures up close in their natural environment.',
    image: '/images/tours/Visit-Rwanda_-Volcanoes-National-Park-Silverback-in-Bamboo-1-700x467_23.jpg',
    gallery: [
      '/images/tours/Visit-Rwanda-Kwita-Izina-Baby-Gorilla-2-700x467_21.jpg',
      '/images/tours/Visit-Rwanda-Bisate-11-700x467_22.jpg',
      '/images/tours/Visit-Rwanda_-Volcanoes-National-Park-Silverback-in-Bamboo-1-700x467_23.jpg'
    ],
    videos: [
      {
        title: 'Gorilla Tracking Experience',
        url: 'https://www.youtube.com/embed/example1',
        thumbnail: '/images/tours/gorilla-video-thumb.jpg'
      }
    ],
    view360: [],
    highlights: [
      'Gorilla tracking in Volcanoes National Park',
      'Professional guide and trackers',
      'One hour with the gorillas',
      'Scenic views of the Virunga Mountains'
    ],
    duration: '1 Day',
    location: {
      name: 'Volcanoes National Park',
      description: 'The premium destination for gorilla tracking with plenty of side activities',
      coordinates: {
        latitude: -1.4433,
        longitude: 29.5361
      }
    },
    groupSize: 'Max 8 people',
    difficulty: 'Challenging',
    price: 1500,
    included: [
      'Gorilla tracking permit',
      'Professional guide',
      'Park fees',
      'Lunch'
    ],
    notIncluded: [
      'Accommodation',
      'Transportation',
      'Personal expenses',
      'Tips'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Gorilla Tracking',
        description: 'Full day gorilla tracking experience in Volcanoes National Park.',
        activities: [
          'Early morning briefing',
          'Gorilla tracking',
          'Lunch',
          'Return to base'
        ]
      }
    ],
    category: 'Wildlife',
    bestTimeToVisit: 'June to September (Dry Season) or December to February',
    featured: true
  },
  {
    id: 'primate-tracking',
    title: 'Primate Tracking',
    description: 'Observe various primates including chimpanzees and golden monkeys in their natural habitats across Rwanda\'s national parks.',
    image: '/images/tours/Visit-Rwanda-NH_OO_Activities_Chimpanzee_Trek_6853_MASTER-700x467_23.jpg',
    gallery: [
      '/images/tours/Visit-Rwanda-NH_OO_Activities_Chimpanzee_Trek_6853_MASTER-700x467_23.jpg',
      '/images/tours/Visit-Rwanda-Kwita-Izina-Baby-Gorilla-2-700x467_21.jpg',
      '/images/tours/Visit-Rwanda-Bisate-11-700x467_22.jpg'
    ],
    videos: [],
    view360: [],
    highlights: [
      'Chimpanzee tracking in Nyungwe Forest',
      'Golden monkey tracking in Volcanoes National Park',
      'Professional guides',
      'Diverse primate species'
    ],
    duration: '1 Day',
    location: {
      name: 'Multiple Locations',
      description: 'Track primates in various national parks across Rwanda',
      coordinates: {
        latitude: -1.9403,
        longitude: 29.8739
      }
    },
    groupSize: 'Max 6 people',
    difficulty: 'Moderate',
    price: 1000,
    included: [
      'Tracking permit',
      'Professional guide',
      'Park fees',
      'Lunch'
    ],
    notIncluded: [
      'Accommodation',
      'Transportation',
      'Personal expenses',
      'Tips'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Primate Tracking',
        description: 'Full day primate tracking experience.',
        activities: [
          'Early morning briefing',
          'Primate tracking',
          'Lunch',
          'Return to base'
        ]
      }
    ],
    category: 'Wildlife',
    bestTimeToVisit: 'June to September (Dry Season)',
    featured: true
  },
  {
    id: 'akagera-safari',
    title: 'Akagera Safari',
    description: 'Experience wildlife viewing in Akagera National Park, home to the Big Five and other diverse wildlife species.',
    image: '/images/tours/Visit-Rwanda-Akagera-Lion-in-Tree-1-e1533313181412-700x461_23.jpg',
    gallery: [
      '/images/tours/Visit-Rwanda-Akagera-Three-Zebra-700x467_21.jpg',
      '/images/tours/Visit-Rwanda-Akagera-Lion-in-Tree-1-e1533313181412-700x461_23.jpg',
      '/images/tours/Visit-Rwanda-Akagera-from-Safari-Vehicle-700x467_1.jpg'
    ],
    videos: [],
    view360: [],
    highlights: [
      'Game drives in Akagera National Park',
      'Boat safari on Lake Ihema',
      'Big Five viewing opportunities',
      'Diverse bird species'
    ],
    duration: '1 Day',
    location: {
      name: 'Akagera National Park',
      description: 'Home to the Big Five, these relatively warm and low-lying plains form Rwanda\'s safari region',
      coordinates: {
        latitude: -1.6667,
        longitude: 30.7500
      }
    },
    groupSize: 'Max 6 people',
    difficulty: 'Easy',
    price: 800,
    included: [
      'Professional guide',
      'Game drives',
      'Boat safari',
      'Park fees',
      'Lunch'
    ],
    notIncluded: [
      'Accommodation',
      'Transportation',
      'Personal expenses',
      'Tips'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Safari Experience',
        description: 'Full day safari experience in Akagera National Park.',
        activities: [
          'Morning game drive',
          'Boat safari',
          'Lunch',
          'Afternoon game drive'
        ]
      }
    ],
    category: 'Wildlife',
    bestTimeToVisit: 'June to September (Dry Season)',
    featured: true
  },
  {
    id: 'birdwatching',
    title: 'Birdwatching',
    description: 'Spot some of Rwanda\'s 700+ bird species across various habitats, from wetlands to forests and savannahs.',
    image: '/images/tours/Variable-Sunbrird-Nyungwe-Gisakura-ICS-700x455_21.jpg',
    gallery: [
      '/images/tours/Grey-Crowned-Crane-1920x1280.jpg',
      '/images/tours/Regal-Sunbird-1920x1279.jpg',
      '/images/tours/Visit-Rwanda_-Lake-Ihema-Bird-Flying-1-1920x1280.jpg'
    ],
    videos: [],
    view360: [],
    highlights: [
      'Professional bird guide',
      'Diverse bird species',
      'Multiple habitats',
      'Photography opportunities'
    ],
    duration: '1 Day',
    location: {
      name: 'Multiple Locations',
      description: 'Birdwatching across Rwanda\'s diverse habitats',
      coordinates: {
        latitude: -1.9403,
        longitude: 29.8739
      }
    },
    groupSize: 'Max 4 people',
    difficulty: 'Easy',
    price: 600,
    included: [
      'Professional bird guide',
      'Binoculars',
      'Field guide',
      'Lunch'
    ],
    notIncluded: [
      'Transportation',
      'Accommodation',
      'Personal expenses',
      'Tips'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Birdwatching',
        description: 'Full day birdwatching experience in various locations.',
        activities: [
          'Early morning birding',
          'Midday break',
          'Afternoon birding',
          'Species identification'
        ]
      }
    ],
    category: 'Wildlife',
    bestTimeToVisit: 'Year-round',
    featured: false
  },
  // Cultural Experiences
  {
    id: 'cultural-heritage',
    title: 'Cultural Heritage',
    description: 'Explore Rwanda\'s rich cultural heritage through visits to museums, traditional villages, and cultural performances.',
    image: '/images/tours/Visit-Rwanda-Kings-Palace-Nyanza-Front-1-700x467_22.jpg',
    gallery: [
      '/images/tours/Visit-Rwanda-Kings-Palace-Nyanza-Front-1-700x467_22.jpg',
      '/images/tours/Visit-Rwanda-Kibeho-Church-Credit-Elena-Hermosa-700x467_21.jpg',
      '/images/tours/Visit-Rwanda-Huye-Town-700x467_21.jpg'
    ],
    videos: [],
    view360: [],
    highlights: [
      'Ethnographic Museum visit',
      'King\'s Palace tour',
      'Traditional Intore dance performance',
      'Imigongo art workshop',
      'Kigali Genocide Memorial visit'
    ],
    duration: '1 Day',
    location: {
      name: 'Multiple Locations',
      description: 'Explore Rwanda\'s cultural heritage across various destinations',
      coordinates: {
        latitude: -1.9403,
        longitude: 29.8739
      }
    },
    groupSize: 'Max 12 people',
    difficulty: 'Easy',
    price: 400,
    included: [
      'Professional guide',
      'Entrance fees',
      'Cultural performances',
      'Lunch'
    ],
    notIncluded: [
      'Transportation',
      'Accommodation',
      'Personal expenses',
      'Tips'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Cultural Heritage',
        description: 'Full day cultural heritage experience.',
        activities: [
          'Museum visits',
          'Cultural performances',
          'Traditional art workshops',
          'Historical sites'
        ]
      }
    ],
    category: 'Cultural',
    bestTimeToVisit: 'Year-round',
    featured: true
  },
  {
    id: 'coffee-tea',
    title: 'Coffee & Tea',
    description: 'Discover Rwanda\'s world-renowned coffee and tea production through plantation visits and tasting sessions.',
    image: '/images/tours/Visit-Rwanda-Tea-Plantation-1-1920x1280.jpg',
    gallery: [
      '/images/tours/Visit-Rwanda-Tea-Plantation-1-1920x1280.jpg',
      '/images/tours/Tea-in-Cup-700x466.jpg',
      '/images/tours/Green-coffee-beans-700x467_21.jpg'
    ],
    videos: [],
    view360: [],
    highlights: [
      'Coffee plantation tour',
      'Tea plantation visit',
      'Processing demonstrations',
      'Tasting sessions'
    ],
    duration: '1 Day',
    location: {
      name: 'KN2st 56 AVE',
      description: 'Explore Rwanda\'s famous coffee and tea plantations',
      coordinates: {
        latitude: -1.9403,
        longitude: 29.8739
      }
    },
    groupSize: 'Max 12 people',
    difficulty: 'Easy',
    price: 300,
    included: [
      'Professional guide',
      'Plantation tours',
      'Tasting sessions',
      'Lunch'
    ],
    notIncluded: [
      'Transportation',
      'Accommodation',
      'Personal expenses',
      'Tips'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Coffee & Tea',
        description: 'Full day coffee and tea experience.',
        activities: [
          'Plantation tours',
          'Processing demonstrations',
          'Tasting sessions',
          'Local market visit'
        ]
      }
    ],
    category: 'Cultural',
    bestTimeToVisit: 'July to October (Harvest Season)',
    featured: false
  },
  // Adventure Experiences
  {
    id: 'nyungwe-canopy',
    title: 'Nyungwe Canopy Walk',
    description: 'Experience Nyungwe Forest from above on the canopy walkway, offering breathtaking views and unique wildlife encounters.',
    image: '/images/tours/Visit-Rwanda-NH_OO_Lifestyle_Canopy_Walk_0657_MASTER-700x467_21.jpg',
    gallery: [
      '/images/tours/Visit-Rwanda-NH_OO_Lifestyle_Canopy_Walk_0657_MASTER-700x467_21.jpg',
      '/images/tours/Visit-Rwanda-NH_OO_Activities_Canopy_Walk_2918_MASTER-700x467_21.jpg',
      '/images/tours/Visit-Rwanda-NH_OO_Lifestyle_Canopy_Walk_0019_MASTER-1-700x467_22.jpg'
    ],
    videos: [],
    view360: [],
    highlights: [
      'Canopy walkway experience',
      'Forest views',
      'Birdwatching opportunities',
      'Professional guide'
    ],
    duration: '1 Day',
    location: {
      name: 'KN2st 56 AVE',
      description: 'An ancient rainforest with incredible biodiversity',
      coordinates: {
        latitude: -2.5000,
        longitude: 29.2500
      }
    },
    groupSize: 'Max 12 people',
    difficulty: 'Moderate',
    price: 500,
    included: [
      'Professional guide',
      'Canopy walk permit',
      'Park fees',
      'Lunch'
    ],
    notIncluded: [
      'Transportation',
      'Accommodation',
      'Personal expenses',
      'Tips'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Canopy Walk',
        description: 'Full day canopy walk experience in Nyungwe Forest.',
        activities: [
          'Forest walk',
          'Canopy walkway',
          'Lunch',
          'Return hike'
        ]
      }
    ],
    category: 'Adventure',
    bestTimeToVisit: 'June to September (Dry Season)',
    featured: true
  },
  {
    id: 'lake-kivu',
    title: 'Lake Kivu Adventure',
    description: 'Enjoy water sports and island hopping on Lake Kivu, one of Africa\'s Great Lakes.',
    image: '/images/tours/Visit-Rwanda_-Lake-Kivu-Kayak-to-Islands-1-700x394_21.jpg',
    gallery: [
      '/images/tours/Visit-Rwanda_-Lake-Kivu-Kayak-to-Islands-1-700x394_21.jpg',
      '/images/tours/Visit-Rwanda_-Lake-Kivu-Drone-of-Islands-700x525_23.jpg',
      '/images/tours/Visit-Rwanda-Rubavu-Beach-Credit-Jule-Lumma-700x467_21.jpg'
    ],
    videos: [],
    view360: [],
    highlights: [
      'Kayaking',
      'Boat tours',
      'Island hopping',
      'Beach activities'
    ],
    duration: '1 Day',
    location: {
      name: 'KN2st 56 AVE',
      description: 'One of Africa\'s Great Lakes, offering beautiful beaches and water sports',
      coordinates: {
        latitude: -2.0000,
        longitude: 29.0000
      }
    },
    groupSize: 'Max 12 people',
    difficulty: 'Moderate',
    price: 400,
    included: [
      'Professional guide',
      'Water sports equipment',
      'Boat tours',
      'Lunch'
    ],
    notIncluded: [
      'Transportation',
      'Accommodation',
      'Personal expenses',
      'Tips'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Lake Activities',
        description: 'Full day water sports and island hopping experience.',
        activities: [
          'Kayaking',
          'Boat tour',
          'Island visit',
          'Beach activities'
        ]
      }
    ],
    category: 'Adventure',
    bestTimeToVisit: 'Year-round',
    featured: false
  },
  {
    id: 'musanze-caves',
    title: 'Musanze Caves',
    description: 'Explore the underground caves in Musanze, discovering unique geological formations and local history.',
    image: '/images/tours/Musanze-Caves-700x466_21.jpg',
    gallery: [
      '/images/tours/Musanze-Caves-700x466_21.jpg',
      '/images/tours/Visit-Rwanda-Musanze-Drone-Sunset-700x525_22.jpg',
      '/images/tours/Visit-Rwanda-NH_OO_Drone_Resort_4857_MASTER-700x466.jpg'
    ],
    videos: [],
    view360: [],
    highlights: [
      'Cave exploration',
      'Geological formations',
      'Local history',
      'Professional guide'
    ],
    duration: '1 Day',
    location: {
      name: 'KN2st 56 AVE',
      description: 'A hassle-free and buzzing city with plenty of choice for activities',
      coordinates: {
        latitude: -1.5000,
        longitude: 29.6333
      }
    },
    groupSize: 'Max 12 people',
    difficulty: 'Moderate',
    price: 300,
    included: [
      'Professional guide',
      'Safety equipment',
      'Entrance fees',
      'Lunch'
    ],
    notIncluded: [
      'Transportation',
      'Accommodation',
      'Personal expenses',
      'Tips'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Cave Exploration',
        description: 'Full day cave exploration experience.',
        activities: [
          'Safety briefing',
          'Cave exploration',
          'Lunch',
          'Local market visit'
        ]
      }
    ],
    category: 'Adventure',
    bestTimeToVisit: 'Year-round',
    featured: false
  },
  {
    id: 'volcanoes-national-park',
    title: 'Volcanoes National Park',
    description: 'Explore the majestic Virunga Mountains and diverse ecosystems of Volcanoes National Park, home to mountain gorillas and golden monkeys.',
    image: '/images/tours/Visit-Rwanda-Bisate-11-700x467_22.jpg',
    gallery: [
      '/images/tours/Visit-Rwanda-Bisate-11-700x467_22.jpg',
      '/images/tours/Visit-Rwanda_-Volcanoes-National-Park-Silverback-in-Bamboo-1-700x467_23.jpg',
      '/images/tours/Visit-Rwanda-Musanze-Drone-Sunset-700x525_22.jpg'
    ],
    videos: [],
    view360: [],
    highlights: [
      'Hiking trails with stunning views',
      'Diverse flora and fauna',
      'Mountain climbing opportunities',
      'Cultural encounters with local communities',
      'Golden monkey tracking'
    ],
    duration: '2 Days',
    location: {
      name: 'KN2st 56 AVE',
      description: 'Home to endangered mountain gorillas and stunning volcanic landscapes',
      coordinates: {
        latitude: -1.4833,
        longitude: 29.5333
      }
    },
    groupSize: 'Max 12 people',
    difficulty: 'Challenging',
    price: 2000,
    included: [
      'Professional guide',
      'Park entrance fees',
      'Hiking permits',
      'Meals (breakfast, lunch, dinner)',
      'Water and snacks'
    ],
    notIncluded: [
      'Accommodation',
      'Transportation',
      'Personal expenses',
      'Tips',
      'Travel insurance'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Park Exploration and Hiking',
        description: 'Explore the park\'s trails and volcanic landscapes.',
        activities: [
          'Morning briefing and safety orientation',
          'Guided hiking through various trails',
          'Flora and fauna observation',
          'Visit to local communities',
          'Evening relaxation'
        ]
      },
      {
        day: 2,
        title: 'Golden Monkey Tracking',
        description: 'Track golden monkeys and explore more park attractions.',
        activities: [
          'Early morning golden monkey tracking',
          'Lunch break',
          'Visit to twin lakes',
          'Cultural experience'
        ]
      }
    ],
    category: 'Nature',
    bestTimeToVisit: 'June to September (Dry Season) or December to February',
    featured: true
  }
]; 