export const centralGovernments = [
  {year: 1998, government: 'Atal Era'},
  {year: 2004, government: 'Manmohan Era'},
  // {year: 2009, government: 'UPA(2)'},
  {year: 2014, government: 'Modi Era'},
  // {year: 2019, government: 'NDA(3)'},
];

export const rawData = {
  'fields': [
    {'id': 'a', 'label': 'Year', 'type': 'string'},
    {
      'id': 'b',
      'label': 'Population of India (in thousands)',
      'type': 'string'
    }, {'id': 'c', 'label': 'Number of Registered Motor Vehicles (in thousands) - Total', 'type': 'string'},
    {
      'id': 'd',
      'label': 'Number of Registered Motor Vehicles (in thousands) - Cars',
      'type': 'string'
    }, {'id': 'e', 'label': 'Number of Registered Motor Vehicles (in thousands) - Buses', 'type': 'string'},
    {
      'id': 'f',
      'label': 'Length of National Highways (in km)',
      'type': 'string'
    },
    {'id': 'g', 'label': 'Length of all Roads (in km)', 'type': 'string'},
    {
      'id': 'h',
      'label': 'Registered Motor Vehicles per 1,000 Population - Total',
      'type': 'string'
    },
    {'id': 'i', 'label': 'Registered Motor Vehicles per 1,000 Population - Cars', 'type': 'string'},
    {
      'id': 'j',
      'label': 'Registered Motor Vehicles per 1,000 Population - Buses',
      'type': 'string'
    },
    {
      'id': 'k',
      'label': 'Total Registered Motor Vehicle per 100 Km of National Highways',
      'type': 'string'
    },
    {'id': 'l', 'label': 'Total Registered Motor Vehicle per 100 Km of Road Length', 'type': 'string'}
  ],
  'data': [
    ['2001', '1028610', '54991', '5297', '533', '57737', '3373520', '53.46', '5.15', '0.52', '95244', '1630'],
    ['2002', '1045547', '58924', '5748', '519', '58112', '3426600', '56.36', '5.5', '0.5', '101397', '1720'],
    ['2003', '1062388', '67007', '6594', '565', '58112', '3528654', '63.07', '6.21', '0.53', '115307', '1899'],
    ['2004', '1079117', '72718', '7267', '594', '65569', '3621507', '67.39', '6.73', '0.55', '110903', '2008'],
    ['2005', '1095722', '81499', '8073', '678', '65569', '3809156', '74.38', '7.37', '0.62', '124295', '2140'],
    ['2006', '1112186', '89618', '9110', '762', '66590', '3880651', '80.58', '8.19', '0.69', '134582', '2309'],
    ['2007', '1128521', '96707', '10146', '1098', '66590', '4016401', '85.69', '8.99', '0.97', '145228', '2408'],
    ['2008', '1144734', '105353', '11200', '1157', '66754', '4109592', '92.03', '9.78', '1.01', '157823', '2564'],
    ['2009', '1160813', '114951', '12366', '1206', '70548', '4471510', '99.03', '10.65', '1.04', '162940', '2571'],
    ['2010', '1176742', '127746', '13749', '1177', '70934', '4582439', '108.56', '11.68', '1', '180091', '2788'],
    ['2011', '1192506', '141866', '15467', '1238', '70934', '4676838', '118.96', '12.97', '1.04', '199997', '3033'],
    ['2012', '1208116', '159491', '17570', '1297', '76818', '4865394', '132.02', '14.54', '1.07', '207621', '3278'],
    ['2013', '1223581', '181508', '20503', '1419', '79116', '5231922', '148.34', '16.76', '1.16', '229420', '3469'],
    ['2014', '1238887', '190704', '21672', '1468', '91287', '5402486', '153.93', '17.49', '1.18', '208906', '3530'],
    ['2015', '1254019', '210023', '23808', '1527', '97991', '5472144', '167.48', '18.99', '1.22', '214329', '3838'],
    ['2016', '1268961', '230031', '25635', '1385', '101011', '5603293', '181.27', '20.2', '1.09', '227728', '4105'],
    ['2017', '1283600', '253311', '28694', '1340', '114158', '5897671', '197.34', '22.35', '1.04', '221895', '4295']
  ]
};

