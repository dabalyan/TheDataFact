import {BILLION, CRORE, TRILLION} from '../utils/constants';

export interface MegaProject {
  name: string;
  type: string;
  subType?: string;
  sourceUrl?: string;
  description?: string,
  location?: string;
  status?: { code: number; name: string };
  progress?: string;
  launchDate?: string;
  owner?: string;
  costInr?: number;
  monthsUntilCompletion?: number;
}

const PROJECT_STATUS = {
  Stalled: {code: 101, name: 'Stalled'},
  Proposed: {code: 100, name: 'Proposed'},
  Planned: {code: 100, name: 'Planned'},

  DprUnderPreparation: {code: 90, name: 'DPR Under Preparation'},
  DprApproved: {code: 80, name: 'DPR Approved'},
  Approved: {code: 70, name: 'Approved'},

  LandAcquisitionToBegin: {code: 60, name: 'Land Acquisition to Begin'},
  LandAcquisitionInProgress: {code: 50, name: 'Land Acquisition in Progress'},
  LandAcquisitionCompleted: {code: 49, name: 'Land Acquisition Completed'},

  InProgress: {code: 40, name: 'In Progress'},
  UnderDevelopment: {code: 40, name: 'Under Development'},
  UnderConstruction: {code: 40, name: 'Under Construction'},

  PartiallyOperational: {code: 10, name: 'Partially Operational'},

  Completed: {code: 0, name: 'Completed'},
  Launched: {code: 0, name: 'Launched'},
}

const spaceMissions: MegaProject[] = [
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Chandrayaan-3',
    name: 'Chandrayaan-3',
    status: PROJECT_STATUS.UnderDevelopment,
    launchDate: '2022-08',
    location: 'Moon',
    type: 'Space Exploration',
    subType: 'Rover',
    owner: 'ISRO',
    costInr: 615 * CRORE,
    description: 'Chandrayaan-3 is a planned third lunar exploration mission by the Indian Space Research Organisation (ISRO).'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Aditya-L1',
    name: 'Aditya-L1',
    status: PROJECT_STATUS.UnderDevelopment,
    launchDate: '2022-10',
    location: 'Sun',
    type: 'Space Exploration',
    subType: 'Coronagraphy Spacecraft',
    owner: 'ISRO',
    costInr: 378.53 * CRORE,
    description: 'Aditya L1 is a planned coronagraphy spacecraft to study solar atmosphere, currently being designed and developed by Indian Space Research Organisation (ISRO) and various other Indian research institutes.'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Gaganyaan',
    name: 'Gaganyaan',
    status: PROJECT_STATUS.InProgress,
    launchDate: '2024-12',
    location: 'Space',
    type: 'Space Exploration',
    subType: 'Crewed Spacecraft',
    owner: 'ISRO',
    costInr: 12400 * CRORE,
    description: 'Gaganyaan is an Indian crewed orbital spacecraft intended to be the formative spacecraft of the Indian Human Spaceflight Programme. The spacecraft is being designed to carry three people, and a planned upgraded version will be equipped with rendezvous and docking capability.'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Mars_Orbiter_Mission_2',
    name: 'Mars Orbiter Mission 2 (Mangalyaan 2)',
    status: PROJECT_STATUS.UnderDevelopment,
    launchDate: '2024-12',
    location: 'Mars',
    type: 'Space Exploration',
    subType: 'Orbiter',
    owner: 'ISRO',
    description: 'Mars Orbiter Mission 2 (MOM 2), also called Mangalyaan-2 is India\'s second interplanetary mission planned by the Indian Space Research Organisation (ISRO).'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Shukrayaan-1',
    name: 'Shukrayaan-1',
    status: PROJECT_STATUS.UnderDevelopment,
    launchDate: '2025-12',
    location: 'Venus',
    type: 'Space Exploration',
    subType: 'Orbiter',
    owner: 'ISRO',
    description: 'Shukrayaan-1 is a proposed orbiter to Venus by the Indian Space Research Organisation (ISRO) to study the surface and atmosphere of Venus.'
  },
];

