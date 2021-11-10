export type mouthType =
  | 'bored'
  | 'discomfort'
  | 'dumbfounded'
  | 'grin'
  | 'jovial'
  | 'phoneme-vuh'
  | 'rage'
  | 'small-grin'
  | 'tongue-out';

export const apecessoriesMouthType = {
  bored: 'bored',
  discomfort: 'discomfort',
  dumbfounded: 'dumbfounded',
  grin: 'grin',
  jovial: 'jovial',
  phonemeVuh: 'phoneme-vuh',
  rage: 'rage',
  smallGrin: 'small-grin',
  tongueOut: 'tongue-out'
};

export const mouthMapping = [
  { originalMouthType: 'Bored', apecessoriesMouthType: apecessoriesMouthType.bored },
  { originalMouthType: 'Discomfort', apecessoriesMouthType: apecessoriesMouthType.discomfort },
  { originalMouthType: 'Dumbfounded', apecessoriesMouthType: apecessoriesMouthType.dumbfounded },
  { originalMouthType: 'Grin', apecessoriesMouthType: apecessoriesMouthType.grin },
  { originalMouthType: 'Jovial', apecessoriesMouthType: apecessoriesMouthType.jovial },
  { originalMouthType: 'Phoneme Vuh', apecessoriesMouthType: apecessoriesMouthType.phonemeVuh },
  { originalMouthType: 'Small Grin', apecessoriesMouthType: apecessoriesMouthType.smallGrin },
  { originalMouthType: 'Tongue Out', apecessoriesMouthType: apecessoriesMouthType.tongueOut },
  { originalMouthType: 'Rage', apecessoriesMouthType: apecessoriesMouthType.rage },
  { originalMouthType: 'Bored Unshaven', apecessoriesMouthType: apecessoriesMouthType.bored },
  { originalMouthType: 'Bored Cigarette', apecessoriesMouthType: apecessoriesMouthType.bored },
  {
    originalMouthType: 'Bored Unshaven Cigarette',
    apecessoriesMouthType: apecessoriesMouthType.bored
  },
  { originalMouthType: 'Phoneme ooo', apecessoriesMouthType: apecessoriesMouthType.phonemeVuh },
  { originalMouthType: 'Phoneme L', apecessoriesMouthType: apecessoriesMouthType.phonemeVuh },
  { originalMouthType: 'Phoneme Oh', apecessoriesMouthType: apecessoriesMouthType.phonemeVuh },
  { originalMouthType: 'Phoneme Wah', apecessoriesMouthType: apecessoriesMouthType.phonemeVuh },
  { originalMouthType: 'Bored Pipe', apecessoriesMouthType: apecessoriesMouthType.bored },
  { originalMouthType: 'Bored Cigar', apecessoriesMouthType: apecessoriesMouthType.bored },
  { originalMouthType: 'Bored Bubblegum', apecessoriesMouthType: apecessoriesMouthType.bored },
  { originalMouthType: 'Grin Multicolored', apecessoriesMouthType: apecessoriesMouthType.grin },
  { originalMouthType: 'Bored Unshaven Pipe', apecessoriesMouthType: apecessoriesMouthType.bored },
  { originalMouthType: 'Bored Unshaven Cigar', apecessoriesMouthType: apecessoriesMouthType.bored },
  { originalMouthType: 'Grin Gold Grill', apecessoriesMouthType: apecessoriesMouthType.grin },
  { originalMouthType: 'Bored Party Horn', apecessoriesMouthType: apecessoriesMouthType.bored },
  { originalMouthType: 'Grin Diamond Grill', apecessoriesMouthType: apecessoriesMouthType.grin },
  { originalMouthType: 'Bored Kazoo', apecessoriesMouthType: apecessoriesMouthType.bored },
  {
    originalMouthType: 'Bored Unshaven Bubblegum',
    apecessoriesMouthType: apecessoriesMouthType.bored
  },
  { originalMouthType: 'Bored Unshaven Kazoo', apecessoriesMouthType: apecessoriesMouthType.bored },
  { originalMouthType: 'Bored Pizza', apecessoriesMouthType: apecessoriesMouthType.bored },
  { originalMouthType: 'Bored Dagger', apecessoriesMouthType: apecessoriesMouthType.bored },
  {
    originalMouthType: 'Bored Unshaven Party horn',
    apecessoriesMouthType: apecessoriesMouthType.bored
  },
  {
    originalMouthType: 'Bored Unshaven Dagger',
    apecessoriesMouthType: apecessoriesMouthType.bored
  },
  { originalMouthType: 'Bored Unshaven Pizza', apecessoriesMouthType: apecessoriesMouthType.bored }
];