export const operationalExpressways = [
  {
    'name': 'Purvanchal Expressway',
    'state': 'Uttar Pradesh',
    'length': 340.8,
    'lanes': '6',
    'year': 2021,
    'month': 'November',
    'remarks': 'Longest Expressway in India'
  },
  {
    'name': 'Agra–Lucknow Expressway',
    'state': 'Uttar Pradesh',
    'length': 302.2,
    'lanes': '6',
    'year': 2017,
    'month': 'February',
    'remarks': '2nd Longest Expressway in India[24]'
  },
  {
    'name': 'Yamuna Expressway',
    'state': 'Uttar Pradesh',
    'length': 165.5,
    'lanes': '6',
    'year': 2012,
    'month': 'August',
    'remarks': ''
  },
  {
    'name': 'Outer Ring Road, Hyderabad',
    'state': 'Telangana',
    'length': 158,
    'lanes': '8',
    'year': 2018,
    'month': 'April',
    'remarks': ''
  },
  {
    'name': 'Western Peripheral Expressway',
    'state': 'Haryana',
    'length': 135.6,
    'lanes': '6',
    'year': 2018,
    'month': 'November',
    'remarks': ''
  },
  {
    'name': 'Eastern Peripheral Expressway',
    'state': 'Uttar Pradesh',
    'length': 135,
    'lanes': '6',
    'year': 2018,
    'month': 'May',
    'remarks': 'NE2'
  },
  {
    'name': 'Delhi–Meerut Expressway',
    'state': 'Delhi',
    'length': 96,
    'lanes': '6-14',
    'year': 2021,
    'month': 'April',
    'remarks': 'NE3 India\'s widest Expressway (14-lane)[29]'
  },
  {
    'name': 'Mumbai–Pune Expressway',
    'state': 'Maharashtra',
    'length': 94.5,
    'lanes': '6',
    'year': 2002,
    'month': 'April',
    'remarks': 'India\'s First 6-lane wide expressway'
  },
  {
    'name': 'Ahmedabad–Vadodara Expressway',
    'state': 'Gujarat',
    'length': 93.1,
    'lanes': '4',
    'year': 2004,
    'month': 'August',
    'remarks': 'NE1'
  },
  {
    'name': 'Jaipur–Kishangarh Expressway',
    'state': 'Rajasthan',
    'length': 90,
    'lanes': '6',
    'year': 2005,
    'month': 'April',
    'remarks': 'Forms a segment of the NH-8'
  },
  {
    'name': 'Ranchi Outer Ring Road Expressway',
    'state': 'Jharkhand',
    'length': 60,
    'lanes': '6',
    'year': 2019,
    'month': 'November',
    'remarks': 'First Expressway of Jharkhand'
  },
  {
    'name': 'Chennai Bypass',
    'state': 'Tamil Nadu',
    'length': 32,
    'lanes': '4-6',
    'year': 2010,
    'remarks': ''
  },
  {
    'name': 'Delhi–Gurgaon Expressway',
    'state': 'Delhi',
    'length': 27.7,
    'lanes': '6-8',
    'year': 2008,
    'month': 'January',
    'remarks': 'Part of Golden Quadrilateral'
  },
  {
    'name': 'Noida–Greater Noida Expressway',
    'state': 'Uttar Pradesh',
    'length': 24.5,
    'lanes': '6',
    'year': 2002,
    'remarks': ''
  },
  {
    'name': 'Raipur–Naya Raipur Expressway',
    'state': 'Chhattisgarh',
    'length': 12,
    'lanes': '4',
    'year': 2019,
    'remarks': 'First expressway of Chhattisgarh'
  },
  {
    'name': 'P.V. Narasimha Rao Expressway',
    'state': 'Telangana',
    'length': 11.6,
    'lanes': '4',
    'year': 2009,
    'month': 'October',
    'remarks': ''
  },
  {
    'name': 'Panipat Elevated Expressway',
    'state': 'Haryana',
    'length': 10,
    'lanes': '6',
    'year': 2008,
    'month': 'January',
    'remarks': ''
  },
  {
    'name': 'Delhi–Noida Direct Flyway',
    'state': 'Delhi',
    'length': 9.2,
    'lanes': '8',
    'year': 2001,
    'month': 'January',
    'remarks': 'India\'s First 8-lane wide expressway'
  },
  {
    'name': 'Delhi–Faridabad Skyway',
    'state': 'Delhi',
    'length': 4.4,
    'lanes': '6',
    'year': 2010,
    'month': 'November',
    'remarks': 'Part of NH44'
  }
];