const scienceAndTechProjects: MegaProject[] = [
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Bharat_Broadband_Network',
    name: 'BharatNet',
    location: 'India',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2023-03',
    description: 'National Optical Fibre Network to provide a minimum of 100 Mbit/s broadband connectivity to all 250,000-gram panchayats in the country, covering nearly 625,000 villages, by improving the middle layer of nation-wide broadband internet in India to achieve the goal of Digital India.',
    type: 'Science & Technology',
    costInr: 647 * BILLION,
    subType: 'Optical Fibre Network'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/OneWeb_satellite_constellation',
    name: 'OneWeb',
    location: 'Global',
    status: PROJECT_STATUS.InProgress,
    progress: '66%',
    launchDate: '2023-03',
    description: 'The OneWeb satellite constellation is a planned initial 648-satellite constellation which is in the process of being completed in 2022, with a goal to provide global satellite Internet broadband services to people everywhere, starting in 2021.',
    type: 'Science & Technology',
    costInr: 150 * BILLION,
    subType: 'Satellite Constellation'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/India-based_Neutrino_Observatory',
    name: 'India-based Neutrino Observatory (INO)',
    location: 'Tamil Nadu',
    status: PROJECT_STATUS.Stalled,
    description: 'One of the biggest experimental particle physics projects undertaken in India',
    type: 'Science & Technology',
    subType: 'Neutrino Observatory'
  },
];

const energyProjects: MegaProject[] = [
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Gujarat_Hybrid_Renewable_Energy_Park',
    name: 'Gujarat Hybrid Renewable Energy Park',
    location: 'Gujarat',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2025-12',
    description: 'When completed, it will be the biggest hybrid renewable energy park in the world.',
    type: 'Energy',
    costInr: 1500 * BILLION,
    subType: 'Hybrid Renewable Energy Park'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Dholera_Solar_Park',
    name: 'Dholera Solar Park',
    location: 'Gujarat',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2030-12',
    description: 'World largest photovoltaic solar park once completed.',
    type: 'Energy',
    costInr: 250 * BILLION,
    subType: 'Solar Park'
  },
];

const roadsAndBridges: MegaProject[] = [
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Gorakhpur_Link_Expressway',
    name: 'Gorakhpur Link Expressway',
    location: 'Uttar Pradesh',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2022-03',
    description: 'Gorakhpur Link Expressway is a 4-lane wide (expandable to 6) expressway in the Indian state of Uttar Pradesh. It will connect Jaitpur village in Gorakhpur district with Salarpur village on Purvanchal Expressway in Azamgarh district.',
    type: 'Roads',
    costInr: 58.76 * BILLION,
    subType: 'Expressway'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Bundelkhand_Expressway',
    name: 'Bundelkhand Expressway',
    location: 'Uttar Pradesh',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2022-04',
    description: 'Currently, Bundelkhand Expressway is an 296 km long, 4-lane wide (expandable to 6) under-construction access-controlled expressway in the state of Uttar Pradesh, India',
    type: 'Roads',
    costInr: 147.16 * BILLION,
    subType: 'Expressway'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Mumbai%E2%80%93Nagpur_Expressway',
    name: 'Mumbai–Nagpur Expressway',
    location: 'Maharashtra',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2022-05',
    description: 'Nagpur–Mumbai Super Communication Expressway (officially known as Maharashtra Samruddhi Mahamarg) is an under-construction 6-lane (expandable to 8) 701 km long access-controlled expressway in Maharashtra, India. It will be amongst the country\'s longest Greenfield road project,[1] connecting the two capitals of the state i.e., Mumbai and Nagpur.',
    type: 'Roads',
    costInr: 550 * BILLION,
    subType: 'Expressway'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Trans%E2%80%93Haryana_Expressway',
    name: 'Trans–Haryana Expressway',
    location: 'Haryana',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2022-06',
    type: 'Roads',
    costInr: 51.08 * BILLION,
    subType: 'Expressway'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Delhi%E2%80%93Mumbai_Expressway',
    name: 'Delhi–Mumbai Expressway',
    location: 'Delhi, Haryana, Rajasthan, Madhya Pradesh, Gujarat, Maharashtra',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2023-03',
    description: 'India\'s longest expressway when completed at 1380 km',
    type: 'Roads',
    costInr: 1000 * BILLION,
    subType: 'Expressway'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Mumbai_Trans_Harbour_Link',
    name: 'Mumbai Trans Harbour Link',
    location: 'Maharashtra',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2023-10',
    description: 'India\'s longest sea bridge when completed',
    type: 'Roads',
    costInr: 178.43 * BILLION,
    subType: 'Bridge'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Coastal_Road_(Mumbai)',
    name: 'Coastal Road',
    location: 'Mumbai',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2023-11',
    description: 'Coastal Road is an under construction 8-lane, 22.2-km long freeway that would run along Mumbai\'s western coastline connecting Marine Lines in the south to Kandivali in the north.',
    type: 'Roads',
    costInr: 120 * BILLION,
    subType: 'Freeway'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/w/index.php?title=Surat-Chennai_Expressway&action=edit&redlink=1',
    name: 'Surat-Chennai Expressway',
    location: 'Gujarat, Tamil Nadu',
    status: PROJECT_STATUS.UnderConstruction,
    type: 'Roads',
    subType: 'Expressway'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Nagpur%E2%80%93Hyderabad%E2%80%93Bengaluru_Expressway',
    name: 'Nagpur–Hyderabad–Bengaluru Expressway',
    location: 'Maharashtra, Telangana, Andhra Pradesh, Karnataka',
    status: PROJECT_STATUS.Planned,
    type: 'Roads',
    subType: 'Expressway'
  },
];