export type grillsMetadataType = {
  name: string;
  description: string;
  image: string;
  dna: string;
  edition: number;
  date: number;
  mouth: string;
  price: number;
  attributes: {
    trait_type: string;
    value: string;
  }[];
}[];

export const grillsMetadata: grillsMetadataType = [
  {
    name: 'Grill #1',
    description: 'Collection of NFT grills for your bored apes',
    image: '1.png',
    dna: 'a8d6ffa349fd27b3be266c9855ba3708b75f5d80',
    edition: 1,
    date: 1636433262551,
    mouth: apecessoriesMouthType.grin,
    price: 0.2,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'grin'
      },
      {
        trait_type: 'Inner fill',
        value: 'Red'
      },
      {
        trait_type: 'Outer Fill',
        value: 'Yellow'
      }
    ]
  },
  {
    name: 'Grill #2',
    description: 'Collection of NFT grills for your bored apes',
    image: '2.png',
    dna: 'a8d6ffa349fd27b3be266c9855ba3708b75f5d80',
    edition: 2,
    date: 1636433262551,
    mouth: apecessoriesMouthType.grin,
    price: 0.7,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'grin'
      },
      {
        trait_type: 'Inner fill',
        value: 'Hacky'
      },
      {
        trait_type: 'Outer Fill',
        value: 'Yellow'
      }
    ]
  },
  {
    name: 'Grill #9',
    description: 'Collection of NFT grills for your bored apes',
    image: '9.png',
    dna: 'a8d6ffa349fd27b3be266c9855ba3708b75f5d80',
    edition: 9,
    date: 1636433262551,
    mouth: apecessoriesMouthType.grin,
    price: 0.5,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'grin'
      },
      {
        trait_type: 'Inner fill',
        value: 'Red'
      },
      {
        trait_type: 'Outer Fill',
        value: 'Yellow'
      }
    ]
  },
  {
    name: 'Grill #10',
    description: 'Collection of NFT grills for your bored apes',
    image: '10.png',
    dna: 'a8d6ffa349fd27b3be266c9855ba3708b75f5d80',
    edition: 10,
    date: 1636433262551,
    mouth: apecessoriesMouthType.grin,
    price: 0.23,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'grin'
      },
      {
        trait_type: 'Inner fill',
        value: 'Hacky'
      },
      {
        trait_type: 'Outer Fill',
        value: 'Yellow'
      }
    ]
  },
  {
    name: 'Grill #11',
    description: 'Collection of NFT grills for your bored apes',
    image: '11.png',
    dna: 'a8d6ffa349fd27b3be266c9855ba3708b75f5d80',
    edition: 11,
    date: 1636433262551,
    mouth: apecessoriesMouthType.grin,
    price: 0.6,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'grin'
      },
      {
        trait_type: 'Inner fill',
        value: 'Red'
      },
      {
        trait_type: 'Outer Fill',
        value: 'Yellow'
      }
    ]
  },
  {
    name: 'Grill #12',
    description: 'Collection of NFT grills for your bored apes',
    image: '12.png',
    dna: 'a8d6ffa349fd27b3be266c9855ba3708b75f5d80',
    edition: 12,
    date: 1636433262551,
    mouth: apecessoriesMouthType.grin,
    price: 0.5,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'grin'
      },
      {
        trait_type: 'Inner fill',
        value: 'Hacky'
      },
      {
        trait_type: 'Outer Fill',
        value: 'Yellow'
      }
    ]
  },
  {
    name: 'Grill #3',
    description: 'Collection of NFT grills for your bored apes',
    image: '3.png',
    dna: 'a8d6ffa349fd27b3be266c9855ba3708b75f5d80',
    edition: 3,
    date: 1636433262551,
    mouth: apecessoriesMouthType.phonemeVuh,
    price: 0.2,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'phoneme-vuh'
      },
      {
        trait_type: 'Inner fill',
        value: 'Red'
      },
      {
        trait_type: 'Outer Fill',
        value: 'Yellow'
      }
    ]
  },
  {
    name: 'Grill #4',
    description: 'Collection of NFT grills for your bored apes',
    image: '4.png',
    dna: 'a8d6ffa349fd27b3be266c9855ba3708b75f5d80',
    edition: 4,
    date: 1636433262551,
    mouth: apecessoriesMouthType.phonemeVuh,
    price: 1.8,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'phoneme-vuh'
      },
      {
        trait_type: 'Inner fill',
        value: 'Red'
      },
      {
        trait_type: 'Outer Fill',
        value: 'Yellow'
      }
    ]
  },
  {
    name: 'Grill #13',
    description: 'Collection of NFT grills for your bored apes',
    image: '13.png',
    dna: 'a8d6ffa349fd27b3be266c9855ba3708b75f5d80',
    edition: 13,
    date: 1636433262551,
    mouth: apecessoriesMouthType.phonemeVuh,
    price: 1.2,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'phoneme-vuh'
      },
      {
        trait_type: 'Inner fill',
        value: 'Red'
      },
      {
        trait_type: 'Outer Fill',
        value: 'Yellow'
      }
    ]
  },
  {
    name: 'Grill #14',
    description: 'Collection of NFT grills for your bored apes',
    image: '14.png',
    dna: 'a8d6ffa349fd27b3be266c9855ba3708b75f5d80',
    edition: 14,
    date: 1636433262551,
    mouth: apecessoriesMouthType.phonemeVuh,
    price: 0.3,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'phoneme-vuh'
      },
      {
        trait_type: 'Inner fill',
        value: 'Red'
      },
      {
        trait_type: 'Outer Fill',
        value: 'Yellow'
      }
    ]
  },
  {
    name: 'Grill #15',
    description: 'Collection of NFT grills for your bored apes',
    image: '15.png',
    dna: 'a8d6ffa349fd27b3be266c9855ba3708b75f5d80',
    edition: 15,
    date: 1636433262551,
    mouth: apecessoriesMouthType.phonemeVuh,
    price: 0.8,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'phoneme-vuh'
      },
      {
        trait_type: 'Inner fill',
        value: 'Red'
      },
      {
        trait_type: 'Outer Fill',
        value: 'Yellow'
      }
    ]
  },
  {
    name: 'Grill #16',
    description: 'Collection of NFT grills for your bored apes',
    image: '16.png',
    dna: 'a8d6ffa349fd27b3be266c9855ba3708b75f5d80',
    edition: 16,
    date: 1636433262551,
    mouth: apecessoriesMouthType.phonemeVuh,
    price: 0.27,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'phoneme-vuh'
      },
      {
        trait_type: 'Inner fill',
        value: 'Red'
      },
      {
        trait_type: 'Outer Fill',
        value: 'Yellow'
      }
    ]
  },
  {
    name: 'Grill #5',
    description: 'Collection of NFT grills for your bored apes',
    image: '5.png',
    dna: 'a8d6ffa349fd27b3be266c9855ba3708b75f5d80',
    edition: 5,
    date: 1636433262551,
    mouth: apecessoriesMouthType.rage,
    price: 0.4,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'rage'
      },
      {
        trait_type: 'Inner fill',
        value: 'Red'
      },
      {
        trait_type: 'Outer Fill',
        value: 'Yellow'
      }
    ]
  },
  {
    name: 'Grill #6',
    description: 'Collection of NFT grills for your bored apes',
    image: '6.png',
    dna: 'a8d6ffa349fd27b3be266c9855ba3708b75f5d80',
    edition: 6,
    date: 1636433262551,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'rage'
      },
      {
        trait_type: 'Inner fill',
        value: 'Red'
      },
      {
        trait_type: 'Outer Fill',
        value: 'Yellow'
      }
    ]
  },
  {
    name: 'Grill #17',
    description: 'Collection of NFT grills for your bored apes',
    image: '17.png',
    dna: 'a8d6ffa349fd27b3be266c9855ba3708b75f5d80',
    edition: 17,
    date: 1636433262551,
    mouth: apecessoriesMouthType.rage,
    price: 0.25,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'rage'
      },
      {
        trait_type: 'Inner fill',
        value: 'Red'
      },
      {
        trait_type: 'Outer Fill',
        value: 'Yellow'
      }
    ]
  },
  {
    name: 'Grill #18',
    description: 'Collection of NFT grills for your bored apes',
    image: '18.png',
    dna: 'a8d6ffa349fd27b3be266c9855ba3708b75f5d80',
    edition: 18,
    date: 1636433262551,
    mouth: apecessoriesMouthType.rage,
    price: 0.3,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'rage'
      },
      {
        trait_type: 'Inner fill',
        value: 'Red'
      },
      {
        trait_type: 'Outer Fill',
        value: 'Yellow'
      }
    ]
  },
  {
    name: 'Grill #19',
    description: 'Collection of NFT grills for your bored apes',
    image: '19.png',
    dna: 'a8d6ffa349fd27b3be266c9855ba3708b75f5d80',
    edition: 19,
    date: 1636433262551,
    mouth: apecessoriesMouthType.rage,
    price: 0.5,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'rage'
      },
      {
        trait_type: 'Inner fill',
        value: 'Red'
      },
      {
        trait_type: 'Outer Fill',
        value: 'Yellow'
      }
    ]
  },
  {
    name: 'Grill #20',
    description: 'Collection of NFT grills for your bored apes',
    image: '20.png',
    dna: 'a8d6ffa349fd27b3be266c9855ba3708b75f5d80',
    edition: 20,
    date: 1636433262551,
    mouth: apecessoriesMouthType.rage,
    price: 0.6,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'rage'
      },
      {
        trait_type: 'Inner fill',
        value: 'Red'
      },
      {
        trait_type: 'Outer Fill',
        value: 'Yellow'
      }
    ]
  },
  {
    name: 'Grill #7',
    description: 'Collection of NFT grills for your bored apes',
    image: '7.png',
    dna: 'a8d6ffa349fd27b3be266c9855ba3708b75f5d80',
    edition: 7,
    date: 1636433262551,
    mouth: apecessoriesMouthType.smallGrin,
    price: 0.1,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'small-grin'
      },
      {
        trait_type: 'Inner fill',
        value: 'Red'
      },
      {
        trait_type: 'Outer Fill',
        value: 'Yellow'
      }
    ]
  },
  {
    name: 'Grill #8',
    description: 'Collection of NFT grills for your bored apes',
    image: '8.png',
    dna: 'a8d6ffa349fd27b3be266c9855ba3708b75f5d80',
    edition: 8,
    date: 1636433262551,
    mouth: apecessoriesMouthType.smallGrin,
    price: 0.5,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'small-grin'
      },
      {
        trait_type: 'Inner fill',
        value: 'Red'
      },
      {
        trait_type: 'Outer Fill',
        value: 'Yellow'
      }
    ]
  },
  {
    name: 'Grill #21',
    description: 'Collection of NFT grills for your bored apes',
    image: '21.png',
    dna: 'a8d6ffa349fd27b3be266c9855ba3708b75f5d80',
    edition: 21,
    date: 1636433262551,
    mouth: apecessoriesMouthType.smallGrin,
    price: 0.4,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'small-grin'
      },
      {
        trait_type: 'Inner fill',
        value: 'Red'
      },
      {
        trait_type: 'Outer Fill',
        value: 'Yellow'
      }
    ]
  },
  {
    name: 'Grill #22',
    description: 'Collection of NFT grills for your bored apes',
    image: '22.png',
    dna: 'a8d6ffa349fd27b3be266c9855ba3708b75f5d80',
    edition: 22,
    date: 1636433262551,
    mouth: apecessoriesMouthType.smallGrin,
    price: 0.2,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'small-grin'
      },
      {
        trait_type: 'Inner fill',
        value: 'Red'
      },
      {
        trait_type: 'Outer Fill',
        value: 'Yellow'
      }
    ]
  },
  {
    name: 'Grill #23',
    description: 'Collection of NFT grills for your bored apes',
    image: '23.png',
    dna: 'a8d6ffa349fd27b3be266c9855ba3708b75f5d80',
    edition: 23,
    date: 1636433262551,
    mouth: apecessoriesMouthType.smallGrin,
    price: 0.3,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'small-grin'
      },
      {
        trait_type: 'Inner fill',
        value: 'Red'
      },
      {
        trait_type: 'Outer Fill',
        value: 'Yellow'
      }
    ]
  },
  {
    name: 'Grill #24',
    description: 'Collection of NFT grills for your bored apes',
    image: '24.png',
    dna: 'a8d6ffa349fd27b3be266c9855ba3708b75f5d80',
    edition: 24,
    date: 1636433262551,
    mouth: apecessoriesMouthType.smallGrin,
    price: 0.2,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'small-grin'
      },
      {
        trait_type: 'Inner fill',
        value: 'Red'
      },
      {
        trait_type: 'Outer Fill',
        value: 'Yellow'
      }
    ]
  }
];