export const underConstructionExpressways = [
  {
    'name': 'Ahmedabad–Dholera Expressway',
    'state': 'Gujarat',
    'length': 110,
    'year': 2023,
    'month': 'March'
  },
  {
    'name': 'Airoli–Katai Naka Freeway',
    'state': 'Maharashtra',
    'length': 12.3,
    'year': 2023,
    'month': 'March'
  },
  {
    'name': 'Amritsar–Jamnagar Expressway',
    'state': 'Punjab',
    'length': 1,
    'year': 2023,
    'month': 'March'
  },
  {
    'name': 'Amritsar Ring Road',
    'state': 'Punjab',
    'length': 98,
    'year': 2022
  },
  {
    'name': 'Bangalore–Chennai Expressway',
    'state': 'Karnataka',
    'length': 258,
    'year': 2024,
    'month': 'March'
  },
  {
    'name': 'Bangalore–Mysore Infrastructure Corridor',
    'state': 'Karnataka',
    'length': 111,
    'year': 2022,
    'month': 'August'
  },
  {
    'name': 'Bundelkhand Expressway',
    'state': 'Uttar Pradesh',
    'length': 296,
    'year': 2022,
    'month': 'April'
  },
  {
    'name': 'Chennai Port–Maduravoyal Expressway',
    'state': 'Tamil Nadu',
    'length': 19,
    'year': 2023
  },
  {
    'name': 'Coastal Road (Mumbai)',
    'state': 'Maharashtra',
    'length': 29.2,
    'year': 2022,
    'month': 'June'
  },
  {
    'name': 'DND–KMP Expressway',
    'state': 'Delhi',
    'length': 59,
    'year': 2023
  },
  {
    'name': 'Delhi–Amritsar–Katra Expressway',
    'state': 'Delhi',
    'length': 687,
    'year': 2023,
    'month': 'December'
  },
  {
    'name': 'Delhi–Mumbai Expressway',
    'state': 'Delhi',
    'length': 1,
    'year': 2023,
    'month': 'March'
  },
  {
    'name': 'Dwarka Expressway',
    'state': 'Delhi',
    'length': 27.6,
    'year': 2022,
    'month': 'August'
  },
  {
    'name': 'Faridabad–Noida–Ghaziabad Expressway',
    'state': 'Delhi',
    'length': 56,
    'year': 2023
  },
  {
    'name': 'Ganga Expressway',
    'state': 'Uttar Pradesh',
    'length': 594,
    'year': 2024
  },
  {
    'name': 'Trans–Haryana Expressway',
    'state': 'Haryana',
    'length': 227,
    'year': 2022,
    'month': 'February'
  },
  {
    'name': 'Gorakhpur Link Expressway',
    'state': 'Uttar Pradesh',
    'length': 91.35,
    'year': 2022,
    'month': 'March'
  },
  {
    'name': 'Lucknow–Kanpur Expressway',
    'state': 'Uttar Pradesh',
    'length': 66,
    'year': 2023,
    'month': 'October'
  },
  {
    'name': 'Lucknow Outer Ring Road',
    'state': 'Uttar Pradesh',
    'length': 108,
    'year': 2022,
    'month': 'June'
  },
  {
    'name': 'Loknayak Ganga Path',
    'state': 'Bihar',
    'length': 39.5,
    'year': 2022,
    'month': 'December'
  },
  {
    'name': 'Ludhiana Elevated corridor',
    'state': 'Punjab',
    'length': 13,
    'year': 2024,
    'month': 'March'
  },
  {
    'name': 'Mumbai Trans Harbour Link',
    'state': 'Maharashtra',
    'length': 21.8,
    'year': 2022,
    'month': 'June'
  },
  {
    'name': 'Mumbai–Nagpur Expressway',
    'state': 'Maharashtra',
    'length': 701,
    'year': 2022,
    'month': 'May'
  },
  {
    'name': 'Pathankot-Ajmer Expressway',
    'state': 'Punjab',
    'length': 600,
    'year': 2023,
    'month': 'March'
  },
  {
    'name': 'Peripheral Ring Road',
    'state': 'Karnataka',
    'length': 65.5,
    'year': 2024,
    'month': 'August'
  },
  {
    'name': 'Raipur–Visakhapatnam Expressway',
    'state': 'Chhattisgarh',
    'length': 465,
    'year': 2024,
    'month': 'March'
  },
  {
    'name': 'Sohna Elevated Corridor',
    'state': 'Haryana',
    'length': 21.65,
    'year': 2022
  },
  {
    'name': '[53]',
    'state': 'Uttar Pradesh',
    'length': 63,
    'year': 2022
  },
  {
    'name': 'Wazirabad–Mayur Vihar Elevated Expressway',
    'state': 'Delhi NCR',
    'length': 18,
    'year': null
  }
];