const rrtsProjects: MegaProject[] = [
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Delhi%E2%80%93Alwar_Regional_Rapid_Transit_System',
    name: 'Delhi–Alwar RRTS',
    location: 'New Delhi, Haryana, Rajasthan',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2024-12',
    description: 'One of the first Regional Rapid Transit System in India',
    type: 'Railways',
    costInr: 370 * BILLION,
    subType: 'RRTS (HrSR)'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Delhi%E2%80%93Meerut_Regional_Rapid_Transit_System',
    name: 'Delhi–Meerut RRTS',
    location: 'New Delhi, Uttar Pradesh',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2025-12',
    description: 'India\'s one first Regional Rapid Transit System',
    type: 'Railways',
    costInr: 302.74 * BILLION,
    subType: 'RRTS (HrSR)'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Delhi%E2%80%93Sonipat%E2%80%93Panipat_Regional_Rapid_Transit_System',
    name: 'Delhi–Panipat RRTS',
    location: 'New Delhi, Haryana',
    status: PROJECT_STATUS.Approved,
    description: 'One of the first Regional Rapid Transit System in India',
    type: 'Railways',
    costInr: 216 * BILLION,
    subType: 'RRTS (HrSR)'
  },
];

const hsrProjects: MegaProject[] = [
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Mumbai%E2%80%93Ahmedabad_high-speed_rail_corridor',
    name: 'Mumbai–Ahmedabad high-speed rail corridor',
    location: 'Gujarat, Maharashtra',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2028-12',
    description: 'India\'s first high-speed rail line',
    type: 'Railways',
    costInr: 1200 * BILLION,
    subType: 'HSR'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Delhi%E2%80%93Ahmedabad_high-speed_rail_corridor',
    name: 'Delhi–Ahmedabad high-speed rail corridor',
    location: 'Gujarat, Rajasthan, Haryana, Delhi',
    status: PROJECT_STATUS.LandAcquisitionToBegin,
    launchDate: '2031-12',
    type: 'Railways',
    subType: 'HSR'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Delhi%E2%80%93Varanasi_high-speed_rail_corridor',
    name: 'Delhi–Varanasi high-speed rail corridor',
    location: 'Delhi, Uttar Pradesh',
    status: PROJECT_STATUS.DprUnderPreparation,
    launchDate: '2031-12',
    type: 'Railways',
    subType: 'HSR'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Varanasi%E2%80%93Howrah_high-speed_rail_corridor',
    name: 'Varanasi–Howrah high-speed rail corridor',
    location: 'Uttar Pradesh, Bihar, West Bengal',
    status: PROJECT_STATUS.DprUnderPreparation,
    launchDate: '2031-12',
    type: 'Railways',
    subType: 'HSR'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Mumbai%E2%80%93Nagpur_high-speed_rail_corridor',
    name: 'Mumbai–Nagpur high-speed rail corridor',
    location: 'Maharashtra',
    status: PROJECT_STATUS.DprUnderPreparation,
    launchDate: '2051-12',
    type: 'Railways',
    subType: 'HSR'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Chennai%E2%80%93Mysuru_high-speed_rail_corridor',
    name: 'Chennai–Mysuru high-speed rail corridor',
    location: 'Tamil Nadu, Andhra Pradesh, Karnataka',
    status: PROJECT_STATUS.DprUnderPreparation,
    launchDate: '2051-12',
    type: 'Railways',
    subType: 'HSR'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Delhi%E2%80%93Amritsar_high-speed_rail_corridor',
    name: 'Delhi–Amritsar high-speed rail corridor',
    location: 'Delhi, Haryana, Punjab',
    status: PROJECT_STATUS.Approved,
    launchDate: '2051-12',
    type: 'Railways',
    subType: 'HSR'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Mumbai%E2%80%93Hyderabad_high-speed_rail_corridor',
    name: 'Mumbai–Hyderabad high-speed rail corridor',
    location: 'Maharashtra, Karnataka, Talangana',
    status: PROJECT_STATUS.Approved,
    launchDate: '2051-12',
    type: 'Railways',
    subType: 'HSR'
  },
];

