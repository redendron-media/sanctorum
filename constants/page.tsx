import { PricingCardProps } from "@/lib/types";

export const individual: PricingCardProps[]= [
  {
    title: "Daily",
    price: "450",
    amenities: [
      "Common Area (Shared)",
      "Hi-speed Internet",
      "Unlimited Coffee",
      "24 Hours Validity",
    ],
    type:"Individual",
    link:'https://tidycal.com/sanctorumcoworking/individual-daily-plan'
  },
  {
    title: "Monthly",
    price: "4000",
    alternate: true, 
    amenities: [
      "Dedicated Desk","Hi-speed Internet",
      "Unlimited Coffee",
      "Premium Office Address","5 hrs Meeting Room","30 days Validity"
    ],
     type:"Individual",
     link:'https://tidycal.com/sanctorumcoworking/monthly-individual-plan'
  },
  {
    title: "Weekly",
    price: "1500",
    amenities: [
      "Common Area (Shared)",
      "Hi-speed Internet",
      "Unlimited Coffee",
      "3 hrs Meeting Room",
      "7 days Validity",
    ],
     type:"Individual",
     link:'https://tidycal.com/sanctorumcoworking/individual-weekly-plan'
  },
];

export const team: PricingCardProps[]= [
    {
      title: "Weekly",
      price: "6000",
      amenities: [
        "Common Area (Shared)",
        "Hi-speed Internet",
        "Unlimited Coffee",
        "3 hrs Meeting Room",
        "7 days Validity",
      ],
      type: 'Team',
      link:'https://tidycal.com/sanctorumcoworking/team-weekly-plan'
    },
    {
      title: "Monthly",
      price: "15000",
      alternate: true, 
      amenities: [
        "Dedicated Desk","Hi-speed Internet",
        "Unlimited Coffee",
        "Premium Office Address","9 hrs Meeting Room","30 days Validity"
      ],
      type: 'Team',
      link:'https://tidycal.com/sanctorumcoworking/team-monthly-plan'
    },
    {
      title: "Quarterly",
      price: "40000",
      amenities: [
        "Dedicated Desk","Hi-speed Internet",
        "Unlimited Coffee",
        "Premium Office Address","18 hrs Meeting Room",
      ],
      type: 'Team',
      link:'https://tidycal.com/sanctorumcoworking/team-monthly-plan'
    },
  ];

export const meetingRoom: PricingCardProps[] = [
    {
        title: "Hourly",
        price: "500",
        amenities: [
          "Podcasting Setup",
          "Multipurpose Display",
          "Hi-speed Internet",
          "Unlimited Coffee",
        ],
        type:"Meeting",
        link:'https://tidycal.com/sanctorumcoworking/multipurpose-room-hourly-plan'
      },
      {
        title: "Daily",
        price: "2000",
        alternate: true, 
        amenities: [
            "Podcasting Setup",
            "Multipurpose Display",
            "Hi-speed Internet",
            "Unlimited Coffee",
          ],
          type:"Meeting",
          link:'https://tidycal.com/sanctorumcoworking/multipurpose-room-daily-plan',
      },
]

export const amenities = [
  {
    title:'Hi-Speed Internet',
    image: 'internet',
    desc: 'Work without interruptions.'
  },
  {
    title:'Unlimited Coffee',
    image: 'coffee',
    desc: 'Fresh brews. Always available.'
  },
  {
    title:'Common Area',
    image: 'common',
    desc: 'A welcoming shared space with comfortable seating.'
  },
  {
    title:'Premium Address',
    image: 'address',
    desc: 'A professional address for your business.'
  },
  {
    title:'Library',
    image: 'library',
    desc: 'A personal library with handpicked reads.'
  },
  {
    title:'Meeting Room',
    image: 'meeting',
    desc: 'A multi-purpose room equipped for your next big idea.'
  },
  {
    title:'Dedicated Desks',
    image: 'desk',
    desc: 'Reserved spots for uninterrupted work.'
  },
  {
    title:'Podcasting Setup',
    image: 'podcast',
    desc: 'Record and create with ease.'
  },
]