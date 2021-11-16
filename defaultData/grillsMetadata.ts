export type mouthType =
  | 'bored'
  | 'discomfort'
  | 'dumbfounded'
  | 'grin'
  | 'jovial'
  | 'phoneme-vuh'
  | 'phoneme-ooo'
  | 'phoneme-l'
  | 'phoneme-oh'
  | 'phoneme-wah'
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
  phonemeOoo: 'phoneme-ooo',
  phonemeL: 'phoneme-l',
  phonemeOh: 'phoneme-oh',
  phonemeWah: 'phoneme-Wah',
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
  { originalMouthType: 'Phoneme ooo', apecessoriesMouthType: apecessoriesMouthType.phonemeOoo },
  { originalMouthType: 'Phoneme L', apecessoriesMouthType: apecessoriesMouthType.phonemeL },
  { originalMouthType: 'Phoneme Oh', apecessoriesMouthType: apecessoriesMouthType.phonemeOh },
  { originalMouthType: 'Phoneme Wah', apecessoriesMouthType: apecessoriesMouthType.phonemeWah },
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
    name: 'Grill #98',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/98.png',
    dna: '78322e0406d3f7bf4ed8ec56043db2eaa5e3015c',
    edition: 98,
    date: 1637041662782,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Black'
      },
      {
        trait_type: 'Outer fill',
        value: 'Spiral'
      },
      {
        trait_type: 'Inner fill',
        value: 'Tie-Dye'
      }
    ]
  },
  {
    name: 'Grill #48',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/48.png',
    dna: 'dc3744e98ff18388a3b47e77c9ee667006e2a861',
    edition: 48,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041662898,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Tye'
      },
      {
        trait_type: 'Outer fill',
        value: 'Spiral'
      },
      {
        trait_type: 'Inner fill',
        value: 'APE'
      }
    ]
  },
  {
    name: 'Grill #88',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/88.png',
    dna: '6369302ae306c4b7642cd2cc74cb397306eca5ba',
    edition: 88,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041662990,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Tye'
      },
      {
        trait_type: 'Outer fill',
        value: 'Spiral'
      },
      {
        trait_type: 'Inner fill',
        value: 'Lepard-Print'
      }
    ]
  },
  {
    name: 'Grill #92',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/92.png',
    dna: '6efe712233f34894b6f4d8607985c3053f6287f5',
    edition: 92,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041663090,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Black'
      },
      {
        trait_type: 'Outer fill',
        value: 'Ice'
      },
      {
        trait_type: 'Inner fill',
        value: 'Rainbow'
      }
    ]
  },
  {
    name: 'Grill #95',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/95.png',
    dna: '628dfd00642420f2f9807d103a38e2b74d9ae3fa',
    edition: 95,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041663205,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Pastel'
      },
      {
        trait_type: 'Outer fill',
        value: 'Spiral'
      },
      {
        trait_type: 'Inner fill',
        value: 'APE'
      }
    ]
  },
  {
    name: 'Grill #90',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/90.png',
    dna: 'a366cc25bdf74b44fc51a7d81a5a7ab770afd6e4',
    edition: 90,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041663320,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Black'
      },
      {
        trait_type: 'Outer fill',
        value: 'Leopard'
      },
      {
        trait_type: 'Inner fill',
        value: 'APE'
      }
    ]
  },
  {
    name: 'Grill #23',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/23.png',
    dna: 'ca4d3724dcc0d94054ffa1e533686010e8aaae17',
    edition: 23,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041663424,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Black'
      },
      {
        trait_type: 'Outer fill',
        value: 'Pastel'
      },
      {
        trait_type: 'Inner fill',
        value: 'Rainbow'
      }
    ]
  },
  {
    name: 'Grill #5',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/5.png',
    dna: '599d432d0145d7b0eb5ff8da0579673be3db94b4',
    edition: 5,

    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041663542,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Pastel'
      },
      {
        trait_type: 'Outer fill',
        value: 'Cow'
      },
      {
        trait_type: 'Inner fill',
        value: 'Rainbow'
      }
    ]
  },
  {
    name: 'Grill #38',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/38.png',
    dna: '4effba2d48cb9e4bf83156511a66194025657308',
    edition: 38,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041663664,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Tye'
      },
      {
        trait_type: 'Outer fill',
        value: 'Ice'
      },
      {
        trait_type: 'Inner fill',
        value: 'Swirl'
      }
    ]
  },
  {
    name: 'Grill #50',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/50.png',
    dna: 'eea3dc7027c3235c4c5557c6c42cffb362e5d86c',
    edition: 50,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041663785,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Black'
      },
      {
        trait_type: 'Outer fill',
        value: 'Gold'
      },
      {
        trait_type: 'Inner fill',
        value: 'Tie-Dye'
      }
    ]
  },
  {
    name: 'Grill #66',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/66.png',
    dna: 'd1913752ff687376acfb01002e1f75cddf610557',
    edition: 66,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041663925,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Gold'
      },
      {
        trait_type: 'Outer fill',
        value: 'Spiral'
      },
      {
        trait_type: 'Inner fill',
        value: 'Rainbow'
      }
    ]
  },
  {
    name: 'Grill #30',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/30.png',
    dna: '0ba054ea1c4209dec19715b9369e13e41be54841',
    edition: 30,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041664124,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Pastel'
      },
      {
        trait_type: 'Outer fill',
        value: 'Spiral'
      },
      {
        trait_type: 'Inner fill',
        value: 'Rainbow'
      }
    ]
  },
  {
    name: 'Grill #36',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/36.png',
    dna: '59e76084ec64ee6b678ba27c6e08ed7905e010e4',
    edition: 36,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041664501,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Black'
      },
      {
        trait_type: 'Outer fill',
        value: 'Pastel'
      },
      {
        trait_type: 'Inner fill',
        value: 'Lepard-Print'
      }
    ]
  },
  {
    name: 'Grill #20',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/20.png',
    dna: '37b1f148bfcbcd0df78c9d064c680fb9b54992d3',
    edition: 20,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041664615,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Gold'
      },
      {
        trait_type: 'Outer fill',
        value: 'Spiral'
      },
      {
        trait_type: 'Inner fill',
        value: 'Tie-Dye'
      }
    ]
  },
  {
    name: 'Grill #55',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/55.png',
    dna: 'a129942fa04581e0c4821fb80d6cb98ecab18fd9',
    edition: 55,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041664729,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Gold'
      },
      {
        trait_type: 'Outer fill',
        value: 'Leopard'
      },
      {
        trait_type: 'Inner fill',
        value: 'Lepard-Print'
      }
    ]
  },
  {
    name: 'Grill #33',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/33.png',
    dna: 'a8e04dc9fba752fc8ed7fe119c27f1d91306a969',
    edition: 33,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041664822,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Gold'
      },
      {
        trait_type: 'Outer fill',
        value: 'Gold'
      },
      {
        trait_type: 'Inner fill',
        value: 'Rainbow'
      }
    ]
  },
  {
    name: 'Grill #31',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/31.png',
    dna: 'df68623a0fa1a32c40fdb76039a52421cf153f97',
    edition: 31,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041664915,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Pastel'
      },
      {
        trait_type: 'Outer fill',
        value: 'Leopard'
      },
      {
        trait_type: 'Inner fill',
        value: 'APE'
      }
    ]
  },
  {
    name: 'Grill #13',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/13.png',
    dna: '9f996867a34592d455f4da8f287e361f5448dd94',
    edition: 13,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041665005,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Gold'
      },
      {
        trait_type: 'Outer fill',
        value: 'Ice'
      },
      {
        trait_type: 'Inner fill',
        value: 'Swirl'
      }
    ]
  },
  {
    name: 'Grill #85',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/85.png',
    dna: '1aab11a9f58621cc79accc3bf4bcc2b68968f035',
    edition: 85,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041665095,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Black'
      },
      {
        trait_type: 'Outer fill',
        value: 'Ice'
      },
      {
        trait_type: 'Inner fill',
        value: 'APE'
      }
    ]
  },
  {
    name: 'Grill #26',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/26.png',
    dna: '98ba337cfa8222831597330141a2285e1b004ab1',
    edition: 26,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041665183,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Black'
      },
      {
        trait_type: 'Outer fill',
        value: 'Gold'
      },
      {
        trait_type: 'Inner fill',
        value: 'Rainbow'
      }
    ]
  },
  {
    name: 'Grill #14',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/14.png',
    dna: '708a64f0a4ac7a591e98ec8098ac8d45b849dbf4',
    edition: 14,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041665278,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Tye'
      },
      {
        trait_type: 'Outer fill',
        value: 'Pastel'
      },
      {
        trait_type: 'Inner fill',
        value: 'Rainbow'
      }
    ]
  },
  {
    name: 'Grill #17',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/17.png',
    dna: '1ff049cb6cc82b91fc8f1dca7ccec8772e4984ea',
    edition: 17,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041665394,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Tye'
      },
      {
        trait_type: 'Outer fill',
        value: 'Leopard'
      },
      {
        trait_type: 'Inner fill',
        value: 'Lepard-Print'
      }
    ]
  },
  {
    name: 'Grill #21',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/21.png',
    dna: '29fc146edc9045c667c60a0cec3d9fbd40cc4a26',
    edition: 21,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041665492,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Black'
      },
      {
        trait_type: 'Outer fill',
        value: 'Cow'
      },
      {
        trait_type: 'Inner fill',
        value: 'Swirl'
      }
    ]
  },
  {
    name: 'Grill #80',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/80.png',
    dna: 'd1d402aa01dc61e2ebd075e3e1ae7b288deb229e',
    edition: 80,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041665595,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Tye'
      },
      {
        trait_type: 'Outer fill',
        value: 'Cow'
      },
      {
        trait_type: 'Inner fill',
        value: 'Rainbow'
      }
    ]
  },
  {
    name: 'Grill #77',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/77.png',
    dna: '5a9f6ef1a26dda3008129291a6b03beea3e85e45',
    edition: 77,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041665687,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Pastel'
      },
      {
        trait_type: 'Outer fill',
        value: 'Gold'
      },
      {
        trait_type: 'Inner fill',
        value: 'Lepard-Print'
      }
    ]
  },
  {
    name: 'Grill #10',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/10.png',
    dna: '567c0adfdf79f02897adde0d7ff8071e600f2ef5',
    edition: 10,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041665775,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Gold'
      },
      {
        trait_type: 'Outer fill',
        value: 'Pastel'
      },
      {
        trait_type: 'Inner fill',
        value: 'Rainbow'
      }
    ]
  },
  {
    name: 'Grill #68',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/68.png',
    dna: 'de8b220b006c045f1937ec017a1d8b46ae0b94bf',
    edition: 68,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041665874,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Black'
      },
      {
        trait_type: 'Outer fill',
        value: 'Pastel'
      },
      {
        trait_type: 'Inner fill',
        value: 'Tie-Dye'
      }
    ]
  },
  {
    name: 'Grill #59',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/59.png',
    dna: '8a399b8ad2b27fef1278c58300428654331c1bfd',
    edition: 59,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041665965,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Pastel'
      },
      {
        trait_type: 'Outer fill',
        value: 'Pastel'
      },
      {
        trait_type: 'Inner fill',
        value: 'APE'
      }
    ]
  },
  {
    name: 'Grill #57',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/57.png',
    dna: 'e3dda5fc82b703736021710100fc1c27a63ad2d7',
    edition: 57,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041666058,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Gold'
      },
      {
        trait_type: 'Outer fill',
        value: 'Ice'
      },
      {
        trait_type: 'Inner fill',
        value: 'Rainbow'
      }
    ]
  },
  {
    name: 'Grill #40',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/40.png',
    dna: '6263ee5c3359b175bd4a26698e596c15ed07fd6d',
    edition: 40,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041666151,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Gold'
      },
      {
        trait_type: 'Outer fill',
        value: 'Ice'
      },
      {
        trait_type: 'Inner fill',
        value: 'Tie-Dye'
      }
    ]
  },
  {
    name: 'Grill #32',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/32.png',
    dna: 'f44cc014bf7bff94458451c87bf27aad79253d7a',
    edition: 32,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041666235,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Gold'
      },
      {
        trait_type: 'Outer fill',
        value: 'Pastel'
      },
      {
        trait_type: 'Inner fill',
        value: 'Swirl'
      }
    ]
  },
  {
    name: 'Grill #94',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/94.png',
    dna: '24e244c2b274c5d837edc0324a64f8453c6df0bf',
    edition: 94,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041666331,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Pastel'
      },
      {
        trait_type: 'Outer fill',
        value: 'Cow'
      },
      {
        trait_type: 'Inner fill',
        value: 'Tie-Dye'
      }
    ]
  },
  {
    name: 'Grill #78',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/78.png',
    dna: 'ad516380bc46f4fc34050e59153c374aa2c38f68',
    edition: 78,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041666451,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Tye'
      },
      {
        trait_type: 'Outer fill',
        value: 'Ice'
      },
      {
        trait_type: 'Inner fill',
        value: 'Rainbow'
      }
    ]
  },
  {
    name: 'Grill #93',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/93.png',
    dna: '98454fea6c97f41c4b6defdffcab85a1b6791fc6',
    edition: 93,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041666568,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Pastel'
      },
      {
        trait_type: 'Outer fill',
        value: 'Leopard'
      },
      {
        trait_type: 'Inner fill',
        value: 'Lepard-Print'
      }
    ]
  },
  {
    name: 'Grill #56',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/56.png',
    dna: 'df98a2022903af5ff825ce7ffb91d83cd782b23b',
    edition: 56,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041666667,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Tye'
      },
      {
        trait_type: 'Outer fill',
        value: 'Ice'
      },
      {
        trait_type: 'Inner fill',
        value: 'APE'
      }
    ]
  },
  {
    name: 'Grill #45',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/45.png',
    dna: '11e35cd1b0e92dccdee7f0398512e1f8509321a3',
    edition: 45,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041666958,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Pastel'
      },
      {
        trait_type: 'Outer fill',
        value: 'Gold'
      },
      {
        trait_type: 'Inner fill',
        value: 'Tie-Dye'
      }
    ]
  },
  {
    name: 'Grill #29',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/29.png',
    dna: 'e866d2b945e4707800da9230bf582dac501d4bab',
    edition: 29,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041667117,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Pastel'
      },
      {
        trait_type: 'Outer fill',
        value: 'Ice'
      },
      {
        trait_type: 'Inner fill',
        value: 'Rainbow'
      }
    ]
  },
  {
    name: 'Grill #62',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/62.png',
    dna: '691bca4e53369e1ddcc9d6231f8e3adbef345066',
    edition: 62,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041667263,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Pastel'
      },
      {
        trait_type: 'Outer fill',
        value: 'Pastel'
      },
      {
        trait_type: 'Inner fill',
        value: 'Rainbow'
      }
    ]
  },
  {
    name: 'Grill #81',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/81.png',
    dna: 'c93c4f0bda8fe5fef1ddc4984dc362af54230b48',
    edition: 81,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041667394,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Pastel'
      },
      {
        trait_type: 'Outer fill',
        value: 'Ice'
      },
      {
        trait_type: 'Inner fill',
        value: 'Tie-Dye'
      }
    ]
  },
  {
    name: 'Grill #41',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/41.png',
    dna: 'f6f38d04887c6c585874a7ec3131a8f4b6f8ee18',
    edition: 41,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041667483,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Pastel'
      },
      {
        trait_type: 'Outer fill',
        value: 'Spiral'
      },
      {
        trait_type: 'Inner fill',
        value: 'Tie-Dye'
      }
    ]
  },
  {
    name: 'Grill #46',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/46.png',
    dna: 'da7686a9ae781fdcb8752f3629cc5824ca359bd3',
    edition: 46,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041667567,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Pastel'
      },
      {
        trait_type: 'Outer fill',
        value: 'Pastel'
      },
      {
        trait_type: 'Inner fill',
        value: 'Lepard-Print'
      }
    ]
  },
  {
    name: 'Grill #42',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/42.png',
    dna: 'c2ca4e93b99b024da6c29606eedeb6a2161dc37f',
    edition: 42,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041667653,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Pastel'
      },
      {
        trait_type: 'Outer fill',
        value: 'Ice'
      },
      {
        trait_type: 'Inner fill',
        value: 'APE'
      }
    ]
  },
  {
    name: 'Grill #65',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/65.png',
    dna: '360e134cbd08c8663e09889f78d8ce58544c70fa',
    edition: 65,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041667762,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Gold'
      },
      {
        trait_type: 'Outer fill',
        value: 'Cow'
      },
      {
        trait_type: 'Inner fill',
        value: 'APE'
      }
    ]
  },
  {
    name: 'Grill #83',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/83.png',
    dna: '09ad08d4b8fc32d182ea00183e0bfbddfb3c4b11',
    edition: 83,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041667879,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Pastel'
      },
      {
        trait_type: 'Outer fill',
        value: 'Gold'
      },
      {
        trait_type: 'Inner fill',
        value: 'APE'
      }
    ]
  },
  {
    name: 'Grill #6',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/6.png',
    dna: '97fe5a6afa347ddf6966e366f60a3c48bf9b00a2',
    edition: 6,

    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041667959,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Gold'
      },
      {
        trait_type: 'Outer fill',
        value: 'Leopard'
      },
      {
        trait_type: 'Inner fill',
        value: 'Rainbow'
      }
    ]
  },
  {
    name: 'Grill #19',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/19.png',
    dna: '67526dffe4836bc136a4215df05f27c109c45104',
    edition: 19,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041668035,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Tye'
      },
      {
        trait_type: 'Outer fill',
        value: 'Cow'
      },
      {
        trait_type: 'Inner fill',
        value: 'Tie-Dye'
      }
    ]
  },
  {
    name: 'Grill #25',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/25.png',
    dna: '3da33760472a2ae89343ce925e81bdb4ad4d5d84',
    edition: 25,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041668113,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Black'
      },
      {
        trait_type: 'Outer fill',
        value: 'Gold'
      },
      {
        trait_type: 'Inner fill',
        value: 'Lepard-Print'
      }
    ]
  },
  {
    name: 'Grill #27',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/27.png',
    dna: 'e3b2f2838b4150c28c621ad00eb9d7a879c3388d',
    edition: 27,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041668190,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Tye'
      },
      {
        trait_type: 'Outer fill',
        value: 'Cow'
      },
      {
        trait_type: 'Inner fill',
        value: 'APE'
      }
    ]
  },
  {
    name: 'Grill #39',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/39.png',
    dna: 'd8f7be3903f93ec45e14d4f24366cef68cd5bd5a',
    edition: 39,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041668269,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Pastel'
      },
      {
        trait_type: 'Outer fill',
        value: 'Gold'
      },
      {
        trait_type: 'Inner fill',
        value: 'Rainbow'
      }
    ]
  },
  {
    name: 'Grill #99',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/99.png',
    dna: '869c4b60b36ef2500c277457d73e8bcbd77b3831',
    edition: 99,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041668365,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Tye'
      },
      {
        trait_type: 'Outer fill',
        value: 'Gold'
      },
      {
        trait_type: 'Inner fill',
        value: 'Rainbow'
      }
    ]
  },
  {
    name: 'Grill #44',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/44.png',
    dna: '442a785592416782673972677c553305f784193e',
    edition: 44,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041668448,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Black'
      },
      {
        trait_type: 'Outer fill',
        value: 'Cow'
      },
      {
        trait_type: 'Inner fill',
        value: 'Lepard-Print'
      }
    ]
  },
  {
    name: 'Grill #43',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/43.png',
    dna: '4b128589b95df3f5f6c8ef79001abab6943aab1a',
    edition: 43,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041668528,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Tye'
      },
      {
        trait_type: 'Outer fill',
        value: 'Cow'
      },
      {
        trait_type: 'Inner fill',
        value: 'Swirl'
      }
    ]
  },
  {
    name: 'Grill #75',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/75.png',
    dna: '414577f367fe22d4e4b261b8b2c8bcebf7e65b91',
    edition: 75,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041668607,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Gold'
      },
      {
        trait_type: 'Outer fill',
        value: 'Gold'
      },
      {
        trait_type: 'Inner fill',
        value: 'Lepard-Print'
      }
    ]
  },
  {
    name: 'Grill #9',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/9.png',
    dna: 'fccb9c78b8ce5300363316a3eec041a977dfddd0',
    edition: 9,

    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041668685,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Tye'
      },
      {
        trait_type: 'Outer fill',
        value: 'Gold'
      },
      {
        trait_type: 'Inner fill',
        value: 'Lepard-Print'
      }
    ]
  },
  {
    name: 'Grill #97',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/97.png',
    dna: 'fb3c43a70fd1d703916b119205e96ee83db05afc',
    edition: 97,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041668777,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Tye'
      },
      {
        trait_type: 'Outer fill',
        value: 'Pastel'
      },
      {
        trait_type: 'Inner fill',
        value: 'Lepard-Print'
      }
    ]
  },
  {
    name: 'Grill #67',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/67.png',
    dna: '8e0817684316c56cafbda32e4364290a90d283dc',
    edition: 67,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041668862,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Pastel'
      },
      {
        trait_type: 'Outer fill',
        value: 'Pastel'
      },
      {
        trait_type: 'Inner fill',
        value: 'Tie-Dye'
      }
    ]
  },
  {
    name: 'Grill #47',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/47.png',
    dna: 'dd6d0459cde649a309bfd6eae687bd7952576daa',
    edition: 47,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041668942,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Gold'
      },
      {
        trait_type: 'Outer fill',
        value: 'Leopard'
      },
      {
        trait_type: 'Inner fill',
        value: 'Swirl'
      }
    ]
  },
  {
    name: 'Grill #35',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/35.png',
    dna: 'c81b21a54e02b652a22598232ead6130cbb2bcaf',
    edition: 35,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041669015,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Pastel'
      },
      {
        trait_type: 'Outer fill',
        value: 'Gold'
      },
      {
        trait_type: 'Inner fill',
        value: 'Swirl'
      }
    ]
  },
  {
    name: 'Grill #96',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/96.png',
    dna: '2a885d9e60c2845e30abf982b825f616be6b6af8',
    edition: 96,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041669088,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Pastel'
      },
      {
        trait_type: 'Outer fill',
        value: 'Leopard'
      },
      {
        trait_type: 'Inner fill',
        value: 'Rainbow'
      }
    ]
  },
  {
    name: 'Grill #24',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/24.png',
    dna: 'c5672870b99265f1dfda264553b5b31596e48e92',
    edition: 24,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041669162,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Gold'
      },
      {
        trait_type: 'Outer fill',
        value: 'Spiral'
      },
      {
        trait_type: 'Inner fill',
        value: 'APE'
      }
    ]
  },
  {
    name: 'Grill #18',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/18.png',
    dna: 'ab361af7874c0e252b52960111969b62aa8b2cda',
    edition: 18,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041669234,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Gold'
      },
      {
        trait_type: 'Outer fill',
        value: 'Cow'
      },
      {
        trait_type: 'Inner fill',
        value: 'Lepard-Print'
      }
    ]
  },
  {
    name: 'Grill #12',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/12.png',
    dna: 'bd29fa6a07a1d3ae0983fcbb05d093c904ae72b9',
    edition: 12,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041669307,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Black'
      },
      {
        trait_type: 'Outer fill',
        value: 'Pastel'
      },
      {
        trait_type: 'Inner fill',
        value: 'Swirl'
      }
    ]
  },
  {
    name: 'Grill #51',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/51.png',
    dna: 'b71655daeb15f9ffe0f35129463850e924b752b3',
    edition: 51,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041669392,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Tye'
      },
      {
        trait_type: 'Outer fill',
        value: 'Leopard'
      },
      {
        trait_type: 'Inner fill',
        value: 'Tie-Dye'
      }
    ]
  },
  {
    name: 'Grill #53',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/53.png',
    dna: '945ad943cb727dc35058d674e3ac8a51bcda388b',
    edition: 53,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041669481,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Black'
      },
      {
        trait_type: 'Outer fill',
        value: 'Spiral'
      },
      {
        trait_type: 'Inner fill',
        value: 'Swirl'
      }
    ]
  },
  {
    name: 'Grill #72',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/72.png',
    dna: '2facac9f9f94bc8bffca42156a78d21caaa6ebc7',
    edition: 72,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041669575,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Black'
      },
      {
        trait_type: 'Outer fill',
        value: 'Leopard'
      },
      {
        trait_type: 'Inner fill',
        value: 'Rainbow'
      }
    ]
  },
  {
    name: 'Grill #1',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/1.png',
    dna: '68f1a654344b8b613a21b322f95652ec1c5f34a3',
    edition: 1,

    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041669664,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Pastel'
      },
      {
        trait_type: 'Outer fill',
        value: 'Ice'
      },
      {
        trait_type: 'Inner fill',
        value: 'Lepard-Print'
      }
    ]
  },
  {
    name: 'Grill #8',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/8.png',
    dna: '595fe71b8576a27eeade237961206db3c3143556',
    edition: 8,

    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041669743,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Tye'
      },
      {
        trait_type: 'Outer fill',
        value: 'Gold'
      },
      {
        trait_type: 'Inner fill',
        value: 'Swirl'
      }
    ]
  },
  {
    name: 'Grill #2',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/2.png',
    dna: '30064158c75c455a227b076d644e848df295d78c',
    edition: 2,

    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041669816,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Tye'
      },
      {
        trait_type: 'Outer fill',
        value: 'Gold'
      },
      {
        trait_type: 'Inner fill',
        value: 'APE'
      }
    ]
  },
  {
    name: 'Grill #86',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/86.png',
    dna: '6940d639ac6000e093cde43293a9a101e3aa8f76',
    edition: 86,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041669893,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Black'
      },
      {
        trait_type: 'Outer fill',
        value: 'Cow'
      },
      {
        trait_type: 'Inner fill',
        value: 'Tie-Dye'
      }
    ]
  },
  {
    name: 'Grill #74',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/74.png',
    dna: 'efc32631f3bb4c5dd3acbdfbc17ea9c22049a007',
    edition: 74,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041669972,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Tye'
      },
      {
        trait_type: 'Outer fill',
        value: 'Spiral'
      },
      {
        trait_type: 'Inner fill',
        value: 'Tie-Dye'
      }
    ]
  },
  {
    name: 'Grill #79',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/79.png',
    dna: '8fabad157aec3884cfd5f6e0606fa9cb1eadc7ba',
    edition: 79,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041670048,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Gold'
      },
      {
        trait_type: 'Outer fill',
        value: 'Gold'
      },
      {
        trait_type: 'Inner fill',
        value: 'Swirl'
      }
    ]
  },
  {
    name: 'Grill #63',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/63.png',
    dna: '86b8ffcbdc344d3f7e677b31d41198ebec8c9f74',
    edition: 63,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041670132,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Black'
      },
      {
        trait_type: 'Outer fill',
        value: 'Leopard'
      },
      {
        trait_type: 'Inner fill',
        value: 'Tie-Dye'
      }
    ]
  },
  {
    name: 'Grill #52',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/52.png',
    dna: '6d418d2fae8dcdec17652f036e26e5f87861e8ca',
    edition: 52,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041670231,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Gold'
      },
      {
        trait_type: 'Outer fill',
        value: 'Ice'
      },
      {
        trait_type: 'Inner fill',
        value: 'Lepard-Print'
      }
    ]
  },
  {
    name: 'Grill #4',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/4.png',
    dna: '9af9895edbf8a3354457dba1a700a397cc4655c5',
    edition: 4,

    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041670381,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Pastel'
      },
      {
        trait_type: 'Outer fill',
        value: 'Spiral'
      },
      {
        trait_type: 'Inner fill',
        value: 'Swirl'
      }
    ]
  },
  {
    name: 'Grill #16',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/16.png',
    dna: '166783677913c1aecd4527ace53bb5017ea05841',
    edition: 16,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041670526,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Black'
      },
      {
        trait_type: 'Outer fill',
        value: 'Leopard'
      },
      {
        trait_type: 'Inner fill',
        value: 'Lepard-Print'
      }
    ]
  },
  {
    name: 'Grill #58',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/58.png',
    dna: '6dde96224e232749ceb8e9fb3a17fb2b3ac442cf',
    edition: 58,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041670638,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Black'
      },
      {
        trait_type: 'Outer fill',
        value: 'Ice'
      },
      {
        trait_type: 'Inner fill',
        value: 'Lepard-Print'
      }
    ]
  },
  {
    name: 'Grill #100',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/100.png',
    dna: 'e903bea33efbe2d2e57a6b4eea6505f9be2b4220',
    edition: 100,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041670767,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Tye'
      },
      {
        trait_type: 'Outer fill',
        value: 'Pastel'
      },
      {
        trait_type: 'Inner fill',
        value: 'APE'
      }
    ]
  },
  {
    name: 'Grill #34',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/34.png',
    dna: '684926c42be2e87f608f174721b93145e771f2f9',
    edition: 34,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041670861,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Gold'
      },
      {
        trait_type: 'Outer fill',
        value: 'Spiral'
      },
      {
        trait_type: 'Inner fill',
        value: 'Swirl'
      }
    ]
  },
  {
    name: 'Grill #28',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/28.png',
    dna: 'b7212afdaccbba61936d389b9f4ae889a114a9d0',
    edition: 28,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041671097,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Black'
      },
      {
        trait_type: 'Outer fill',
        value: 'Spiral'
      },
      {
        trait_type: 'Inner fill',
        value: 'Lepard-Print'
      }
    ]
  },
  {
    name: 'Grill #76',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/76.png',
    dna: '2984c063610b13c1ea6f7512c6912697207b6d5e',
    edition: 76,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041671243,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Gold'
      },
      {
        trait_type: 'Outer fill',
        value: 'Gold'
      },
      {
        trait_type: 'Inner fill',
        value: 'APE'
      }
    ]
  },
  {
    name: 'Grill #22',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/22.png',
    dna: 'dae1e0698cbe7597c611fcef9c7b0bbf245365ea',
    edition: 22,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041671352,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Black'
      },
      {
        trait_type: 'Outer fill',
        value: 'Leopard'
      },
      {
        trait_type: 'Inner fill',
        value: 'Swirl'
      }
    ]
  },
  {
    name: 'Grill #69',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/69.png',
    dna: '0559d2fc7cb936bce89c191fc1088ccc3c04a301',
    edition: 69,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041671433,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Tye'
      },
      {
        trait_type: 'Outer fill',
        value: 'Ice'
      },
      {
        trait_type: 'Inner fill',
        value: 'Tie-Dye'
      }
    ]
  },
  {
    name: 'Grill #3',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/3.png',
    dna: 'efb7a06691b753a877395d58c2492f4db688e8a6',
    edition: 3,

    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041671510,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Gold'
      },
      {
        trait_type: 'Outer fill',
        value: 'Gold'
      },
      {
        trait_type: 'Inner fill',
        value: 'Tie-Dye'
      }
    ]
  },
  {
    name: 'Grill #82',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/82.png',
    dna: '48da3a2611e02e8fc6268af6a1017e9b3c792c05',
    edition: 82,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041671585,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Black'
      },
      {
        trait_type: 'Outer fill',
        value: 'Spiral'
      },
      {
        trait_type: 'Inner fill',
        value: 'APE'
      }
    ]
  },
  {
    name: 'Grill #61',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/61.png',
    dna: 'a3bb2b35d236bf7709e60bf2c99b0d3ff226ac3b',
    edition: 61,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041671662,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Tye'
      },
      {
        trait_type: 'Outer fill',
        value: 'Ice'
      },
      {
        trait_type: 'Inner fill',
        value: 'Lepard-Print'
      }
    ]
  },
  {
    name: 'Grill #84',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/84.png',
    dna: '5cb5b18bb8960819eb2a3afe4279ce7306c37294',
    edition: 84,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041671740,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Tye'
      },
      {
        trait_type: 'Outer fill',
        value: 'Pastel'
      },
      {
        trait_type: 'Inner fill',
        value: 'Tie-Dye'
      }
    ]
  },
  {
    name: 'Grill #89',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/89.png',
    dna: 'c85fb484aa56fee5f5195176e3414ebe9baf9e9c',
    edition: 89,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041671825,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Tye'
      },
      {
        trait_type: 'Outer fill',
        value: 'Spiral'
      },
      {
        trait_type: 'Inner fill',
        value: 'Swirl'
      }
    ]
  },
  {
    name: 'Grill #73',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/73.png',
    dna: '81617cd378f8b79634dbf17eb25ac6b02da8de48',
    edition: 73,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041671923,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Tye'
      },
      {
        trait_type: 'Outer fill',
        value: 'Gold'
      },
      {
        trait_type: 'Inner fill',
        value: 'Tie-Dye'
      }
    ]
  },
  {
    name: 'Grill #11',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/11.png',
    dna: '7ed8f9f9cd191c0ef96a9dc1dfa6a24e4510c0c6',
    edition: 11,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041672000,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Tye'
      },
      {
        trait_type: 'Outer fill',
        value: 'Cow'
      },
      {
        trait_type: 'Inner fill',
        value: 'Lepard-Print'
      }
    ]
  },
  {
    name: 'Grill #70',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/70.png',
    dna: '61533d1f1e8b25ccc16604ccade0d58805f02445',
    edition: 70,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041672078,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Black'
      },
      {
        trait_type: 'Outer fill',
        value: 'Spiral'
      },
      {
        trait_type: 'Inner fill',
        value: 'Rainbow'
      }
    ]
  },
  {
    name: 'Grill #91',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/91.png',
    dna: '960b45693e9246da821b299e9fbd121148be90a4',
    edition: 91,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041672149,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Pastel'
      },
      {
        trait_type: 'Outer fill',
        value: 'Leopard'
      },
      {
        trait_type: 'Inner fill',
        value: 'Swirl'
      }
    ]
  },
  {
    name: 'Grill #71',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/71.png',
    dna: 'a34293f47cdd29b55c6298bb72f4b94c896061c0',
    edition: 71,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041672222,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Black'
      },
      {
        trait_type: 'Outer fill',
        value: 'Gold'
      },
      {
        trait_type: 'Inner fill',
        value: 'Swirl'
      }
    ]
  },
  {
    name: 'Grill #37',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/37.png',
    dna: 'e7f6df351f4a6f0679f4b102acf95c840f34a634',
    edition: 37,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041672321,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Gold'
      },
      {
        trait_type: 'Outer fill',
        value: 'Pastel'
      },
      {
        trait_type: 'Inner fill',
        value: 'APE'
      }
    ]
  },
  {
    name: 'Grill #60',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/60.png',
    dna: 'fe7ef292c1a9631ee8c59e80057475681c7043e3',
    edition: 60,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041672409,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Pastel'
      },
      {
        trait_type: 'Outer fill',
        value: 'Cow'
      },
      {
        trait_type: 'Inner fill',
        value: 'Lepard-Print'
      }
    ]
  },
  {
    name: 'Grill #64',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/64.png',
    dna: '79495acce0d10d59b15092381ac6d1913021d6f2',
    edition: 64,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041672500,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Black'
      },
      {
        trait_type: 'Outer fill',
        value: 'Ice'
      },
      {
        trait_type: 'Inner fill',
        value: 'Swirl'
      }
    ]
  },
  {
    name: 'Grill #7',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/7.png',
    dna: 'f35ea65af695a35d87b5278e4d01e6b4642fc82c',
    edition: 7,

    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041672580,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Pastel'
      },
      {
        trait_type: 'Outer fill',
        value: 'Pastel'
      },
      {
        trait_type: 'Inner fill',
        value: 'Swirl'
      }
    ]
  },
  {
    name: 'Grill #49',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/49.png',
    dna: '3d7bbbaa421420eac29d1dee130a52d927229009',
    edition: 49,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041672657,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Gold'
      },
      {
        trait_type: 'Outer fill',
        value: 'Cow'
      },
      {
        trait_type: 'Inner fill',
        value: 'Tie-Dye'
      }
    ]
  },
  {
    name: 'Grill #54',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/54.png',
    dna: 'eede7a4b0c25e30d435c9384d1bc2ba8219dcaf8',
    edition: 54,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041672736,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Pastel'
      },
      {
        trait_type: 'Outer fill',
        value: 'Spiral'
      },
      {
        trait_type: 'Inner fill',
        value: 'Lepard-Print'
      }
    ]
  },
  {
    name: 'Grill #87',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/87.png',
    dna: '08a4e81a49c33396c89d31de0693680d5467c26b',
    edition: 87,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041672835,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Black'
      },
      {
        trait_type: 'Outer fill',
        value: 'Gold'
      },
      {
        trait_type: 'Inner fill',
        value: 'APE'
      }
    ]
  },
  {
    name: 'Grill #15',
    description: 'Collection of NFT grills for your bored apes',
    image: 'ipfs://Qma2MZ8ZAsCBqJavCGMYbo14ftgz5hEEihAeNrS5WETE7q/15.png',
    dna: '760f824495a9d4394bbbca4acffceaab078f917d',
    edition: 15,
    mouth: apecessoriesMouthType.rage,
    price: 0.2,
    date: 1637041672912,
    attributes: [
      {
        trait_type: 'Outline',
        value: 'Rage'
      },
      {
        trait_type: 'Grill',
        value: 'Black'
      },
      {
        trait_type: 'Outer fill',
        value: 'Cow'
      },
      {
        trait_type: 'Inner fill',
        value: 'Rainbow'
      }
    ]
  }
];