const metroProjects: MegaProject[] = [
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Navi_Mumbai_Metro',
    name: 'Navi Mumbai Metro',
    location: 'Maharashtra',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2022-12',
    type: 'Railways',
    costInr: 40.68 * BILLION,
    subType: 'Metro'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Bhoj_Metro',
    name: 'Bhopal Metro',
    location: 'Madhya Pradesh',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2023-12',
    type: 'Railways',
    costInr: 80 * BILLION,
    subType: 'Metro'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Indore_Metro',
    name: 'Indore Metro',
    location: 'Madhya Pradesh',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2023-12',
    type: 'Railways',
    costInr: 120 * BILLION,
    subType: 'Metro'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Patna_Metro',
    name: 'Patna Metro',
    location: 'Bihar',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2024-12',
    type: 'Railways',
    costInr: 133.65 * BILLION,
    subType: 'Metro'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Agra_Metro',
    name: 'Agra Metro',
    location: 'Uttar Pradesh',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2024-12',
    type: 'Railways',
    costInr: 83.79 * BILLION,
    subType: 'Metro'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Surat_Metro',
    name: 'Surat Metro',
    location: 'Gujarat',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2024-12',
    type: 'Railways',
    costInr: 120.20 * BILLION,
    subType: 'Metro'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Thane_Metro',
    name: 'Thane Metro',
    location: 'Maharashtra',
    status: PROJECT_STATUS.Approved,
    type: 'Railways',
    costInr: 130.95 * BILLION,
    subType: 'Metro'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Visakhapatnam_Metro',
    name: 'Visakhapatnam Metro',
    location: 'Andhra Pradesh',
    status: PROJECT_STATUS.Approved,
    type: 'Railways',
    costInr: 159.33 * BILLION,
    subType: 'Metro'
  }
];

const monorailProjects: MegaProject[] = [
  {
    name: 'Ahmedabad-Dholera SIR Monorail',
    location: 'Gujarat',
    status: PROJECT_STATUS.Approved,
    type: 'Railways',
    costInr: 60 * BILLION,
    subType: 'Monorail'
  }
];

const metrolightProjects: MegaProject[] = [
  {
    name: 'Jammu Metro',
    location: 'Jammu and Kashmir',
    status: PROJECT_STATUS.Approved,
    launchDate: '2024-12',
    type: 'Railways',
    costInr: 48.25 * BILLION,
    subType: 'Metrolite'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Srinagar_Metro',
    name: 'Srinagar Metro',
    location: 'Jammu and Kashmir',
    status: PROJECT_STATUS.Approved,
    launchDate: '2024-12',
    type: 'Railways',
    costInr: 57.34 * BILLION,
    subType: 'Metrolite'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Gorakhpur_Metro',
    name: 'Gorakhpur Metro',
    location: 'Uttar Pradesh',
    status: PROJECT_STATUS.Approved,
    launchDate: '2024-12',
    type: 'Railways',
    costInr: 46.72 * BILLION,
    subType: 'Metrolite'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Thiruvananthapuram_Light_Metro',
    name: 'Thiruvananthapuram Light Metro',
    location: 'Kerala',
    status: PROJECT_STATUS.Approved,
    launchDate: '2025-12',
    type: 'Railways',
    costInr: 43 * BILLION,
    subType: 'Metrolite'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Kozhikode_Light_Metro',
    name: 'Kozhikode Light Metro',
    location: 'Kerala',
    status: PROJECT_STATUS.Approved,
    type: 'Railways',
    costInr: 19.91 * BILLION,
    subType: 'Metrolite'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Varanasi_Metro',
    name: 'Varanasi Metro',
    location: 'Uttar Pradesh',
    status: PROJECT_STATUS.Approved,
    type: 'Railways',
    costInr: 172.27 * BILLION,
    subType: 'Metrolite'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Uttarakhand_Metro',
    name: 'Uttarakhand Metro',
    location: 'Uttarakhand',
    status: PROJECT_STATUS.Approved,
    type: 'Railways',
    costInr: 401.50 * BILLION,
    subType: 'Metrolite'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Chennai_Light_Rail',
    name: 'Chennai Light Rail',
    location: 'Tamil Nadu',
    status: PROJECT_STATUS.Approved,
    type: 'Railways',
    costInr: 35 * BILLION,
    subType: 'Metrolite'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Delhi_Metrolite',
    name: 'Delhi Metrolite',
    location: 'Delhi',
    status: PROJECT_STATUS.DprApproved,
    type: 'Railways',
    costInr: 55.87 * BILLION,
    subType: 'Metrolite'
  },
];

