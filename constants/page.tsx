import { PricingCardProps } from "@/lib/types";

export const individual: PricingCardProps[]= [
  {
    title: "Daily",
    price: "450",
    amenities: [
      "Common Area (Shared)",
      "Hi-speed Internet",
      "Unlimited Free Coffee",
      "24 Hours Validity",
    ],
  },
  {
    title: "Monthly",
    price: "6000",
    alternate: true, 
    amenities: [
      "Dedicated Desk","Hi-speed Internet",
      "Unlimited Free Coffee",
      "Free Office Address","5 hrs Meeting Room","30 days Validity"
    ],
  },
  {
    title: "Weekly",
    price: "1000",
    amenities: [
      "Common Area (Shared)",
      "Hi-speed Internet",
      "Unlimited Free Coffee",
      "3 hrs Meeting Room",
      "7 days Validity",
    ],
  },
];

export const team: PricingCardProps[]= [
    {
      title: "Weekly",
      price: "6000",
      amenities: [
        "Common Area (Shared)",
        "Hi-speed Internet",
        "Unlimited Free Coffee",
        "3 hrs Meeting Room",
        "7 days Validity",
      ],
    },
    {
      title: "Monthly",
      price: "15000",
      alternate: true, 
      amenities: [
        "Dedicated Desk","Hi-speed Internet",
        "Unlimited Free Coffee",
        "Free Office Address","8 hrs Meeting Room","30 days Validity"
      ],
    },
    {
      title: "Quarterly",
      price: "40000",
      amenities: [
        "Dedicated Desk","Hi-speed Internet",
        "Unlimited Free Coffee",
        "Free Office Address","20 hrs Meeting Room",
      ],
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
          "Unlimited Free Coffee",
       
        ],
      },
      {
        title: "Daily",
        price: "4500",
        alternate: true, 
        amenities: [
            "Podcasting Setup",
            "Multipurpose Display",
            "Hi-speed Internet",
            "Unlimited Free Coffee",
          ],
      },
]

export const amenities = [
  {
    title:'Library',
    icon: 'ph:books-duotone',
    desc: 'A peaceful corner stacked with handpicked reads'
  },
  {
    title:'Coffee',
    icon: 'tabler:coffee',
    desc: 'To keep you going'
  },
  {
    title:'Wifi',
    icon: 'uil:wifi',
    desc: 'High speed internet'
  },
  {
    title:'Mic',
    icon: 'mingcute:mic-line',
    desc: 'Professional audio equipment when you need it'
  },
  {
    title:'Meeting Rooms',
    icon: 'guidance:meeting-room',
    desc: 'Privacy and quiet for focused work'
  },
]