export const roadNetworkOfIndia = [
  {
    'year': 1951,
    'nationalHighways': 19811,
    'stateHighways': 0,
    'districtRoads': 173723,
    'ruralRoads': 206408,
    'urbanRoads': 0,
    'projectRoads': 0,
    'total': 399942
  },
  {
    'year': 1961,
    'nationalHighways': 23798,
    'stateHighways': 0,
    'districtRoads': 257125,
    'ruralRoads': 197194,
    'urbanRoads': 46361,
    'projectRoads': 0,
    'total': 524478
  },
  {
    'year': 1971,
    'nationalHighways': 23838,
    'stateHighways': 56765,
    'districtRoads': 276833,
    'ruralRoads': 354530,
    'urbanRoads': 72120,
    'projectRoads': 130893,
    'total': 914979
  },
  {
    'year': 1981,
    'nationalHighways': 31671,
    'stateHighways': 94359,
    'districtRoads': 421895,
    'ruralRoads': 628865,
    'urbanRoads': 123120,
    'projectRoads': 185511,
    'total': 1485421
  },
  {
    'year': 1991,
    'nationalHighways': 33650,
    'stateHighways': 127311,
    'districtRoads': 509435,
    'ruralRoads': 1260430,
    'urbanRoads': 186799,
    'projectRoads': 209737,
    'total': 2327362
  },
  {
    'year': 2001,
    'nationalHighways': 57737,
    'stateHighways': 132100,
    'districtRoads': 736001,
    'ruralRoads': 1972016,
    'urbanRoads': 252001,
    'projectRoads': 223665,
    'total': 3373520,
    'expressways': 9
  },
  {
    'year': 2002,
    'stateHighways': 137711,
    'districtRoads': 695335,
    'ruralRoads': 2061023,
    'total': 3426600,
    'expressways': 128
  },
  {
    'year': 2003,
    'stateHighways': 134807,
    'districtRoads': 696960,
    'ruralRoads': 2082188,
    'urbanRoads': 297259,
    'projectRoads': 259328,
    'total': 3528654
  },
  {
    'year': 2004,
    'nationalHighways': 65569,
    'stateHighways': 133177,
    'districtRoads': 719257,
    'ruralRoads': 2140569,
    'urbanRoads': 301310,
    'projectRoads': 261625,
    'total': 3621507,
    'expressways': 221
  },
  {
    'year': 2005,
    'nationalHighways': 65569,
    'stateHighways': 144396,
    'districtRoads': 786230,
    'ruralRoads': 2266439,
    'urbanRoads': 286707,
    'projectRoads': 259815,
    'total': 3809156,
    'expressways': 311
  },
  {
    'year': 2006,
    'nationalHighways': 66590,
    'stateHighways': 148090,
    'districtRoads': 803669,
    'ruralRoads': 2308125,
    'urbanRoads': 291991,
    'projectRoads': 262186,
    'total': 3880651
  },
  {
    'year': 2007,
    'nationalHighways': 66590,
    'stateHighways': 152235,
    'districtRoads': 835003,
    'ruralRoads': 2393488,
    'urbanRoads': 300580,
    'projectRoads': 268505,
    'total': 4016401
  },
  {
    'year': 2008,
    'nationalHighways': 66754,
    'stateHighways': 154522,
    'districtRoads': 863241,
    'ruralRoads': 2450559,
    'urbanRoads': 304327,
    'projectRoads': 270189,
    'total': 4109592,
    'expressways': 349
  },
  {
    'year': 2009,
    'nationalHighways': 70548,
    'stateHighways': 158497,
    'districtRoads': 962880,
    'ruralRoads': 2629165,
    'urbanRoads': 373802,
    'projectRoads': 276617,
    'total': 4471510,
    'expressways': 361
  },
  {
    'year': 2010,
    'nationalHighways': 70934,
    'stateHighways': 160177,
    'districtRoads': 977414,
    'ruralRoads': 2692535,
    'urbanRoads': 402448,
    'projectRoads': 278931,
    'total': 4582439,
    'expressways': 397
  },
  {
    'year': 2011,
    'nationalHighways': 70934,
    'stateHighways': 163898,
    'districtRoads': 998895,
    'ruralRoads': 2749804,
    'urbanRoads': 411679,
    'projectRoads': 281628,
    'total': 4676838
  },
  {
    'year': 2012,
    'nationalHighways': 76818,
    'stateHighways': 164360,
    'districtRoads': 1022287,
    'ruralRoads': 2838220,
    'urbanRoads': 464294,
    'projectRoads': 299415,
    'total': 4865394,
    'expressways': 563
  },
  {
    'year': 2013,
    'nationalHighways': 79116,
    'stateHighways': 169227,
    'districtRoads': 1066747,
    'ruralRoads': 3159639,
    'urbanRoads': 446238,
    'projectRoads': 310955,
    'total': 5231922
  },
  {
    'year': 2014,
    'nationalHighways': 91287,
    'stateHighways': 170818,
    'districtRoads': 1082267,
    'ruralRoads': 3304328,
    'urbanRoads': 457467,
    'projectRoads': 296319,
    'total': 5402486,
    'expressways': 563
  },
  {
    'year': 2015,
    'nationalHighways': 97991,
    'stateHighways': 167109,
    'districtRoads': 1101178,
    'ruralRoads': 3337255,
    'urbanRoads': 467106,
    'projectRoads': 301505,
    'total': 5472144
  },
  {
    'year': 2016,
    'nationalHighways': 101011,
    'stateHighways': 176166,
    'districtRoads': 561940,
    'ruralRoads': 3935337,
    'urbanRoads': 509730,
    'projectRoads': 319109,
    'total': 5603293
  },
  {
    'year': 2017,
    'nationalHighways': 114158,
    'stateHighways': 175036,
    'districtRoads': 586181,
    'ruralRoads': 4166576,
    'urbanRoads': 526483,
    'projectRoads': 328897,
    'total': 5897671,
    'expressways': 865
  },
  {
    'year': 2018,
    'nationalHighways': 126350,
    'stateHighways': 186908,
    'districtRoads': 611268,
    'ruralRoads': 4409582,
    'urbanRoads': 534142,
    'projectRoads': 347547,
    'total': 6215797,
    'expressways': 1293
  },
  {
    'year': 2019,
    'nationalHighways': 132499,
    'stateHighways': 179535,
    'districtRoads': 633383,
    'ruralRoads': 4541631,
    'urbanRoads': 541636,
    'projectRoads': 343163,
    'total': 6371847,
    'expressways': 1365
  },
  {
    'year': 2020,
    'nationalHighways': 136440
  },
  {
    'year': 2021,
    'nationalHighways': 140995,
    'expressways': 1802,
    'expresswaysUnderConstruction': 1802
  },
  {
    'year': 2022,
    'nationalHighways': 151000,
    'expresswaysUnderConstruction': 3637,
  },
  {
    'year': 2023,
    'expresswaysUnderConstruction': 5248,
  },
  {
    'year': 2024,
    'expresswaysUnderConstruction': 6644,
  }
];