const freightCorridors: MegaProject[] = [
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Western_Dedicated_Freight_Corridor',
    name: 'Western Dedicated Freight Corridor',
    location: 'Uttar Pradesh, Delhi, Haryana, Rajasthan, Gujarat, Maharashtra',
    status: PROJECT_STATUS.PartiallyOperational,
    launchDate: '2022-06',
    type: 'Railways',
    costInr: 600 * BILLION,
    subType: 'Dedicated Freight Corridor'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Eastern_Dedicated_Freight_Corridor',
    name: 'Eastern Dedicated Freight Corridor',
    location: 'Punjab, Haryana, Uttar Pradesh, Bihar, West Bengal',
    status: PROJECT_STATUS.PartiallyOperational,
    launchDate: '2022-06',
    type: 'Railways',
    costInr: 355 * BILLION,
    subType: 'Dedicated Freight Corridor'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Haryana_Orbital_Rail_Corridor',
    name: 'Haryana Orbital Rail Corridor',
    location: 'Haryana',
    status: PROJECT_STATUS.Approved,
    launchDate: '2025-03',
    type: 'Railways',
    costInr: 56.17 * BILLION,
    subType: 'Passenger Rail, Freight Rail'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/East-West_Dedicated_Freight_Corridor',
    name: 'East-West Dedicated Freight Corridor',
    location: 'Maharashtra, Madhya Pradesh, Chhattisgarh, Odisha, Jharkhand, West Bengal.',
    status: PROJECT_STATUS.Planned,
    type: 'Railways',
    subType: 'Dedicated Freight Corridor'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/North-South_Dedicated_Freight_Corridor',
    name: 'North-South Dedicated Freight Corridor',
    location: 'Madhya Pradesh, Maharashtra, Telangana, Andhra Pradesh',
    status: PROJECT_STATUS.Planned,
    type: 'Railways',
    subType: 'Dedicated Freight Corridor'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/East_Coast_Dedicated_Freight_Corridor',
    name: 'East Coast Dedicated Freight Corridor',
    location: 'West Bengal, Odisha, Andhra Pradesh',
    status: PROJECT_STATUS.Planned,
    type: 'Railways',
    subType: 'Dedicated Freight Corridor'
  },
];

const highAltitudeRailwayProjects: MegaProject[] = [
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Chenab_Bridge',
    name: 'Chenab Bridge',
    location: 'Jammu and Kashmir',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2022-12',
    description: 'World highest railway bridge when completed',
    type: 'Railways',
    costInr: 14.86 * BILLION,
    subType: 'Bridge'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Anji_Khad_Bridge',
    name: 'Anji Khad Bridge',
    location: 'Jammu and Kashmir',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2022-12',
    description: 'Worlds highest cable-stayed railway bridge',
    type: 'Railways',
    costInr: 4.58 * BILLION,
    subType: 'Bridge'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Imphal_railway_station',
    name: 'North-East Railway Connectivity',
    location: 'Assam, Nagaland, West Bengal, Tripura, Sikkim, Manipur, Mizoram, Arunachal Pradesh, Meghalaya',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2023-12',
    type: 'Railways',
    costInr: 138.09 * BILLION,
    subType: 'Station'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Bilaspur%E2%80%93Leh_line',
    name: 'Bilaspur–Leh Line',
    location: 'Himachal Pradesh, Ladakh',
    launchDate: '2024-12',
    status: PROJECT_STATUS.LandAcquisitionCompleted,
    type: 'Railways',
    costInr: 833.60 * BILLION,
    subType: 'Track'
  },
];

const aviationProjects: MegaProject[] = [
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Mopa_Airport',
    name: 'Mopa International Airport',
    location: 'Goa',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2022-12',
    type: 'Airways',
    costInr: 30 * BILLION,
    subType: 'International Airport'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Dholera_Airport',
    name: 'Dholera International Airport',
    location: 'Gujarat',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2023-12',
    type: 'Airways',
    costInr: 13.78 * BILLION,
    subType: 'International Airport'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Rajkot_Greenfield_International_Airport',
    name: 'Rajkot International Airport',
    location: 'Gujarat',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2023-12',
    type: 'Airways',
    costInr: 26.54 * BILLION,
    subType: 'International Airport'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Noida_International_Airport',
    name: 'Noida International Airport',
    location: 'Uttar Pradesh',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2024-12',
    description: 'With six runways, Noida International Airport is planned to become India\'s largest airport and Asia\'s second largest.',
    type: 'Airways',
    costInr: 295.60 * BILLION,
    subType: 'International Airport'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Navi_Mumbai_International_Airport',
    name: 'Navi Mumbai International Airport',
    location: 'Maharashtra',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2024-12',
    description: 'Navi Mumbai International Airport is an under-construction greenfield international airport being built at Panvel/Uran, Navi Mumbai in Maharashtra, India.',
    type: 'Airways',
    costInr: 160 * BILLION,
    subType: 'International Airport'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Bhogapuram_Airport',
    name: 'Bhogapuram International Airport',
    location: 'Andhra Pradesh',
    status: PROJECT_STATUS.Approved,
    launchDate: '2023-12',
    type: 'Airways',
    costInr: 22.60 * BILLION,
    subType: 'International Airport'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Mandi_Airport',
    name: 'Mandi International Airport',
    location: 'Himachal Pradesh',
    status: PROJECT_STATUS.Planned,
    type: 'Airways',
    subType: 'International Airport'
  },
];

const waterways: MegaProject[] = [
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Sagar_Mala_project',
    name: 'Sagar Mala Project',
    location: 'India',
    status: PROJECT_STATUS.PartiallyOperational,
    launchDate: '2035-12',
    type: 'Waterways',
    costInr: 9.7 * TRILLION,
    subType: 'Ports'
  },
];

const religiousProjects: MegaProject[] = [
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Kedarnath_Temple',
    name: 'Kedarnath Temple Revamp',
    location: 'Uttarakhand',
    status: PROJECT_STATUS.InProgress,
    launchDate: '2022-12',
    description: 'Kedarnath Temple is a Hindu temple (shrine) dedicated to the Hindu God Shiva. The temple is located on the Garhwal Himalayan range near the Mandakini river, in the state of Uttarakhand, India.',
    type: 'Religious',
    costInr: 3 * BILLION,
    subType: 'Temple Revamp'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Ram_Mandir',
    name: 'Ram Mandir',
    location: 'Uttar Pradesh',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2024-12',
    description: 'The most awaited temple being built at the site of Ram Janmabhoomi, the birthplace of Rama, a principal deity of Hinduism.',
    type: 'Religious',
    costInr: 11 * BILLION,
    subType: 'Temple'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Vrindavan_Chandrodaya_Mandir',
    name: 'Vrindavan Chandrodaya Temple',
    location: 'Uttar Pradesh',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2024-12',
    description: 'World\'s tallest religious monument once completed',
    type: 'Religious',
    costInr: 3 * BILLION,
    subType: 'Temple'
  },
];

const urbanDevelopmentProjects: MegaProject[] = [
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/India_International_Convention_and_Expo_Centre',
    name: 'India International Convention & Expo Centre (IICC)',
    location: 'New Delhi',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2023-12',
    type: 'Urban Redevelopment',
    costInr: 3 * BILLION,
    subType: 'Convention Center'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Pragati_Maidan',
    name: 'Pragati Maidan Revamp',
    location: 'New Delhi',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2023-12',
    type: 'Urban Redevelopment',
    costInr: 30 * BILLION,
    subType: 'Convention Center'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Central_Vista_Redevelopment_Project',
    name: 'Central Vista Redevelopment Project',
    location: 'New Delhi',
    status: PROJECT_STATUS.UnderConstruction,
    launchDate: '2024-12',
    description: 'Redevelopment of Central Vista which is India\'s Administrative area.',
    type: 'Urban Redevelopment',
    costInr: 134.50 * BILLION,
    subType: 'Administrative Area'
  },
];

const plannedCities: MegaProject[] = [
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Smart_Cities_Mission',
    name: 'Smart Cities Mission',
    location: 'India',
    status: PROJECT_STATUS.InProgress,
    progress: '52%',
    type: 'Smart City',
    costInr: 1913 * BILLION,
    subType: 'Urban Revamp'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Gujarat_International_Finance_Tec-City',
    name: 'GIFT City',
    location: 'Gujarat',
    status: PROJECT_STATUS.InProgress,
    type: 'Greenfield City',
    subType: 'Business District'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Diamond_Research_and_Mercantile_City',
    name: 'DREAM City',
    location: 'Surat',
    status: PROJECT_STATUS.InProgress,
    description: 'Surat Diamond Bourse is a diamond exchange under construction as of 2020 in DREAM City, Surat, Gujarat, India. The Project would be India\'s second diamond trading hub based at Surat, Gujarat, spread across 35.54 acres with availability of 66 lakh Sq.ft. built up area encompassing 4,000 offices for national & international traders.',
    type: 'Greenfield City',
    subType: 'Business District'
  },
  {
    sourceUrl: 'https://en.wikipedia.org/wiki/Dholera',
    name: 'Dholera',
    location: 'Gujarat',
    status: PROJECT_STATUS.InProgress,
    type: 'Greenfield City',
    subType: 'Business District'
  },
];

export const MEGA_PROJECTS: MegaProject[] = [
  {name: '🚀 Space Exploration', type: 'divider', sourceUrl: 'https://en.wikipedia.org/wiki/List_of_ISRO_missions'},
  ...spaceMissions,
  {name: '🔬 Science and Technology', type: 'divider'},
  ...scienceAndTechProjects,
  {
    name: '⚡ Renewable Energy',
    type: 'divider',
    sourceUrl: 'https://en.wikipedia.org/wiki/Solar_power_in_India#Major_photovoltaic_power_stations'
  },
  ...energyProjects,
  {name: '🛣️ Roadways', type: 'divider'},
  ...roadsAndBridges,
  {
    name: '🚄 Rapid Rail Transport Systems - RRTS | HrSR',
    type: 'divider',
    sourceUrl: 'https://en.wikipedia.org/wiki/National_Capital_Region_Transport_Corporation#Network'
  },
  ...rrtsProjects,
  {
    name: '🚅 High Speed Railway - HSR',
    type: 'divider',
    sourceUrl: 'https://en.wikipedia.org/wiki/High-speed_rail_in_India'
  },
  ...hsrProjects,
  {
    name: '🚇 Monorail, Metro, and Metrolite (Lightrail - LRT) Systems',
    type: 'divider',
    sourceUrl: 'https://en.wikipedia.org/wiki/Urban_rail_transit_in_India'
  },
  ...metroProjects,
  ...monorailProjects,
  ...metrolightProjects,
  {
    name: '🛤️ Railway Corridors',
    type: 'divider',
    sourceUrl: 'https://en.wikipedia.org/wiki/Dedicated_Freight_Corridor_Corporation_of_India'
  },
  ...freightCorridors,
  {name: '🌉 High-Altitude Railways', type: 'divider'},
  ...highAltitudeRailwayProjects,
  {name: '🛫 Airways', type: 'divider', sourceUrl: 'https://en.wikipedia.org/wiki/List_of_airports_in_India'},
  ...aviationProjects,
  {name: '⚓ Waterways and Sea Ports', type: 'divider'},
  ...waterways,
  {name: '🛕 Religious Buildings', type: 'divider'},
  ...religiousProjects,
  {name: '🏗️ Urban (Re)Development', type: 'divider'},
  ...urbanDevelopmentProjects,
  {name: '🏙️ Smart Cities and Greenfield Business Districts', type: 'divider'},
  ...plannedCities
]
  .map(project => {
    if (project.launchDate) {
      const dateTo = new Date(project.launchDate);
      const dateFrom = new Date();
      project.monthsUntilCompletion = dateTo.getMonth() - dateFrom.getMonth() + 12 * (dateTo.getFullYear() - dateFrom.getFullYear());
    }
    return project;
  })
  .filter(project => !project.status || project.status.code < 100);
