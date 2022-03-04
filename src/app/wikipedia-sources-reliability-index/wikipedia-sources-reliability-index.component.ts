import {Component, ElementRef, QueryList, ViewChildren, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-wikipedia-sources-reliability-index',
  templateUrl: './wikipedia-sources-reliability-index.component.html',
  styleUrls: ['./wikipedia-sources-reliability-index.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WikipediaSourcesReliabilityIndexComponent {
  groupInfo = [
    {
      icon: '✅',
      name: 'Generally Reliable',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/30px-Yes_Check_Circle.svg.png'
    },
    {
      icon: '⚠',
      name: 'No Consensus',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Achtung-orange.svg/30px-Achtung-orange.svg.png'
    },
    {
      icon: '🚫',
      name: 'Generally Unreliable',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Argentina_-_NO_symbol.svg/30px-Argentina_-_NO_symbol.svg.png'
    },
    {
      icon: '🛑',
      name: 'Deprecated',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Stop_hand.svg/30px-Stop_hand.svg.png'
    },
    {
      icon: 'ⓧ',
      name: 'Blacklisted',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/X-circle.svg/30px-X-circle.svg.png'
    }
  ]

  groups = [
    [
      {
        'name': 'ABC News',
        'link': 'https://en.wikipedia.org/wiki/ABC_News',
        'status': '✅ Generally Reliable',
        'title': 'ABC News - Wikipedia',
        'image': 'ABC News.png',
        'image2': 'ABC News-1.png'
      },
      {
        'name': 'The Age',
        'link': 'https://en.wikipedia.org/wiki/The_Age',
        'status': '✅ Generally Reliable',
        'title': 'The Age - Wikipedia',
        'image': 'The Age.png',
        'image2': 'The Age-1.png'
      },
      {
        'name': 'Agence France-Presse',
        'link': 'https://en.wikipedia.org/wiki/Agence_France-Presse',
        'status': '✅ Generally Reliable',
        'title': 'Agence France-Presse - Wikipedia',
        'image': 'Agence France-Presse.png',
        'image2': 'Agence France-Presse-1.png'
      },
      {
        'name': 'Al Jazeera',
        'link': 'https://en.wikipedia.org/wiki/Al_Jazeera',
        'status': '✅ Generally Reliable',
        'title': 'Al Jazeera - Wikipedia',
        'image2': 'Al Jazeera-1.png'
      },
      {
        'name': 'Anti-Defamation League',
        'link': 'https://en.wikipedia.org/wiki/Anti-Defamation_League',
        'status': '✅ Generally Reliable',
        'title': 'Anti-Defamation League - Wikipedia',
        'image': 'Anti-Defamation League.png',
        'image2': 'Anti-Defamation League-1.png'
      },
      {
        'name': 'Ars Technica',
        'link': 'https://en.wikipedia.org/wiki/Ars_Technica',
        'status': '✅ Generally Reliable',
        'title': 'Ars Technica - Wikipedia',
        'image2': 'Ars Technica-1.png',
        'image': 'Ars Technica.png'
      },
      {
        'name': 'Associated Press',
        'link': 'https://en.wikipedia.org/wiki/Associated_Press',
        'status': '✅ Generally Reliable',
        'title': 'Associated Press - Wikipedia',
        'image': 'Associated Press.png',
        'image2': 'Associated Press-1.png'
      },
      {
        'name': 'The Atlantic',
        'link': 'https://en.wikipedia.org/wiki/The_Atlantic',
        'status': '✅ Generally Reliable',
        'title': 'The Atlantic - Wikipedia',
        'image2': 'The Atlantic-1.png'
      },
      {
        'name': 'The Australian',
        'link': 'https://en.wikipedia.org/wiki/The_Australian',
        'status': '✅ Generally Reliable',
        'title': 'The Australian - Wikipedia',
        'image': 'The Australian.png',
        'image2': 'The Australian-1.jpg'
      },
      {
        'name': 'The A.V. Club',
        'link': 'https://en.wikipedia.org/wiki/The_A.V._Club',
        'status': '✅ Generally Reliable',
        'title': 'The A.V. Club - Wikipedia',
        'image': 'The A.V. Club.png',
        'image2': 'The A.V. Club-1.png'
      },
      {
        'name': 'AVN (magazine)',
        'link': 'https://en.wikipedia.org/wiki/AVN_(magazine)',
        'status': '✅ Generally Reliable',
        'title': 'AVN (magazine) - Wikipedia',
        'image': 'AVN (magazine).png',
        'image2': 'AVN (magazine)-1.png'
      },
      {
        'name': 'Axios',
        'link': 'https://en.wikipedia.org/wiki/Axios_(website)',
        'status': '✅ Generally Reliable',
        'title': 'Axios (website) - Wikipedia',
        'image2': 'Axios-1.png',
        'image': 'Axios.png'
      },
      {
        'name': 'BBC',
        'link': 'https://en.wikipedia.org/wiki/BBC',
        'status': '✅ Generally Reliable',
        'title': 'BBC - Wikipedia',
        'image2': 'BBC-1.png'
      },
      {
        'name': 'Bellingcat',
        'link': 'https://en.wikipedia.org/wiki/Bellingcat',
        'status': '✅ Generally Reliable',
        'title': 'Bellingcat - Wikipedia',
        'image2': 'Bellingcat-1.png'
      },
      {
        'name': 'Bloomberg',
        'link': 'https://en.wikipedia.org/wiki/Bloomberg_L.P.',
        'status': '✅ Generally Reliable',
        'title': 'Bloomberg L.P. - Wikipedia',
        'image2': 'Bloomberg-1.jpg',
        'image': 'Bloomberg.png'
      },
      {
        'name': 'Burke\'s Peerage',
        'link': 'https://en.wikipedia.org/wiki/Burke%27s_Peerage',
        'status': '✅ Generally Reliable',
        'title': 'Burke&#039;s Peerage - Wikipedia',
        'image1': 'https://upload.wikimedia.org/wikipedia/commons/4/45/Burkes-062012_square.gif',
        'image': 'Burke\'s Peerage.png'
      },
      {
        'name': 'BuzzFeed News',
        'link': 'https://en.wikipedia.org/wiki/BuzzFeed_News',
        'status': '✅ Generally Reliable',
        'title': 'BuzzFeed News - Wikipedia',
        'image2': 'BuzzFeed News-1.png',
        'image': 'BuzzFeed News.png'
      },
      {
        'name': 'The Christian Science Monitor',
        'link': 'https://en.wikipedia.org/wiki/The_Christian_Science_Monitor',
        'status': '✅ Generally Reliable',
        'title': 'The Christian Science Monitor - Wikipedia',
        'image2': 'The Christian Science Monitor-1.jpg',
        'image': 'The Christian Science Monitor.png'
      },
      {
        'name': 'Climate Feedback',
        'link': 'https://en.wikipedia.org/wiki/Climate_Feedback',
        'status': '✅ Generally Reliable',
        'title': 'Climate Feedback - Wikipedia',
        'image2': 'Climate Feedback-1.png'
      },
      {
        'name': 'CNET',
        'link': 'https://en.wikipedia.org/wiki/CNET',
        'status': '✅ Generally Reliable',
        'title': 'CNET - Wikipedia',
        'image': 'CNET.png',
        'image2': 'CNET-1.png'
      },
      {
        'name': 'CNN',
        'link': 'https://en.wikipedia.org/wiki/CNN',
        'status': '✅ Generally Reliable',
        'title': 'CNN - Wikipedia',
        'image': 'CNN.png',
        'image2': 'CNN-1.png'
      },
      {
        'name': 'Coda Media',
        'link': 'https://en.wikipedia.org/wiki/Coda_Media',
        'status': '✅ Generally Reliable',
        'title': 'Coda Media - Wikipedia',
        'image': 'Coda Media.png',
        'image2': 'Coda Media-1.png'
      },
      {
        'name': 'Common Sense Media',
        'link': 'https://en.wikipedia.org/wiki/Common_Sense_Media',
        'status': '✅ Generally Reliable',
        'title': 'Common Sense Media - Wikipedia',
        'image': 'Common Sense Media.png',
        'image2': 'Common Sense Media-1.png'
      },
      {
        'name': 'The Conversation',
        'link': 'https://en.wikipedia.org/wiki/The_Conversation_(website)',
        'status': '✅ Generally Reliable',
        'title': 'The Conversation (website) - Wikipedia',
        'image2': 'The Conversation-1.png'
      },
      {
        'name': 'The Daily Dot',
        'link': 'https://en.wikipedia.org/wiki/The_Daily_Dot',
        'status': '✅ Generally Reliable',
        'title': 'The Daily Dot - Wikipedia',
        'image': 'The Daily Dot.png',
        'image2': 'The Daily Dot-1.png'
      },
      {
        'name': 'The Daily Telegraph',
        'link': 'https://en.wikipedia.org/wiki/The_Daily_Telegraph',
        'status': '✅ Generally Reliable',
        'title': 'The Daily Telegraph - Wikipedia',
        'image2': 'The Daily Telegraph-1.jpg',
        'image': 'The Daily Telegraph.png'
      },
      {
        'name': 'Deadline Hollywood',
        'link': 'https://en.wikipedia.org/wiki/Deadline_Hollywood',
        'status': '✅ Generally Reliable',
        'title': 'Deadline Hollywood - Wikipedia',
        'image': 'Deadline Hollywood.png',
        'image2': 'Deadline Hollywood-1.jpg'
      },
      {
        'name': 'Debrett\'s',
        'link': 'https://en.wikipedia.org/wiki/Debrett%27s',
        'status': '✅ Generally Reliable',
        'title': 'Debrett&#039;s - Wikipedia',
        'image': 'Debrett\'s.jpg',
        'image2': 'Debrett\'s-1.jpg'
      },
      {
        'name': 'Deseret News',
        'link': 'https://en.wikipedia.org/wiki/Deseret_News',
        'status': '✅ Generally Reliable',
        'title': 'Deseret News - Wikipedia',
        'image': 'Deseret News.png',
        'image2': 'Deseret News-1.jpg'
      },
      {
        'name': 'Digital Spy',
        'link': 'https://en.wikipedia.org/wiki/Digital_Spy',
        'status': '✅ Generally Reliable',
        'title': 'Digital Spy - Wikipedia',
        'image2': 'Digital Spy-1.png'
      },
      {
        'name': 'The Diplomat',
        'link': 'https://en.wikipedia.org/wiki/The_Diplomat',
        'status': '✅ Generally Reliable',
        'title': 'The Diplomat - Wikipedia',
        'image2': 'The Diplomat-1.png'
      },
      {
        'name': 'The Economist',
        'link': 'https://en.wikipedia.org/wiki/The_Economist',
        'status': '✅ Generally Reliable',
        'title': 'The Economist - Wikipedia',
        'image': 'The Economist.png',
        'image2': 'The Economist-1.png'
      },
      {
        'name': 'Engadget',
        'link': 'https://en.wikipedia.org/wiki/Engadget',
        'status': '✅ Generally Reliable',
        'title': 'Engadget - Wikipedia',
        'image2': 'Engadget-1.png'
      },
      {
        'name': 'Entertainment Weekly',
        'link': 'https://en.wikipedia.org/wiki/Entertainment_Weekly',
        'status': '✅ Generally Reliable',
        'title': 'Entertainment Weekly - Wikipedia',
        'image': 'Entertainment Weekly.png',
        'image2': 'Entertainment Weekly-1.jpg'
      },
      {
        'name': 'Financial Times',
        'link': 'https://en.wikipedia.org/wiki/Financial_Times',
        'status': '✅ Generally Reliable',
        'title': 'Financial Times - Wikipedia',
        'image2': 'Financial Times-1.jpg',
        'image': 'Financial Times.png'
      },
      {
        'name': 'Forbes',
        'link': 'https://en.wikipedia.org/wiki/Forbes',
        'status': '✅ Generally Reliable',
        'title': 'Forbes - Wikipedia',
        'image2': 'Forbes-1.jpg',
        'image': 'Forbes.png'
      },
      {
        'name': 'Fox News',
        'link': 'https://en.wikipedia.org/wiki/Fox_News',
        'status': '✅ Generally Reliable',
        'title': 'Fox News - Wikipedia',
        'image': 'Fox News.png',
        'image2': 'Fox News-1.png'
      },
      {
        'name': 'Game Developer',
        'link': 'https://en.wikipedia.org/wiki/Game_Developer_(website)',
        'status': '✅ Generally Reliable',
        'title': 'Game Developer (website) - Wikipedia',
        'image2': 'Game Developer-1.png'
      },
      {
        'name': 'Game Informer',
        'link': 'https://en.wikipedia.org/wiki/Game_Informer',
        'status': '✅ Generally Reliable',
        'title': 'Game Informer - Wikipedia',
        'image': 'Game Informer.png',
        'image2': 'Game Informer-1.jpeg'
      },
      {
        'name': 'Geographic Names Information System',
        'link': 'https://en.wikipedia.org/wiki/Geographic_Names_Information_System',
        'status': '✅ Generally Reliable',
        'title': 'Geographic Names Information System - Wikipedia',
        'image': 'Geographic Names Information System.png'
      },
      {
        'name': 'Gizmodo',
        'link': 'https://en.wikipedia.org/wiki/Gizmodo',
        'status': '✅ Generally Reliable',
        'title': 'Gizmodo - Wikipedia',
        'image2': 'Gizmodo-1.png',
        'image': 'Gizmodo.png'
      },
      {
        'name': 'The Globe and Mail',
        'link': 'https://en.wikipedia.org/wiki/The_Globe_and_Mail',
        'status': '✅ Generally Reliable',
        'title': 'The Globe and Mail - Wikipedia',
        'image': 'The Globe and Mail.png',
        'image2': 'The Globe and Mail-1.png'
      },
      {
        'name': 'The Guardian',
        'link': 'https://en.wikipedia.org/wiki/The_Guardian',
        'status': '✅ Generally Reliable',
        'title': 'The Guardian - Wikipedia',
        'image2': 'The Guardian-1.jpg',
        'image': 'The Guardian.png'
      },
      {
        'name': 'Haaretz',
        'link': 'https://en.wikipedia.org/wiki/Haaretz',
        'status': '✅ Generally Reliable',
        'title': 'Haaretz - Wikipedia',
        'image2': 'Haaretz-1.jpg',
        'image': 'Haaretz.png'
      },
      {
        'name': 'The Hill',
        'link': 'https://en.wikipedia.org/wiki/The_Hill_(newspaper)',
        'status': '✅ Generally Reliable',
        'title': 'The Hill (newspaper) - Wikipedia',
        'image': 'The Hill.png',
        'image2': 'The Hill-1.png'
      },
      {
        'name': 'The Hindu',
        'link': 'https://en.wikipedia.org/wiki/The_Hindu',
        'status': '✅ Generally Reliable',
        'title': 'The Hindu - Wikipedia',
        'image': 'The Hindu.png',
        'image2': 'The Hindu-1.png'
      },
      {
        'name': 'The Hollywood Reporter',
        'link': 'https://en.wikipedia.org/wiki/The_Hollywood_Reporter',
        'status': '✅ Generally Reliable',
        'title': 'The Hollywood Reporter - Wikipedia',
        'image': 'The Hollywood Reporter.png',
        'image2': 'The Hollywood Reporter-1.jpg'
      },
      {
        'name': 'HuffPost',
        'link': 'https://en.wikipedia.org/wiki/HuffPost',
        'status': '✅ Generally Reliable',
        'title': 'HuffPost - Wikipedia',
        'image2': 'HuffPost-1.png'
      },
      {
        'name': 'Idolator',
        'link': 'https://en.wikipedia.org/wiki/Idolator_(website)',
        'status': '✅ Generally Reliable',
        'title': 'Idolator (website) - Wikipedia',
        'image2': 'Idolator-1.png'
      },
      {
        'name': 'IGN',
        'link': 'https://en.wikipedia.org/wiki/IGN',
        'status': '✅ Generally Reliable',
        'title': 'IGN - Wikipedia',
        'image': 'IGN.png',
        'image2': 'IGN-1.png'
      },
      {
        'name': 'The Independent',
        'link': 'https://en.wikipedia.org/wiki/The_Independent',
        'status': '✅ Generally Reliable',
        'title': 'The Independent - Wikipedia',
        'image': 'The Independent.png',
        'image2': 'The Independent-1.png'
      },
      {
        'name': 'The Indian Express',
        'link': 'https://en.wikipedia.org/wiki/The_Indian_Express',
        'status': '✅ Generally Reliable',
        'title': 'The Indian Express - Wikipedia',
        'image': 'The Indian Express.png',
        'image2': 'The Indian Express-1.jpg'
      },
      {
        'name': 'Insider Inc.',
        'link': 'https://en.wikipedia.org/wiki/Insider_Inc.',
        'status': '✅ Generally Reliable',
        'title': 'Insider Inc. - Wikipedia',
        'image2': 'Insider Inc.-1.png'
      },
      {
        'name': 'Inter Press Service',
        'link': 'https://en.wikipedia.org/wiki/Inter_Press_Service',
        'status': '✅ Generally Reliable',
        'title': 'Inter Press Service - Wikipedia',
        'image': 'Inter Press Service.png',
        'image2': 'Inter Press Service-1.png'
      },
      {
        'name': 'The Intercept',
        'link': 'https://en.wikipedia.org/wiki/The_Intercept',
        'status': '✅ Generally Reliable',
        'title': 'The Intercept - Wikipedia',
        'image': 'The Intercept.png',
        'image2': 'The Intercept-1.png'
      },
      {
        'name': 'International Fact-Checking Network',
        'link': 'https://en.wikipedia.org/wiki/International_Fact-Checking_Network',
        'status': '✅ Generally Reliable',
        'title': 'Poynter Institute - Wikipedia',
        'image2': 'International Fact-Checking Network-1.png'
      },
      {
        'name': 'JAMA',
        'link': 'https://en.wikipedia.org/wiki/JAMA',
        'status': '✅ Generally Reliable',
        'title': 'JAMA - Wikipedia',
        'image': 'JAMA.jpg',
        'image2': 'JAMA-1.png'
      },
      {
        'name': 'The Jewish Chronicle',
        'link': 'https://en.wikipedia.org/wiki/The_Jewish_Chronicle',
        'status': '✅ Generally Reliable',
        'title': 'The Jewish Chronicle - Wikipedia',
        'image2': 'The Jewish Chronicle-1.png',
        'image': 'The Jewish Chronicle.jpg'
      },
      {
        'name': 'Kirkus Reviews',
        'link': 'https://en.wikipedia.org/wiki/Kirkus_Reviews',
        'status': '✅ Generally Reliable',
        'title': 'Kirkus Reviews - Wikipedia',
        'image': 'Kirkus Reviews.png',
        'image2': 'Kirkus Reviews-1.png'
      },
      {
        'name': 'Kommersant',
        'link': 'https://en.wikipedia.org/wiki/Kommersant',
        'status': '✅ Generally Reliable',
        'title': 'Kommersant - Wikipedia',
        'image': 'Kommersant.png',
        'image2': 'Kommersant-1.png'
      },
      {
        'name': 'Los Angeles Times',
        'link': 'https://en.wikipedia.org/wiki/Los_Angeles_Times',
        'status': '✅ Generally Reliable',
        'title': 'Los Angeles Times - Wikipedia',
        'image': 'Los Angeles Times.png',
        'image2': 'Los Angeles Times-1.png'
      },
      {
        'name': 'Mail & Guardian',
        'link': 'https://en.wikipedia.org/wiki/Mail_%26_Guardian',
        'status': '✅ Generally Reliable',
        'title': 'Mail &amp; Guardian - Wikipedia',
        'image': 'Mail & Guardian.gif',
        'image2': 'Mail & Guardian-1.gif'
      },
      {
        'name': 'Metacritic',
        'link': 'https://en.wikipedia.org/wiki/Metacritic',
        'status': '✅ Generally Reliable',
        'title': 'Metacritic - Wikipedia',
        'image2': 'Metacritic-1.png'
      },
      {
        'name': 'Le Monde diplomatique',
        'link': 'https://en.wikipedia.org/wiki/Le_Monde_diplomatique',
        'status': '✅ Generally Reliable',
        'title': 'Le Monde diplomatique - Wikipedia',
        'image': 'Le Monde diplomatique.jpg',
        'image2': 'Le Monde diplomatique-1.jpg'
      },
      {
        'name': 'Mother Jones',
        'link': 'https://en.wikipedia.org/wiki/Mother_Jones_(magazine)',
        'status': '✅ Generally Reliable',
        'title': 'Mother Jones (magazine) - Wikipedia',
        'image': 'Mother Jones.png',
        'image2': 'Mother Jones-1.png'
      },
      {
        'name': 'MSNBC',
        'link': 'https://en.wikipedia.org/wiki/MSNBC',
        'status': '✅ Generally Reliable',
        'title': 'MSNBC - Wikipedia',
        'image2': 'MSNBC-1.png'
      },
      {
        'name': 'The Nation',
        'link': 'https://en.wikipedia.org/wiki/The_Nation',
        'status': '✅ Generally Reliable',
        'title': 'The Nation - Wikipedia',
        'image': 'The Nation.jpg',
        'image2': 'The Nation-1.jpg'
      },
      {
        'name': 'National Geographic',
        'link': 'https://en.wikipedia.org/wiki/National_Geographic',
        'status': '✅ Generally Reliable',
        'title': 'National Geographic - Wikipedia',
        'image': 'National Geographic.png',
        'image2': 'National Geographic-1.jpg'
      },
      {
        'name': 'NBC News',
        'link': 'https://en.wikipedia.org/wiki/NBC_News',
        'status': '✅ Generally Reliable',
        'title': 'NBC News - Wikipedia',
        'image': 'NBC News.png',
        'image2': 'NBC News-1.png'
      },
      {
        'name': 'The New Republic',
        'link': 'https://en.wikipedia.org/wiki/The_New_Republic',
        'status': '✅ Generally Reliable',
        'title': 'The New Republic - Wikipedia',
        'image': 'The New Republic.png',
        'image2': 'The New Republic-1.png'
      },
      {
        'name': 'New Scientist',
        'link': 'https://en.wikipedia.org/wiki/New_Scientist',
        'status': '✅ Generally Reliable',
        'title': 'New Scientist - Wikipedia',
        'image': 'New Scientist.png',
        'image2': 'New Scientist-1.jpg'
      },
      {
        'name': 'New York',
        'link': 'https://en.wikipedia.org/wiki/New_York_(magazine)',
        'status': '✅ Generally Reliable',
        'title': 'New York (magazine) - Wikipedia',
        'image': 'New York.png',
        'image2': 'New York-1.png'
      },
      {
        'name': 'New York Daily News',
        'link': 'https://en.wikipedia.org/wiki/New_York_Daily_News',
        'status': '✅ Generally Reliable',
        'title': 'New York Daily News - Wikipedia',
        'image2': 'New York Daily News-1.png',
        'image': 'New York Daily News.png'
      },
      {
        'name': 'The New York Times',
        'link': 'https://en.wikipedia.org/wiki/The_New_York_Times',
        'status': '✅ Generally Reliable',
        'title': 'The New York Times - Wikipedia',
        'image2': 'The New York Times-1.jpg',
        'image': 'The New York Times.png'
      },
      {
        'name': 'The New Yorker',
        'link': 'https://en.wikipedia.org/wiki/The_New_Yorker',
        'status': '✅ Generally Reliable',
        'title': 'The New Yorker - Wikipedia',
        'image': 'The New Yorker.png',
        'image2': 'The New Yorker-1.png'
      },
      {
        'name': 'The New Zealand Herald',
        'link': 'https://en.wikipedia.org/wiki/The_New_Zealand_Herald',
        'status': '✅ Generally Reliable',
        'title': 'The New Zealand Herald - Wikipedia',
        'image': 'The New Zealand Herald.png',
        'image2': 'The New Zealand Herald-1.jpg'
      },
      {
        'name': 'Newsweek',
        'link': 'https://en.wikipedia.org/wiki/Newsweek',
        'status': '✅ Generally Reliable',
        'title': 'Newsweek - Wikipedia',
        'image2': 'Newsweek-1.png'
      },
      {
        'name': 'NPR',
        'link': 'https://en.wikipedia.org/wiki/NPR',
        'status': '✅ Generally Reliable',
        'title': 'NPR - Wikipedia',
        'image': 'NPR.png',
        'image2': 'NPR-1.png'
      },
      {
        'name': 'People',
        'link': 'https://en.wikipedia.org/wiki/People_(magazine)',
        'status': '✅ Generally Reliable',
        'title': 'People (magazine) - Wikipedia',
        'image': 'People.png',
        'image2': 'People-1.png'
      },
      {
        'name': 'Pew Research Center',
        'link': 'https://en.wikipedia.org/wiki/Pew_Research_Center',
        'status': '✅ Generally Reliable',
        'title': 'Pew Research Center - Wikipedia',
        'image2': 'Pew Research Center-1.png'
      },
      {
        'name': 'PinkNews',
        'link': 'https://en.wikipedia.org/wiki/PinkNews',
        'status': '✅ Generally Reliable',
        'title': 'PinkNews - Wikipedia',
        'image': 'PinkNews.png',
        'image2': 'PinkNews-1.png'
      },
      {
        'name': 'Playboy',
        'link': 'https://en.wikipedia.org/wiki/Playboy',
        'status': '✅ Generally Reliable',
        'title': 'Playboy - Wikipedia',
        'image': 'Playboy.png',
        'image2': 'Playboy-1.png'
      },
      {
        'name': 'Politico',
        'link': 'https://en.wikipedia.org/wiki/Politico',
        'status': '✅ Generally Reliable',
        'title': 'Politico - Wikipedia',
        'image2': 'Politico-1.png'
      },
      {
        'name': 'PolitiFact',
        'link': 'https://en.wikipedia.org/wiki/PolitiFact',
        'status': '✅ Generally Reliable',
        'title': 'PolitiFact - Wikipedia',
        'image': 'PolitiFact.png',
        'image2': 'PolitiFact-1.png'
      },
      {
        'name': 'Polygon',
        'link': 'https://en.wikipedia.org/wiki/Polygon_(website)',
        'status': '✅ Generally Reliable',
        'title': 'Polygon (website) - Wikipedia',
        'image': 'Polygon.png',
        'image2': 'Polygon-1.png'
      },
      {
        'name': 'ProPublica',
        'link': 'https://en.wikipedia.org/wiki/ProPublica',
        'status': '✅ Generally Reliable',
        'title': 'ProPublica - Wikipedia',
        'image2': 'ProPublica-1.png'
      },
      {
        'name': 'Quartz',
        'link': 'https://en.wikipedia.org/wiki/Quartz_(website)',
        'status': '✅ Generally Reliable',
        'title': 'Quartz (publication) - Wikipedia',
        'image2': 'Quartz-1.png'
      },
      {
        'name': 'Radio Free Asia',
        'link': 'https://en.wikipedia.org/wiki/Radio_Free_Asia',
        'status': '✅ Generally Reliable',
        'title': 'Radio Free Asia - Wikipedia',
        'image2': 'Radio Free Asia-1.png'
      },
      {
        'name': 'Rappler',
        'link': 'https://en.wikipedia.org/wiki/Rappler',
        'status': '✅ Generally Reliable',
        'title': 'Rappler - Wikipedia',
        'image': 'Rappler.png',
        'image2': 'Rappler-1.png'
      },
      {
        'name': 'Reason',
        'link': 'https://en.wikipedia.org/wiki/Reason_(magazine)',
        'status': '✅ Generally Reliable',
        'title': 'Reason (magazine) - Wikipedia',
        'image': 'Reason.png',
        'image2': 'Reason-1.jpg'
      },
      {
        'name': 'The Register',
        'link': 'https://en.wikipedia.org/wiki/The_Register',
        'status': '✅ Generally Reliable',
        'title': 'The Register - Wikipedia',
        'image': 'The Register.png',
        'image2': 'The Register-1.png'
      },
      {
        'name': 'Religion News Service',
        'link': 'https://en.wikipedia.org/wiki/Religion_News_Service',
        'status': '✅ Generally Reliable',
        'title': 'Religion News Service - Wikipedia',
        'image': 'Religion News Service.png',
        'image2': 'Religion News Service-1.png'
      },
      {
        'name': 'Reuters',
        'link': 'https://en.wikipedia.org/wiki/Reuters',
        'status': '✅ Generally Reliable',
        'title': 'Reuters - Wikipedia',
        'image': 'Reuters.png',
        'image2': 'Reuters-1.png'
      },
      {
        'name': 'Rolling Stone',
        'link': 'https://en.wikipedia.org/wiki/Rolling_Stone',
        'status': '✅ Generally Reliable',
        'title': 'Rolling Stone - Wikipedia',
        'image2': 'Rolling Stone-1.png',
        'image': 'Rolling Stone.png'
      },
      {
        'name': 'Rotten Tomatoes',
        'link': 'https://en.wikipedia.org/wiki/Rotten_Tomatoes',
        'status': '✅ Generally Reliable',
        'title': 'Rotten Tomatoes - Wikipedia',
        'image': 'Rotten Tomatoes.png',
        'image2': 'Rotten Tomatoes-1.png'
      },
      {
        'name': 'Science-Based Medicine',
        'link': 'https://en.wikipedia.org/wiki/Science-Based_Medicine',
        'status': '✅ Generally Reliable',
        'title': 'Science-Based Medicine - Wikipedia',
        'image': 'Science-Based Medicine.png',
        'image2': 'Science-Based Medicine-1.png'
      },
      {
        'name': 'Scientific American',
        'link': 'https://en.wikipedia.org/wiki/Scientific_American',
        'status': '✅ Generally Reliable',
        'title': 'Scientific American - Wikipedia',
        'image': 'Scientific American.png',
        'image2': 'Scientific American-1.jpg'
      },
      {
        'name': 'SCOTUSblog',
        'link': 'https://en.wikipedia.org/wiki/SCOTUSblog',
        'status': '✅ Generally Reliable',
        'title': 'SCOTUSblog - Wikipedia',
        'image2': 'SCOTUSblog-1.png'
      },
      {
        'name': 'Slate',
        'link': 'https://en.wikipedia.org/wiki/Slate_(magazine)',
        'status': '✅ Generally Reliable',
        'title': 'Slate (magazine) - Wikipedia',
        'image': 'Slate.png',
        'image2': 'Slate-1.png'
      },
      {
        'name': 'Snopes',
        'link': 'https://en.wikipedia.org/wiki/Snopes',
        'status': '✅ Generally Reliable',
        'title': 'Snopes - Wikipedia',
        'image': 'Snopes.png',
        'image2': 'Snopes-1.png'
      },
      {
        'name': 'South China Morning Post',
        'link': 'https://en.wikipedia.org/wiki/South_China_Morning_Post',
        'status': '✅ Generally Reliable',
        'title': 'South China Morning Post - Wikipedia',
        'image2': 'South China Morning Post-1.png',
        'image': 'South China Morning Post.png'
      },
      {
        'name': 'Southern Poverty Law Center',
        'link': 'https://en.wikipedia.org/wiki/Southern_Poverty_Law_Center',
        'status': '✅ Generally Reliable',
        'title': 'Southern Poverty Law Center - Wikipedia',
        'image2': 'Southern Poverty Law Center-1.png'
      },
      {
        'name': 'Space.com',
        'link': 'https://en.wikipedia.org/wiki/Space.com',
        'status': '✅ Generally Reliable',
        'title': 'Space.com - Wikipedia',
        'image': 'Space.com.png',
        'image2': 'Space.com-1.png'
      },
      {
        'name': 'Der Spiegel',
        'link': 'https://en.wikipedia.org/wiki/Der_Spiegel',
        'status': '✅ Generally Reliable',
        'title': 'Der Spiegel - Wikipedia',
        'image': 'Der Spiegel.png',
        'image2': 'Der Spiegel-1.jpg'
      },
      {
        'name': 'The Sydney Morning Herald',
        'link': 'https://en.wikipedia.org/wiki/The_Sydney_Morning_Herald',
        'status': '✅ Generally Reliable',
        'title': 'The Sydney Morning Herald - Wikipedia',
        'image': 'The Sydney Morning Herald.png',
        'image2': 'The Sydney Morning Herald-1.jpg'
      },
      {
        'name': 'TheWrap',
        'link': 'https://en.wikipedia.org/wiki/TheWrap',
        'status': '✅ Generally Reliable',
        'title': 'TheWrap - Wikipedia',
        'image2': 'TheWrap-1.png',
        'image': 'TheWrap.png'
      },
      {
        'name': 'Time',
        'link': 'https://en.wikipedia.org/wiki/Time_(magazine)',
        'status': '✅ Generally Reliable',
        'title': 'Time (magazine) - Wikipedia',
        'image2': 'Time-1.png'
      },
      {
        'name': 'The Times',
        'link': 'https://en.wikipedia.org/wiki/The_Times',
        'status': '✅ Generally Reliable',
        'title': 'The Times - Wikipedia',
        'image': 'The Times.png',
        'image2': 'The Times-1.jpg'
      },
      {
        'name': 'TorrentFreak',
        'link': 'https://en.wikipedia.org/wiki/TorrentFreak',
        'status': '✅ Generally Reliable',
        'title': 'TorrentFreak - Wikipedia',
        'image': 'TorrentFreak.png',
        'image2': 'TorrentFreak-1.png'
      },
      {
        'name': 'TV Guide',
        'link': 'https://en.wikipedia.org/wiki/TV_Guide',
        'status': '✅ Generally Reliable',
        'title': 'TV Guide - Wikipedia',
        'image': 'TV Guide.png',
        'image2': 'TV Guide-1.png'
      },
      {
        'name': 'U.S. News & World Report',
        'link': 'https://en.wikipedia.org/wiki/U.S._News_%26_World_Report',
        'status': '✅ Generally Reliable',
        'title': 'U.S. News &amp; World Report - Wikipedia',
        'image2': 'U.S. News & World Report-1.png'
      },
      {
        'name': 'USA Today',
        'link': 'https://en.wikipedia.org/wiki/USA_Today',
        'status': '✅ Generally Reliable',
        'title': 'USA Today - Wikipedia',
        'image': 'USA Today.png',
        'image2': 'USA Today-1.png'
      },
      {
        'name': 'Vanity Fair',
        'link': 'https://en.wikipedia.org/wiki/Vanity_Fair_(magazine)',
        'status': '✅ Generally Reliable',
        'title': 'Vanity Fair (magazine) - Wikipedia',
        'image2': 'Vanity Fair-1.png'
      },
      {
        'name': 'Variety',
        'link': 'https://en.wikipedia.org/wiki/Variety_(magazine)',
        'status': '✅ Generally Reliable',
        'title': 'Variety (magazine) - Wikipedia',
        'image': 'Variety.png',
        'image2': 'Variety-1.jpg'
      },
      {
        'name': 'VentureBeat',
        'link': 'https://en.wikipedia.org/wiki/VentureBeat',
        'status': '✅ Generally Reliable',
        'title': 'VentureBeat - Wikipedia',
        'image': 'VentureBeat.png',
        'image2': 'VentureBeat-1.png'
      },
      {
        'name': 'The Verge',
        'link': 'https://en.wikipedia.org/wiki/The_Verge',
        'status': '✅ Generally Reliable',
        'title': 'The Verge - Wikipedia',
        'image': 'The Verge.png',
        'image2': 'The Verge-1.png'
      },
      {
        'name': 'Vogue',
        'link': 'https://en.wikipedia.org/wiki/Vogue_(magazine)',
        'status': '✅ Generally Reliable',
        'title': 'Vogue (magazine) - Wikipedia',
        'image2': 'Vogue-1.png'
      },
      {
        'name': 'Vox',
        'link': 'https://en.wikipedia.org/wiki/Vox_(website)',
        'status': '✅ Generally Reliable',
        'title': 'Vox (website) - Wikipedia',
        'image': 'Vox.png',
        'image2': 'Vox-1.png'
      },
      {
        'name': 'The Wall Street Journal',
        'link': 'https://en.wikipedia.org/wiki/The_Wall_Street_Journal',
        'status': '✅ Generally Reliable',
        'title': 'The Wall Street Journal - Wikipedia',
        'image2': 'The Wall Street Journal-1.png'
      },
      {
        'name': 'The Washington Post',
        'link': 'https://en.wikipedia.org/wiki/The_Washington_Post',
        'status': '✅ Generally Reliable',
        'title': 'The Washington Post - Wikipedia',
        'image': 'The Washington Post.png',
        'image2': 'The Washington Post-1.jpg'
      },
      {
        'name': 'The Weekly Standard',
        'link': 'https://en.wikipedia.org/wiki/The_Weekly_Standard',
        'status': '✅ Generally Reliable',
        'title': 'The Weekly Standard - Wikipedia',
        'image': 'The Weekly Standard.png',
        'image2': 'The Weekly Standard-1.jpg'
      },
      {
        'name': 'Wired',
        'link': 'https://en.wikipedia.org/wiki/Wired_(magazine)',
        'status': '✅ Generally Reliable',
        'title': 'Wired (magazine) - Wikipedia',
        'image': 'Wired.png',
        'image2': 'Wired-1.png'
      },
      {
        'name': 'ZDNet',
        'link': 'https://en.wikipedia.org/wiki/ZDNet',
        'status': '✅ Generally Reliable',
        'title': 'ZDNet - Wikipedia',
        'image2': 'ZDNet-1.png',
        'image': 'ZDNet.png'
      }
    ],
    [
      {
        'name': 'The American Conservative',
        'link': 'https://en.wikipedia.org/wiki/The_American_Conservative',
        'status': '⚠ No Consensus',
        'title': 'The American Conservative - Wikipedia',
        'image': 'The American Conservative.png',
        'image2': 'The American Conservative-1.jpg'
      },
      {
        'name': 'Anadolu Agency',
        'link': 'https://en.wikipedia.org/wiki/Anadolu_Agency',
        'status': '⚠ No Consensus',
        'title': 'Anadolu Agency - Wikipedia',
        'image': 'Anadolu Agency.jpg',
        'image2': 'Anadolu Agency-1.jpg'
      },
      {
        'name': 'Apple Daily',
        'link': 'https://en.wikipedia.org/wiki/Apple_Daily',
        'status': '⚠ No Consensus',
        'title': 'Apple Daily - Wikipedia',
        'image': 'Apple Daily.png',
        'image2': 'Apple Daily-1.jpg'
      },
      {
        'name': 'Arab News',
        'link': 'https://en.wikipedia.org/wiki/Arab_News',
        'status': '⚠ No Consensus',
        'title': 'Arab News - Wikipedia',
        'image': 'Arab News.png',
        'image2': 'Arab News-1.png'
      },
      {
        'name': 'Asian News International',
        'link': 'https://en.wikipedia.org/wiki/Asian_News_International',
        'status': '⚠ No Consensus',
        'title': 'Asian News International - Wikipedia',
        'image2': 'Asian News International-1.png'
      },
      {
        'name': 'Australian Strategic Policy Institute',
        'link': 'https://en.wikipedia.org/wiki/Australian_Strategic_Policy_Institute',
        'status': '⚠ No Consensus',
        'title': 'Australian Strategic Policy Institute - Wikipedia',
        'image': 'Australian Strategic Policy Institute.svg',
        'image2': 'Australian Strategic Policy Institute-1.png'
      },
      {
        'name': 'Ballotpedia',
        'link': 'https://en.wikipedia.org/wiki/Ballotpedia',
        'status': '⚠ No Consensus',
        'title': 'Ballotpedia - Wikipedia',
        'image2': 'Ballotpedia-1.png'
      },
      {
        'name': 'Biography.com',
        'link': 'https://en.wikipedia.org/wiki/Biography.com',
        'status': '⚠ No Consensus',
        'title': 'Biography (TV program) - Wikipedia',
        'image': 'Biography.com.png',
        'image2': 'Biography.com-1.png'
      },
      {
        'name': 'Bloomberg',
        'link': 'https://en.wikipedia.org/wiki/Bloomberg_L.P.',
        'status': '⚠ No Consensus',
        'title': 'Bloomberg L.P. - Wikipedia',
        'image': 'Bloomberg.png',
        'image2': 'Bloomberg-1.jpg'
      },
      {
        'name': 'Boing Boing',
        'link': 'https://en.wikipedia.org/wiki/Boing_Boing',
        'status': '⚠ No Consensus',
        'title': 'Boing Boing - Wikipedia',
        'image2': 'Boing Boing-1.png'
      },
      {
        'name': 'Business Insider',
        'link': 'https://en.wikipedia.org/wiki/Business_Insider',
        'status': '⚠ No Consensus',
        'title': 'Insider (news website) - Wikipedia',
        'image': 'Business Insider.png',
        'image2': 'Business Insider-1.png'
      },
      {
        'name': 'Bustle',
        'link': 'https://en.wikipedia.org/wiki/Bustle_(magazine)',
        'status': '⚠ No Consensus',
        'title': 'Bustle (magazine) - Wikipedia',
        'image2': 'Bustle-1.png'
      },
      {
        'name': 'BuzzFeed',
        'link': 'https://en.wikipedia.org/wiki/BuzzFeed',
        'status': '⚠ No Consensus',
        'title': 'BuzzFeed - Wikipedia',
        'image2': 'BuzzFeed-1.png'
      },
      {
        'name': 'Cato Institute',
        'link': 'https://en.wikipedia.org/wiki/Cato_Institute',
        'status': '⚠ No Consensus',
        'title': 'Cato Institute - Wikipedia',
        'image': 'Cato Institute.png',
        'image2': 'Cato Institute-1.png'
      },
      {
        'name': 'Center for Economic and Policy Research',
        'link': 'https://en.wikipedia.org/wiki/Center_for_Economic_and_Policy_Research',
        'status': '⚠ No Consensus',
        'title': 'Center for Economic and Policy Research - Wikipedia',
        'image2': 'Center for Economic and Policy Research-1.png'
      },
      {
        'name': 'China Daily',
        'link': 'https://en.wikipedia.org/wiki/China_Daily',
        'status': '⚠ No Consensus',
        'title': 'China Daily - Wikipedia',
        'image2': 'China Daily-1.jpg'
      },
      {
        'name': 'CliffsNotes',
        'link': 'https://en.wikipedia.org/wiki/CliffsNotes',
        'status': '⚠ No Consensus',
        'title': 'CliffsNotes - Wikipedia',
        'image': 'CliffsNotes.jpg'
      },
      {
        'name': 'Cosmopolitan',
        'link': 'https://en.wikipedia.org/wiki/Cosmopolitan_(magazine)',
        'status': '⚠ No Consensus',
        'title': 'Cosmopolitan (magazine) - Wikipedia',
        'image': 'Cosmopolitan.png',
        'image2': 'Cosmopolitan-1.jpeg'
      },
      {
        'name': 'The Daily Beast',
        'link': 'https://en.wikipedia.org/wiki/The_Daily_Beast',
        'status': '⚠ No Consensus',
        'title': 'The Daily Beast - Wikipedia',
        'image2': 'The Daily Beast-1.png'
      },
      {
        'name': 'Daily Mirror',
        'link': 'https://en.wikipedia.org/wiki/Daily_Mirror',
        'status': '⚠ No Consensus',
        'title': 'Daily Mirror - Wikipedia',
        'image': 'Daily Mirror.png',
        'image2': 'Daily Mirror-1.jpg'
      },
      {
        'name': 'Democracy Now!',
        'link': 'https://en.wikipedia.org/wiki/Democracy_Now!',
        'status': '⚠ No Consensus',
        'title': 'Democracy Now! - Wikipedia',
        'image': 'Democracy Now!.png',
        'image2': 'Democracy Now!-1.png'
      },
      {
        'name': 'Dotdash',
        'link': 'https://en.wikipedia.org/wiki/Dotdash',
        'status': '⚠ No Consensus',
        'title': 'Dotdash - Wikipedia',
        'image2': 'Dotdash-1.png'
      },
      {
        'name': 'Encyclopædia Britannica',
        'link': 'https://en.wikipedia.org/wiki/Encyclop%C3%A6dia_Britannica',
        'status': '⚠ No Consensus',
        'title': 'Encyclopædia Britannica - Wikipedia',
        'image': 'Encyclopædia Britannica.png',
        'image2': 'Encyclopædia Britannica-1.png'
      },
      {
        'name': 'Entrepreneur',
        'link': 'https://en.wikipedia.org/wiki/Entrepreneur_(magazine)',
        'status': '⚠ No Consensus',
        'title': 'Entrepreneur (magazine) - Wikipedia',
        'image': 'Entrepreneur.png',
        'image2': 'Entrepreneur-1.jpg'
      },
      {
        'name': 'Evening Standard',
        'link': 'https://en.wikipedia.org/wiki/Evening_Standard',
        'status': '⚠ No Consensus',
        'title': 'Evening Standard - Wikipedia',
        'image': 'Evening Standard.png',
        'image2': 'Evening Standard-1.jpg'
      },
      {
        'name': 'Fairness and Accuracy in Reporting',
        'link': 'https://en.wikipedia.org/wiki/Fairness_%26_Accuracy_in_Reporting',
        'status': '⚠ No Consensus',
        'title': 'Fairness &amp; Accuracy in Reporting - Wikipedia',
        'image': 'Fairness and Accuracy in Reporting.jpg',
        'image2': 'Fairness and Accuracy in Reporting-1.jpg'
      },
      {
        'name': 'Fox News',
        'link': 'https://en.wikipedia.org/wiki/Fox_News',
        'status': '⚠ No Consensus',
        'title': 'Fox News - Wikipedia',
        'image': 'Fox News.png',
        'image2': 'Fox News-1.png'
      },
      {
        'name': 'Genius',
        'link': 'https://en.wikipedia.org/wiki/Genius_(website)',
        'status': '⚠ No Consensus',
        'title': 'Genius (website) - Wikipedia',
        'image2': 'Genius-1.png'
      },
      {
        'name': 'Google Maps',
        'link': 'https://en.wikipedia.org/wiki/Google_Maps',
        'status': '⚠ No Consensus',
        'title': 'Google Maps - Wikipedia',
        'image': 'Google Maps.png',
        'image2': 'Google Maps-1.png'
      },
      {
        'name': 'The Green Papers',
        'link': 'https://en.wikipedia.org/wiki/The_Green_Papers',
        'status': '⚠ No Consensus',
        'title': 'The Green Papers - Wikipedia',
        'image2': 'The Green Papers-1.gif'
      },
      {
        'name': 'The Guardian',
        'link': 'https://en.wikipedia.org/wiki/The_Guardian',
        'status': '⚠ No Consensus',
        'title': 'The Guardian - Wikipedia',
        'image': 'The Guardian.svg',
        'image2': 'The Guardian-1.png'
      },
      {
        'name': 'Guinness World Records',
        'link': 'https://en.wikipedia.org/wiki/Guinness_World_Records',
        'status': '⚠ No Consensus',
        'title': 'Guinness World Records - Wikipedia',
        'image': 'Guinness World Records.png',
        'image2': 'Guinness World Records-1.png'
      },
      {
        'name': 'Hansard',
        'link': 'https://en.wikipedia.org/wiki/Hansard',
        'status': '⚠ No Consensus',
        'title': 'Hansard - Wikipedia',
        'image': 'Hansard.jpg'
      },
      {
        'name': 'Heavy.com',
        'link': 'https://en.wikipedia.org/wiki/Heavy.com',
        'status': '⚠ No Consensus',
        'title': 'Heavy (website) - Wikipedia',
        'image': 'Heavy.com.png',
        'image2': 'Heavy.com-1.png'
      },
      {
        'name': 'Hope not Hate',
        'link': 'https://en.wikipedia.org/wiki/Hope_not_Hate',
        'status': '⚠ No Consensus',
        'title': 'Hope not Hate - Wikipedia',
        'image': 'Hope not Hate.png',
        'image2': 'Hope not Hate-1.png'
      },
      {
        'name': 'HuffPost',
        'link': 'https://en.wikipedia.org/wiki/HuffPost',
        'status': '⚠ No Consensus',
        'title': 'HuffPost - Wikipedia',
        'image2': 'HuffPost-1.png'
      },
      {
        'name': 'Human Events',
        'link': 'https://en.wikipedia.org/wiki/Human_Events',
        'status': '⚠ No Consensus',
        'title': 'Human Events - Wikipedia',
        'image': 'Human Events.png',
        'image2': 'Human Events-1.png'
      },
      {
        'name': 'Independent Journal Review',
        'link': 'https://en.wikipedia.org/wiki/Independent_Journal_Review',
        'status': '⚠ No Consensus',
        'title': 'Independent Journal Review - Wikipedia',
        'image2': 'Independent Journal Review-1.png'
      },
      {
        'name': 'Investopedia',
        'link': 'https://en.wikipedia.org/wiki/Investopedia',
        'status': '⚠ No Consensus',
        'title': 'Investopedia - Wikipedia',
        'image2': 'Investopedia-1.png'
      },
      {
        'name': 'Jezebel',
        'link': 'https://en.wikipedia.org/wiki/Jezebel_(website)',
        'status': '⚠ No Consensus',
        'title': 'Jezebel (website) - Wikipedia',
        'image2': 'Jezebel-1.png'
      },
      {
        'name': 'Mashable',
        'link': 'https://en.wikipedia.org/wiki/Mashable',
        'status': '⚠ No Consensus',
        'title': 'Mashable - Wikipedia',
        'image2': 'Mashable-1.png'
      },
      {
        'name': 'MDPI',
        'link': 'https://en.wikipedia.org/wiki/MDPI',
        'status': '⚠ No Consensus',
        'title': 'MDPI - Wikipedia',
        'image2': 'MDPI-1.png'
      },
      {
        'name': 'Media Matters for America',
        'link': 'https://en.wikipedia.org/wiki/Media_Matters_for_America',
        'status': '⚠ No Consensus',
        'title': 'Media Matters for America - Wikipedia',
        'image': 'Media Matters for America.jpg',
        'image2': 'Media Matters for America-1.png'
      },
      {
        'name': 'Mediaite',
        'link': 'https://en.wikipedia.org/wiki/Mediaite',
        'status': '⚠ No Consensus',
        'title': 'Mediaite - Wikipedia',
        'image2': 'Mediaite-1.png'
      },
      {
        'name': 'MetalSucks',
        'link': 'https://en.wikipedia.org/wiki/MetalSucks',
        'status': '⚠ No Consensus',
        'title': 'MetalSucks - Wikipedia',
        'image2': 'MetalSucks-1.png'
      },
      {
        'name': 'Middle East Media Research Institute',
        'link': 'https://en.wikipedia.org/wiki/Middle_East_Media_Research_Institute',
        'status': '⚠ No Consensus',
        'title': 'Middle East Media Research Institute - Wikipedia',
        'image2': 'Middle East Media Research Institute-1.jpg'
      },
      {
        'name': 'Mondoweiss',
        'link': 'https://en.wikipedia.org/wiki/Mondoweiss',
        'status': '⚠ No Consensus',
        'title': 'Mondoweiss - Wikipedia',
        'image2': 'Mondoweiss-1.png'
      },
      {
        'name': 'Morning Star (UK)',
        'link': 'https://en.wikipedia.org/wiki/Morning_Star_(British_newspaper)',
        'status': '⚠ No Consensus',
        'title': 'Morning Star (British newspaper) - Wikipedia',
        'image': 'Morning Star (UK).png',
        'image2': 'Morning Star (UK)-1.png'
      },
      {
        'name': 'National Review',
        'link': 'https://en.wikipedia.org/wiki/National_Review',
        'status': '⚠ No Consensus',
        'title': 'National Review - Wikipedia',
        'image': 'National Review.jpeg',
        'image2': 'National Review-1.jpg'
      },
      {
        'name': 'The Needle Drop',
        'link': 'https://en.wikipedia.org/wiki/The_Needle_Drop',
        'status': '⚠ No Consensus',
        'title': 'Anthony Fantano - Wikipedia',
        'image': 'The Needle Drop.png',
        'image2': 'The Needle Drop-1.png'
      },
      {
        'name': 'The Next Web',
        'link': 'https://en.wikipedia.org/wiki/The_Next_Web',
        'status': '⚠ No Consensus',
        'title': 'TNW (website) - Wikipedia',
        'image2': 'The Next Web-1.png'
      },
      {
        'name': 'Pride.com',
        'link': 'https://en.wikipedia.org/wiki/Pride.com',
        'status': '⚠ No Consensus',
        'title': 'Here Media - Wikipedia',
        'image2': 'Pride.com-1.png'
      },
      {
        'name': 'Quackwatch',
        'link': 'https://en.wikipedia.org/wiki/Quackwatch',
        'status': '⚠ No Consensus',
        'title': 'Quackwatch - Wikipedia',
        'image2': 'Quackwatch-1.png'
      },
      {
        'name': 'RealClearPolitics',
        'link': 'https://en.wikipedia.org/wiki/RealClearPolitics',
        'status': '⚠ No Consensus',
        'title': 'RealClearPolitics - Wikipedia',
        'image2': 'RealClearPolitics-1.png'
      },
      {
        'name': 'RhythmOne',
        'link': 'https://en.wikipedia.org/wiki/RhythmOne',
        'status': '⚠ No Consensus',
        'title': 'RhythmOne - Wikipedia',
        'image2': 'RhythmOne-1.png'
      },
      {
        'name': 'RIA Novosti',
        'link': 'https://en.wikipedia.org/wiki/RIA_Novosti',
        'status': '⚠ No Consensus',
        'title': 'RIA Novosti - Wikipedia',
        'image2': 'RIA Novosti-1.png'
      },
      {
        'name': 'Salon',
        'link': 'https://en.wikipedia.org/wiki/Salon_(website)',
        'status': '⚠ No Consensus',
        'title': 'Salon.com - Wikipedia',
        'image': 'Salon.png',
        'image2': 'Salon-1.png'
      },
      {
        'name': 'ScienceBlogs',
        'link': 'https://en.wikipedia.org/wiki/ScienceBlogs',
        'status': '⚠ No Consensus',
        'title': 'ScienceBlogs - Wikipedia',
        'image2': 'ScienceBlogs-1.png'
      },
      {
        'name': 'Screen Rant',
        'link': 'https://en.wikipedia.org/wiki/Screen_Rant',
        'status': '⚠ No Consensus',
        'title': 'Screen Rant - Wikipedia',
        'image2': 'Screen Rant-1.png'
      },
      {
        'name': 'Sherdog',
        'link': 'https://en.wikipedia.org/wiki/Sherdog',
        'status': '⚠ No Consensus',
        'title': 'Sherdog - Wikipedia',
        'image': 'Sherdog.png',
        'image2': 'Sherdog-1.png'
      },
      {
        'name': 'Sixth Tone',
        'link': 'https://en.wikipedia.org/wiki/Sixth_Tone',
        'status': '⚠ No Consensus',
        'title': 'Sixth Tone - Wikipedia',
        'image2': 'Sixth Tone-1.png'
      },
      {
        'name': 'The Skeptic\'s Dictionary',
        'link': 'https://en.wikipedia.org/wiki/The_Skeptic%27s_Dictionary',
        'status': '⚠ No Consensus',
        'title': 'The Skeptic&#039;s Dictionary - Wikipedia',
        'image': 'The Skeptic\'s Dictionary.jpg',
        'image2': 'The Skeptic\'s Dictionary-1.jpg'
      },
      {
        'name': 'SparkNotes',
        'link': 'https://en.wikipedia.org/wiki/SparkNotes',
        'status': '⚠ No Consensus',
        'title': 'SparkNotes - Wikipedia',
        'image2': 'SparkNotes-1.png'
      },
      {
        'name': 'The Spectator',
        'link': 'https://en.wikipedia.org/wiki/The_Spectator',
        'status': '⚠ No Consensus',
        'title': 'The Spectator - Wikipedia',
        'image': 'The Spectator.png',
        'image2': 'The Spectator-1.jpg'
      },
      {
        'name': 'The Straits Times',
        'link': 'https://en.wikipedia.org/wiki/The_Straits_Times',
        'status': '⚠ No Consensus',
        'title': 'The Straits Times - Wikipedia',
        'image': 'The Straits Times.png',
        'image2': 'The Straits Times-1.jpg'
      },
      {
        'name': 'TASS',
        'link': 'https://en.wikipedia.org/wiki/TASS',
        'status': '⚠ No Consensus',
        'title': 'TASS - Wikipedia',
        'image': 'TASS.png',
        'image2': 'TASS-1.png'
      },
      {
        'name': 'TechCrunch',
        'link': 'https://en.wikipedia.org/wiki/TechCrunch',
        'status': '⚠ No Consensus',
        'title': 'TechCrunch - Wikipedia',
        'image': 'TechCrunch.png',
        'image2': 'TechCrunch-1.png'
      },
      {
        'name': 'ThinkProgress',
        'link': 'https://en.wikipedia.org/wiki/ThinkProgress',
        'status': '⚠ No Consensus',
        'title': 'ThinkProgress - Wikipedia',
        'image2': 'ThinkProgress-1.png'
      },
      {
        'name': 'The Times of India',
        'link': 'https://en.wikipedia.org/wiki/The_Times_of_India',
        'status': '⚠ No Consensus',
        'title': 'The Times of India - Wikipedia',
        'image2': 'The Times of India-1.jpg',
        'image': 'The Times of India.png'
      },
      {
        'name': 'TMZ',
        'link': 'https://en.wikipedia.org/wiki/TMZ',
        'status': '⚠ No Consensus',
        'title': 'TMZ - Wikipedia',
        'image': 'TMZ.png',
        'image2': 'TMZ-1.png'
      },
      {
        'name': 'Townhall',
        'link': 'https://en.wikipedia.org/wiki/Townhall',
        'status': '⚠ No Consensus',
        'title': 'Townhall - Wikipedia',
        'image2': 'Townhall-1.png'
      },
      {
        'name': 'TRT World',
        'link': 'https://en.wikipedia.org/wiki/TRT_World',
        'status': '⚠ No Consensus',
        'title': 'TRT World - Wikipedia',
        'image2': 'TRT World-1.png'
      },
      {
        'name': 'Us Weekly',
        'link': 'https://en.wikipedia.org/wiki/Us_Weekly',
        'status': '⚠ No Consensus',
        'title': 'Us Weekly - Wikipedia',
        'image': 'Us Weekly.png',
        'image2': 'Us Weekly-1.jpeg'
      },
      {
        'name': 'Vice Media',
        'link': 'https://en.wikipedia.org/wiki/Vice_Media',
        'status': '⚠ No Consensus',
        'title': 'Vice Media - Wikipedia',
        'image2': 'Vice Media-1.png'
      },
      {
        'name': 'Washington Examiner',
        'link': 'https://en.wikipedia.org/wiki/Washington_Examiner',
        'status': '⚠ No Consensus',
        'title': 'Washington Examiner - Wikipedia',
        'image': 'Washington Examiner.png',
        'image2': 'Washington Examiner-1.jpg'
      },
      {
        'name': 'The Washington Times',
        'link': 'https://en.wikipedia.org/wiki/The_Washington_Times',
        'status': '⚠ No Consensus',
        'title': 'The Washington Times - Wikipedia',
        'image': 'The Washington Times.png',
        'image2': 'The Washington Times-1.png'
      },
      {
        'name': 'Who\'s Who (UK)',
        'link': 'https://en.wikipedia.org/wiki/Who%27s_Who_(UK)',
        'status': '⚠ No Consensus',
        'title': 'Who&#039;s Who (UK) - Wikipedia',
        'image': 'Who\'s Who (UK).jpg',
        'image2': 'Who\'s Who (UK)-1.jpg'
      },
      {
        'name': 'Wikidata',
        'link': 'https://en.wikipedia.org/wiki/Wikidata',
        'status': '⚠ No Consensus',
        'title': 'Wikidata - Wikipedia',
        'image': 'Wikidata.png',
        'image2': 'Wikidata-1.png'
      },
      {
        'name': 'World Socialist Web Site',
        'link': 'https://en.wikipedia.org/wiki/World_Socialist_Web_Site',
        'status': '⚠ No Consensus',
        'title': 'World Socialist Web Site - Wikipedia',
        'image2': 'World Socialist Web Site-1.png'
      },
      {
        'name': 'XBIZ',
        'link': 'https://en.wikipedia.org/wiki/XBIZ',
        'status': '⚠ No Consensus',
        'title': 'XBIZ - Wikipedia',
        'image': 'XBIZ.png',
        'image2': 'XBIZ-1.png'
      },
      {
        'name': 'Xinhua News Agency',
        'link': 'https://en.wikipedia.org/wiki/Xinhua_News_Agency',
        'status': '⚠ No Consensus',
        'title': 'Xinhua News Agency - Wikipedia',
        'image': 'Xinhua News Agency.png',
        'image2': 'Xinhua News Agency-1.png'
      }
    ],
    [
      {
        'name': '112 Ukraine',
        'link': 'https://en.wikipedia.org/wiki/112_Ukraine',
        'status': '🚫 Generally Unreliable',
        'title': '112 Ukraine - Wikipedia',
        'image': '112 Ukraine.png',
        'image2': '112 Ukraine-1.png'
      },
      {
        'name': 'Ad Fontes Media',
        'link': 'https://en.wikipedia.org/wiki/Ad_Fontes_Media',
        'status': '🚫 Generally Unreliable',
        'title': 'Ad Fontes Media - Wikipedia',
        'image': 'Ad Fontes Media.png',
        'image2': 'Ad Fontes Media-1.png'
      },
      {
        'name': 'AlterNet',
        'link': 'https://en.wikipedia.org/wiki/AlterNet',
        'status': '🚫 Generally Unreliable',
        'title': 'AlterNet - Wikipedia',
        'image2': 'AlterNet-1.png'
      },
      {
        'name': 'Amazon',
        'link': 'https://en.wikipedia.org/wiki/Amazon_(company)',
        'status': '🚫 Generally Unreliable',
        'title': 'Amazon (company) - Wikipedia',
        'image': 'Amazon.png',
        'image2': 'Amazon-1.jpg'
      },
      {
        'name': 'An Phoblacht',
        'link': 'https://en.wikipedia.org/wiki/An_Phoblacht',
        'status': '🚫 Generally Unreliable',
        'title': 'An Phoblacht - Wikipedia',
        'image': 'An Phoblacht.png',
        'image2': 'An Phoblacht-1.jpg'
      },
      {
        'name': 'Anadolu Agency',
        'link': 'https://en.wikipedia.org/wiki/Anadolu_Agency',
        'status': '🚫 Generally Unreliable',
        'title': 'Anadolu Agency - Wikipedia',
        'image': 'Anadolu Agency.jpg',
        'image2': 'Anadolu Agency-1.jpg'
      },
      {
        'name': 'Ancestry.com',
        'link': 'https://en.wikipedia.org/wiki/Ancestry.com',
        'status': '🚫 Generally Unreliable',
        'title': 'Ancestry.com - Wikipedia',
        'image2': 'Ancestry.com-1.png'
      },
      {
        'name': 'Answers.com',
        'link': 'https://en.wikipedia.org/wiki/Answers.com',
        'status': '🚫 Generally Unreliable',
        'title': 'Answers.com - Wikipedia',
        'image2': 'Answers.com-1.png'
      },
      {
        'name': 'arXiv',
        'link': 'https://en.wikipedia.org/wiki/ArXiv',
        'status': '🚫 Generally Unreliable',
        'title': 'arXiv - Wikipedia',
        'image': 'arXiv.png',
        'image2': 'arXiv-1.png'
      },
      {
        'name': 'Bild',
        'link': 'https://en.wikipedia.org/wiki/Bild',
        'status': '🚫 Generally Unreliable',
        'title': 'Bild - Wikipedia',
        'image': 'Bild.png',
        'image2': 'Bild-1.png'
      },
      {
        'name': 'Blaze Media',
        'link': 'https://en.wikipedia.org/wiki/Blaze_Media',
        'status': '🚫 Generally Unreliable',
        'title': 'Blaze Media - Wikipedia',
        'image': 'Blaze Media.png',
        'image2': 'Blaze Media-1.png'
      },
      {
        'name': 'Blogger',
        'link': 'https://en.wikipedia.org/wiki/Blogger_(service)',
        'status': '🚫 Generally Unreliable',
        'title': 'Blogger (service) - Wikipedia',
        'image2': 'Blogger-1.png'
      },
      {
        'name': 'The Canary',
        'link': 'https://en.wikipedia.org/wiki/The_Canary_(website)',
        'status': '🚫 Generally Unreliable',
        'title': 'The Canary (website) - Wikipedia',
        'image2': 'The Canary-1.png'
      },
      {
        'name': 'CESNUR',
        'link': 'https://en.wikipedia.org/wiki/CESNUR',
        'status': '🚫 Generally Unreliable',
        'title': 'CESNUR - Wikipedia',
        'image2': 'CESNUR-1.gif'
      },
      {
        'name': 'CoinDesk',
        'link': 'https://en.wikipedia.org/wiki/CoinDesk',
        'status': '🚫 Generally Unreliable',
        'title': 'CoinDesk - Wikipedia',
        'image2': 'CoinDesk-1.png'
      },
      {
        'name': 'CounterPunch',
        'link': 'https://en.wikipedia.org/wiki/CounterPunch',
        'status': '🚫 Generally Unreliable',
        'title': 'CounterPunch - Wikipedia',
        'image2': 'CounterPunch-1.png'
      },
      {
        'name': 'Cracked.com',
        'link': 'https://en.wikipedia.org/wiki/Cracked.com',
        'status': '🚫 Generally Unreliable',
        'title': 'Cracked.com - Wikipedia',
        'image2': 'Cracked.com-1.png'
      },
      {
        'name': 'Daily Express',
        'link': 'https://en.wikipedia.org/wiki/Daily_Express',
        'status': '🚫 Generally Unreliable',
        'title': 'Daily Express - Wikipedia',
        'image': 'Daily Express.png',
        'image2': 'Daily Express-1.jpg'
      },
      {
        'name': 'Daily Kos',
        'link': 'https://en.wikipedia.org/wiki/Daily_Kos',
        'status': '🚫 Generally Unreliable',
        'title': 'Daily Kos - Wikipedia',
        'image': 'Daily Kos.png',
        'image2': 'Daily Kos-1.png'
      },
      {
        'name': 'Daily Sabah',
        'link': 'https://en.wikipedia.org/wiki/Daily_Sabah',
        'status': '🚫 Generally Unreliable',
        'title': 'Daily Sabah - Wikipedia',
        'image2': 'Daily Sabah-1.png'
      },
      {
        'name': 'The Daily Wire',
        'link': 'https://en.wikipedia.org/wiki/The_Daily_Wire',
        'status': '🚫 Generally Unreliable',
        'title': 'The Daily Wire - Wikipedia',
        'image2': 'The Daily Wire-1.png'
      },
      {
        'name': 'Discogs',
        'link': 'https://en.wikipedia.org/wiki/Discogs',
        'status': '🚫 Generally Unreliable',
        'title': 'Discogs - Wikipedia',
        'image': 'Discogs.png',
        'image2': 'Discogs-1.png'
      },
      {
        'name': 'The Electronic Intifada',
        'link': 'https://en.wikipedia.org/wiki/The_Electronic_Intifada',
        'status': '🚫 Generally Unreliable',
        'title': 'The Electronic Intifada - Wikipedia',
        'image': 'The Electronic Intifada.png',
        'image2': 'The Electronic Intifada-1.png'
      },
      {
        'name': 'Encyclopaedia Metallum',
        'link': 'https://en.wikipedia.org/wiki/Encyclopaedia_Metallum',
        'status': '🚫 Generally Unreliable',
        'title': 'Encyclopaedia Metallum - Wikipedia',
        'image2': 'Encyclopaedia Metallum-1.jpg'
      },
      {
        'name': 'Facebook',
        'link': 'https://en.wikipedia.org/wiki/Facebook',
        'status': '🚫 Generally Unreliable',
        'title': 'Facebook - Wikipedia',
        'image': 'Facebook.png',
        'image2': 'Facebook-1.png'
      },
      {
        'name': 'FamilySearch',
        'link': 'https://en.wikipedia.org/wiki/FamilySearch',
        'status': '🚫 Generally Unreliable',
        'title': 'FamilySearch - Wikipedia',
        'image2': 'FamilySearch-1.png'
      },
      {
        'name': 'Fandom',
        'link': 'https://en.wikipedia.org/wiki/Fandom_(website)',
        'status': '🚫 Generally Unreliable',
        'title': 'Fandom (website) - Wikipedia',
        'image2': 'Fandom-1.png'
      },
      {
        'name': 'The Federalist',
        'link': 'https://en.wikipedia.org/wiki/The_Federalist_(website)',
        'status': '🚫 Generally Unreliable',
        'title': 'The Federalist (website) - Wikipedia',
        'image2': 'The Federalist-1.png'
      },
      {
        'name': 'Find a Grave',
        'link': 'https://en.wikipedia.org/wiki/Find_a_Grave',
        'status': '🚫 Generally Unreliable',
        'title': 'Find a Grave - Wikipedia',
        'image2': 'Find a Grave-1.png'
      },
      {
        'name': 'Findmypast',
        'link': 'https://en.wikipedia.org/wiki/Findmypast',
        'status': '🚫 Generally Unreliable',
        'title': 'Findmypast - Wikipedia',
        'image': 'Findmypast.png',
        'image2': 'Findmypast-1.png'
      },
      {
        'name': 'Flickr',
        'link': 'https://en.wikipedia.org/wiki/Flickr',
        'status': '🚫 Generally Unreliable',
        'title': 'Flickr - Wikipedia',
        'image2': 'Flickr-1.png',
        'image': 'Flickr.png'
      },
      {
        'name': 'Forbes.com',
        'link': 'https://en.wikipedia.org/wiki/Forbes.com',
        'status': '🚫 Generally Unreliable',
        'title': 'Forbes - Wikipedia',
        'image2': 'Forbes-1.jpg',
        'image': 'Forbes.png'
      },
      {
        'name': 'Fox News',
        'link': 'https://en.wikipedia.org/wiki/Fox_News',
        'status': '🚫 Generally Unreliable',
        'title': 'Fox News - Wikipedia',
        'image': 'Fox News.png',
        'image2': 'Fox News-1.png'
      },
      {
        'name': 'Gawker',
        'link': 'https://en.wikipedia.org/wiki/Gawker',
        'status': '🚫 Generally Unreliable',
        'title': 'Gawker - Wikipedia',
        'image2': 'Gawker-1.png'
      },
      {
        'name': 'Geni.com',
        'link': 'https://en.wikipedia.org/wiki/Geni.com',
        'status': '🚫 Generally Unreliable',
        'title': 'Geni.com - Wikipedia',
        'image': 'Geni.com.png',
        'image2': 'Geni.com-1.png'
      },
      {
        'name': 'Geographic Names Information System',
        'link': 'https://en.wikipedia.org/wiki/Geographic_Names_Information_System',
        'status': '🚫 Generally Unreliable',
        'title': 'Geographic Names Information System - Wikipedia',
        'image': 'Geographic Names Information System.png'
      },
      {
        'name': 'Goodreads',
        'link': 'https://en.wikipedia.org/wiki/Goodreads',
        'status': '🚫 Generally Unreliable',
        'title': 'Goodreads - Wikipedia',
        'image2': 'Goodreads-1.png'
      },
      {
        'name': 'Guido Fawkes',
        'link': 'https://en.wikipedia.org/wiki/Guido_Fawkes_(website)',
        'status': '🚫 Generally Unreliable',
        'title': 'Guido Fawkes (website) - Wikipedia',
        'image': 'Guido Fawkes.jpg',
        'image2': 'Guido Fawkes-1.jpg'
      },
      {
        'name': 'Heat Street',
        'link': 'https://en.wikipedia.org/wiki/Heat_Street',
        'status': '🚫 Generally Unreliable',
        'title': 'Heat Street - Wikipedia',
        'image': 'Heat Street.jpg',
        'image2': 'Heat Street-1.jpg'
      },
      {
        'name': 'History',
        'link': 'https://en.wikipedia.org/wiki/History_(American_TV_network)',
        'status': '🚫 Generally Unreliable',
        'title': 'History (American TV network) - Wikipedia',
        'image': 'History.png',
        'image2': 'History-1.png'
      },
      {
        'name': 'HuffPost',
        'link': 'https://en.wikipedia.org/wiki/HuffPost',
        'status': '🚫 Generally Unreliable',
        'title': 'HuffPost - Wikipedia',
        'image2': 'HuffPost-1.png'
      },
      {
        'name': 'IMDb',
        'link': 'https://en.wikipedia.org/wiki/IMDb',
        'status': '🚫 Generally Unreliable',
        'title': 'IMDb - Wikipedia',
        'image': 'IMDb.png',
        'image2': 'IMDb-1.png'
      },
      {
        'name': 'Independent Media Center',
        'link': 'https://en.wikipedia.org/wiki/Independent_Media_Center',
        'status': '🚫 Generally Unreliable',
        'title': 'Independent Media Center - Wikipedia',
        'image': 'Independent Media Center.gif',
        'image2': 'Independent Media Center-1.gif'
      },
      {
        'name': 'Inquisitr',
        'link': 'https://en.wikipedia.org/wiki/Inquisitr',
        'status': '🚫 Generally Unreliable',
        'title': 'Inquisitr - Wikipedia',
        'image2': 'Inquisitr-1.png'
      },
      {
        'name': 'International Business Times',
        'link': 'https://en.wikipedia.org/wiki/International_Business_Times',
        'status': '🚫 Generally Unreliable',
        'title': 'International Business Times - Wikipedia',
        'image2': 'International Business Times-1.png'
      },
      {
        'name': 'Jewish Virtual Library',
        'link': 'https://en.wikipedia.org/wiki/Jewish_Virtual_Library',
        'status': '🚫 Generally Unreliable',
        'title': 'Jewish Virtual Library - Wikipedia',
        'image2': 'Jewish Virtual Library-1.png',
        'image': 'Jewish Virtual Library.gif'
      },
      {
        'name': 'Know Your Meme',
        'link': 'https://en.wikipedia.org/wiki/Know_Your_Meme',
        'status': '🚫 Generally Unreliable',
        'title': 'Know Your Meme - Wikipedia',
        'image': 'Know Your Meme.png',
        'image2': 'Know Your Meme-1.png'
      },
      {
        'name': 'LinkedIn',
        'link': 'https://en.wikipedia.org/wiki/LinkedIn',
        'status': '🚫 Generally Unreliable',
        'title': 'LinkedIn - Wikipedia',
        'image': 'LinkedIn.png',
        'image2': 'LinkedIn-1.png'
      },
      {
        'name': 'LiveJournal',
        'link': 'https://en.wikipedia.org/wiki/LiveJournal',
        'status': '🚫 Generally Unreliable',
        'title': 'LiveJournal - Wikipedia',
        'image': 'LiveJournal.png',
        'image2': 'LiveJournal-1.png'
      },
      {
        'name': 'Marquis Who\'s Who',
        'link': 'https://en.wikipedia.org/wiki/Marquis_Who%27s_Who',
        'status': '🚫 Generally Unreliable',
        'title': 'Marquis Who&#039;s Who - Wikipedia',
        'image2': 'Marquis Who\'s Who-1.png'
      },
      {
        'name': 'Mashable',
        'link': 'https://en.wikipedia.org/wiki/Mashable',
        'status': '🚫 Generally Unreliable',
        'title': 'Mashable - Wikipedia',
        'image2': 'Mashable-1.png'
      },
      {
        'name': 'Media Bias - Fact Check',
        'link': 'https://en.wikipedia.org/wiki/Media_Bias/Fact_Check',
        'status': '🚫 Generally Unreliable',
        'title': 'Media Bias/Fact Check - Wikipedia',
        'image': 'Media Bias - Fact Check.png',
        'image2': 'Media Bias - Fact Check-1.png'
      },
      {
        'name': 'Media Research Center',
        'link': 'https://en.wikipedia.org/wiki/Media_Research_Center',
        'status': '🚫 Generally Unreliable',
        'title': 'Media Research Center - Wikipedia',
        'image2': 'Media Research Center-1.png'
      },
      {
        'name': 'Medium',
        'link': 'https://en.wikipedia.org/wiki/Medium_(website)',
        'status': '🚫 Generally Unreliable',
        'title': 'Medium (website) - Wikipedia',
        'image2': 'Medium-1.png'
      },
      {
        'name': 'Metro (UK)',
        'link': 'https://en.wikipedia.org/wiki/Metro_(British_newspaper)',
        'status': '🚫 Generally Unreliable',
        'title': 'Metro (British newspaper) - Wikipedia',
        'image': 'Metro (UK).png',
        'image2': 'Metro (UK)-1.jpg'
      },
      {
        'name': 'The New American',
        'link': 'https://en.wikipedia.org/wiki/The_New_American',
        'status': '🚫 Generally Unreliable',
        'title': 'The New American - Wikipedia',
        'image2': 'The New American-1.png'
      },
      {
        'name': 'New York Post',
        'link': 'https://en.wikipedia.org/wiki/New_York_Post',
        'status': '🚫 Generally Unreliable',
        'title': 'New York Post - Wikipedia',
        'image2': 'New York Post-1.jpg',
        'image': 'New York Post.png'
      },
      {
        'name': 'The Onion',
        'link': 'https://en.wikipedia.org/wiki/The_Onion',
        'status': '🚫 Generally Unreliable',
        'title': 'The Onion - Wikipedia',
        'image2': 'The Onion-1.png'
      },
      {
        'name': 'PanAm Post',
        'link': 'https://en.wikipedia.org/wiki/PanAm_Post',
        'status': '🚫 Generally Unreliable',
        'title': 'PanAm Post - Wikipedia',
        'image2': 'PanAm Post-1.png'
      },
      {
        'name': 'Patheos',
        'link': 'https://en.wikipedia.org/wiki/Patheos',
        'status': '🚫 Generally Unreliable',
        'title': 'Patheos - Wikipedia',
        'image2': 'Patheos-1.png'
      },
      {
        'name': 'The Post Millennial',
        'link': 'https://en.wikipedia.org/wiki/The_Post_Millennial',
        'status': '🚫 Generally Unreliable',
        'title': 'The Post Millennial - Wikipedia',
        'image2': 'The Post Millennial-1.png'
      },
      {
        'name': 'PR Newswire',
        'link': 'https://en.wikipedia.org/wiki/PR_Newswire',
        'status': '🚫 Generally Unreliable',
        'title': 'PR Newswire - Wikipedia',
        'image': 'PR Newswire.png',
        'image2': 'PR Newswire-1.png'
      },
      {
        'name': 'Project Veritas',
        'link': 'https://en.wikipedia.org/wiki/Project_Veritas',
        'status': '🚫 Generally Unreliable',
        'title': 'Project Veritas - Wikipedia',
        'image': 'Project Veritas.png',
        'image2': 'Project Veritas-1.png'
      },
      {
        'name': 'Quadrant',
        'link': 'https://en.wikipedia.org/wiki/Quadrant_(magazine)',
        'status': '🚫 Generally Unreliable',
        'title': 'Quadrant (magazine) - Wikipedia',
        'image': 'Quadrant.png',
        'image2': 'Quadrant-1.png'
      },
      {
        'name': 'Quillette',
        'link': 'https://en.wikipedia.org/wiki/Quillette',
        'status': '🚫 Generally Unreliable',
        'title': 'Quillette - Wikipedia',
        'image2': 'Quillette-1.png'
      },
      {
        'name': 'Quora',
        'link': 'https://en.wikipedia.org/wiki/Quora',
        'status': '🚫 Generally Unreliable',
        'title': 'Quora - Wikipedia',
        'image': 'Quora.png',
        'image2': 'Quora-1.jpg'
      },
      {
        'name': 'The Raw Story',
        'link': 'https://en.wikipedia.org/wiki/The_Raw_Story',
        'status': '🚫 Generally Unreliable',
        'title': 'The Raw Story - Wikipedia',
        'image': 'The Raw Story.png',
        'image2': 'The Raw Story-1.png'
      },
      {
        'name': 'Reddit',
        'link': 'https://en.wikipedia.org/wiki/Reddit',
        'status': '🚫 Generally Unreliable',
        'title': 'Reddit - Wikipedia',
        'image': 'Reddit.png',
        'image2': 'Reddit-1.png'
      },
      {
        'name': 'RedState',
        'link': 'https://en.wikipedia.org/wiki/RedState',
        'status': '🚫 Generally Unreliable',
        'title': 'RedState - Wikipedia',
        'image2': 'RedState-1.png'
      },
      {
        'name': 'ResearchGate',
        'link': 'https://en.wikipedia.org/wiki/ResearchGate',
        'status': '🚫 Generally Unreliable',
        'title': 'ResearchGate - Wikipedia',
        'image2': 'ResearchGate-1.png'
      },
      {
        'name': 'Rolling Stone',
        'link': 'https://en.wikipedia.org/wiki/Rolling_Stone',
        'status': '🚫 Generally Unreliable',
        'title': 'Rolling Stone - Wikipedia',
        'image': 'Rolling Stone.png',
        'image2': 'Rolling Stone-1.png'
      },
      {
        'name': 'Scribd',
        'link': 'https://en.wikipedia.org/wiki/Scribd',
        'status': '🚫 Generally Unreliable',
        'title': 'Scribd - Wikipedia',
        'image2': 'Scribd-1.png'
      },
      {
        'name': 'Scriptural texts',
        'link': 'https://en.wikipedia.org/wiki/Scriptural_texts',
        'status': '🚫 Generally Unreliable',
        'title': 'Religious text - Wikipedia',
        'image': 'Scriptural texts.jpg'
      },
      {
        'name': 'Sixth Tone',
        'link': 'https://en.wikipedia.org/wiki/Sixth_Tone',
        'status': '🚫 Generally Unreliable',
        'title': 'Sixth Tone - Wikipedia',
        'image2': 'Sixth Tone-1.png'
      },
      {
        'name': 'The Skwawkbox',
        'link': 'https://en.wikipedia.org/wiki/The_Skwawkbox',
        'status': '🚫 Generally Unreliable',
        'title': 'The Skwawkbox - Wikipedia',
        'image2': 'The Skwawkbox-1.jpeg'
      },
      {
        'name': 'SourceWatch',
        'link': 'https://en.wikipedia.org/wiki/SourceWatch',
        'status': '🚫 Generally Unreliable',
        'title': 'Center for Media and Democracy - Wikipedia',
        'image': 'SourceWatch.png',
        'image2': 'SourceWatch-1.png'
      },
      {
        'name': 'Stack Exchange',
        'link': 'https://en.wikipedia.org/wiki/Stack_Exchange',
        'status': '🚫 Generally Unreliable',
        'title': 'Stack Exchange - Wikipedia',
        'image': 'Stack Exchange.png',
        'image2': 'Stack Exchange-1.png'
      },
      {
        'name': 'The Truth About Guns',
        'link': 'https://en.wikipedia.org/wiki/The_Truth_About_Guns',
        'status': '🚫 Generally Unreliable',
        'title': 'The Truth About Guns - Wikipedia',
        'image': 'The Truth About Guns.png',
        'image2': 'The Truth About Guns-1.png'
      },
      {
        'name': 'TV.com',
        'link': 'https://en.wikipedia.org/wiki/TV.com',
        'status': '🚫 Generally Unreliable',
        'title': 'TV.com - Wikipedia',
        'image2': 'TV.com-1.png'
      },
      {
        'name': 'TV Tropes',
        'link': 'https://en.wikipedia.org/wiki/TV_Tropes',
        'status': '🚫 Generally Unreliable',
        'title': 'TV Tropes - Wikipedia',
        'image': 'TV Tropes.png',
        'image2': 'TV Tropes-1.png'
      },
      {
        'name': 'Twitter',
        'link': 'https://en.wikipedia.org/wiki/Twitter',
        'status': '🚫 Generally Unreliable',
        'title': 'Twitter - Wikipedia',
        'image': 'Twitter.png',
        'image2': 'Twitter-1.png'
      },
      {
        'name': 'Urban Dictionary',
        'link': 'https://en.wikipedia.org/wiki/Urban_Dictionary',
        'status': '🚫 Generally Unreliable',
        'title': 'Urban Dictionary - Wikipedia',
        'image': 'Urban Dictionary.png',
        'image2': 'Urban Dictionary-1.png'
      },
      {
        'name': 'Venezuelanalysis',
        'link': 'https://en.wikipedia.org/wiki/Venezuelanalysis',
        'status': '🚫 Generally Unreliable',
        'title': 'Venezuelanalysis - Wikipedia',
        'image2': 'Venezuelanalysis-1.png'
      },
      {
        'name': 'VGChartz',
        'link': 'https://en.wikipedia.org/wiki/VGChartz',
        'status': '🚫 Generally Unreliable',
        'title': 'VGChartz - Wikipedia',
        'image': 'VGChartz.png',
        'image2': 'VGChartz-1.png'
      },
      {
        'name': 'Victims of Communism Memorial Foundation',
        'link': 'https://en.wikipedia.org/wiki/Victims_of_Communism_Memorial_Foundation',
        'status': '🚫 Generally Unreliable',
        'title': 'Victims of Communism Memorial Foundation - Wikipedia',
        'image': 'Victims of Communism Memorial Foundation.png',
        'image2': 'Victims of Communism Memorial Foundation-1.png'
      },
      {
        'name': 'The Western Journal',
        'link': 'https://en.wikipedia.org/wiki/The_Western_Journal',
        'status': '🚫 Generally Unreliable',
        'title': 'The Western Journal - Wikipedia',
        'image': 'The Western Journal.png',
        'image2': 'The Western Journal-1.png'
      },
      {
        'name': 'WhatCulture',
        'link': 'https://en.wikipedia.org/wiki/WhatCulture',
        'status': '🚫 Generally Unreliable',
        'title': 'WhatCulture - Wikipedia',
        'image': 'WhatCulture.png',
        'image2': 'WhatCulture-1.png'
      },
      {
        'name': 'WhoSampled',
        'link': 'https://en.wikipedia.org/wiki/WhoSampled',
        'status': '🚫 Generally Unreliable',
        'title': 'WhoSampled - Wikipedia',
        'image': 'WhoSampled.png',
        'image2': 'WhoSampled-1.png'
      },
      {
        'name': 'Wikidata',
        'link': 'https://en.wikipedia.org/wiki/Wikidata',
        'status': '🚫 Generally Unreliable',
        'title': 'Wikidata - Wikipedia',
        'image': 'Wikidata.png',
        'image2': 'Wikidata-1.png'
      },
      {
        'name': 'WikiLeaks',
        'link': 'https://en.wikipedia.org/wiki/WikiLeaks',
        'status': '🚫 Generally Unreliable',
        'title': 'WikiLeaks - Wikipedia',
        'image2': 'WikiLeaks-1.png',
        'image': 'WikiLeaks.png'
      },
      {
        'name': 'Wikinews',
        'link': 'https://en.wikipedia.org/wiki/Wikinews',
        'status': '🚫 Generally Unreliable',
        'title': 'Wikinews - Wikipedia',
        'image': 'Wikinews.png',
        'image2': 'Wikinews-1.png'
      },
      {
        'name': 'Wikipedia',
        'link': 'https://en.wikipedia.org/wiki/Wikipedia',
        'status': '🚫 Generally Unreliable',
        'title': 'Wikipedia - Wikipedia',
        'image': 'Wikipedia.png',
        'image2': 'Wikipedia-1.png'
      },
      {
        'name': 'WordPress.com',
        'link': 'https://en.wikipedia.org/wiki/WordPress.com',
        'status': '🚫 Generally Unreliable',
        'title': 'WordPress.com - Wikipedia',
        'image': 'WordPress.com.png',
        'image2': 'WordPress.com-1.png'
      },
      {
        'name': 'Worldometer',
        'link': 'https://en.wikipedia.org/wiki/Worldometer',
        'status': '🚫 Generally Unreliable',
        'title': 'Worldometer - Wikipedia',
        'image': 'Worldometer.jpg',
        'image2': 'Worldometer-1.jpg'
      },
      {
        'name': 'YouTube',
        'link': 'https://en.wikipedia.org/wiki/YouTube',
        'status': '🚫 Generally Unreliable',
        'title': 'YouTube - Wikipedia',
        'image': 'YouTube.png',
        'image2': 'YouTube-1.png'
      }
    ],
    [
      {
        'name': 'Baidu Baike',
        'link': 'https://en.wikipedia.org/wiki/Baidu_Baike',
        'status': '🛑 Deprecated',
        'title': 'Baidu Baike - Wikipedia',
        'image': 'Baidu Baike.png',
        'image2': 'Baidu Baike-1.png'
      },
      {
        'name': 'China Global Television Network',
        'link': 'https://en.wikipedia.org/wiki/China_Global_Television_Network',
        'status': '🛑 Deprecated',
        'title': 'China Global Television Network - Wikipedia',
        'image2': 'China Global Television Network-1.png'
      },
      {
        'name': 'Crunchbase',
        'link': 'https://en.wikipedia.org/wiki/Crunchbase',
        'status': '🛑 Deprecated',
        'title': 'Crunchbase - Wikipedia',
        'image2': 'Crunchbase-1.png'
      },
      {
        'name': 'The Daily Caller',
        'link': 'https://en.wikipedia.org/wiki/The_Daily_Caller',
        'status': '🛑 Deprecated',
        'title': 'The Daily Caller - Wikipedia',
        'image2': 'The Daily Caller-1.png'
      },
      {
        'name': 'Daily Mail',
        'link': 'https://en.wikipedia.org/wiki/Daily_Mail',
        'status': '🛑 Deprecated',
        'title': 'Daily Mail - Wikipedia',
        'image': 'Daily Mail.png',
        'image2': 'Daily Mail-1.png'
      },
      {
        'name': 'Daily Star (UK)',
        'link': 'https://en.wikipedia.org/wiki/Daily_Star_(United_Kingdom)',
        'status': '🛑 Deprecated',
        'title': 'Daily Star (United Kingdom) - Wikipedia',
        'image': 'Daily Star (UK).png',
        'image2': 'Daily Star (UK)-1.png'
      },
      {
        'name': 'The Epoch Times',
        'link': 'https://en.wikipedia.org/wiki/The_Epoch_Times',
        'status': '🛑 Deprecated',
        'title': 'The Epoch Times - Wikipedia',
        'image2': 'The Epoch Times-1.png',
        'image': 'The Epoch Times.png'
      },
      {
        'name': 'FrontPage Magazine',
        'link': 'https://en.wikipedia.org/wiki/FrontPage_Magazine',
        'status': '🛑 Deprecated',
        'title': 'FrontPage Magazine - Wikipedia',
        'image2': 'FrontPage Magazine-1.png'
      },
      {
        'name': 'The Gateway Pundit',
        'link': 'https://en.wikipedia.org/wiki/The_Gateway_Pundit',
        'status': '🛑 Deprecated',
        'title': 'The Gateway Pundit - Wikipedia',
        'image2': 'The Gateway Pundit-1.png'
      },
      {
        'name': 'Global Times',
        'link': 'https://en.wikipedia.org/wiki/Global_Times',
        'status': '🛑 Deprecated',
        'title': 'Global Times - Wikipedia',
        'image2': 'Global Times-1.png'
      },
      {
        'name': 'The Grayzone',
        'link': 'https://en.wikipedia.org/wiki/The_Grayzone',
        'status': '🛑 Deprecated',
        'title': 'The Grayzone - Wikipedia',
        'image': 'The Grayzone.png',
        'image2': 'The Grayzone-1.png'
      },
      {
        'name': 'HispanTV',
        'link': 'https://en.wikipedia.org/wiki/HispanTV',
        'status': '🛑 Deprecated',
        'title': 'HispanTV - Wikipedia',
        'image2': 'HispanTV-1.png'
      },
      {
        'name': 'Jihad Watch',
        'link': 'https://en.wikipedia.org/wiki/Jihad_Watch',
        'status': '🛑 Deprecated',
        'title': 'Jihad Watch - Wikipedia',
        'image2': 'Jihad Watch-1.png'
      },
      {
        'name': 'Last.fm',
        'link': 'https://en.wikipedia.org/wiki/Last.fm',
        'status': '🛑 Deprecated',
        'title': 'Last.fm - Wikipedia',
        'image2': 'Last.fm-1.png'
      },
      {
        'name': 'LifeSiteNews',
        'link': 'https://en.wikipedia.org/wiki/LifeSiteNews',
        'status': '🛑 Deprecated',
        'title': 'LifeSiteNews - Wikipedia',
        'image': 'LifeSiteNews.png',
        'image2': 'LifeSiteNews-1.png'
      },
      {
        'name': 'The Mail on Sunday',
        'link': 'https://en.wikipedia.org/wiki/The_Mail_on_Sunday',
        'status': '🛑 Deprecated',
        'title': 'The Mail on Sunday - Wikipedia',
        'image2': 'The Mail on Sunday-1.jpg'
      },
      {
        'name': 'MintPress News',
        'link': 'https://en.wikipedia.org/wiki/MintPress_News',
        'status': '🛑 Deprecated',
        'title': 'MintPress News - Wikipedia',
        'image2': 'MintPress News-1.png'
      },
      {
        'name': 'National Enquirer',
        'link': 'https://en.wikipedia.org/wiki/National_Enquirer',
        'status': '🛑 Deprecated',
        'title': 'National Enquirer - Wikipedia',
        'image': 'National Enquirer.png',
        'image2': 'National Enquirer-1.jpg'
      },
      {
        'name': 'News Break',
        'link': 'https://en.wikipedia.org/wiki/News_Break',
        'status': '🛑 Deprecated',
        'title': 'Jerry Yang - Wikipedia',
        'image': 'News Break.jpg'
      },
      {
        'name': 'News of the World',
        'link': 'https://en.wikipedia.org/wiki/News_of_the_World',
        'status': '🛑 Deprecated',
        'title': 'News of the World - Wikipedia',
        'image': 'News of the World.png',
        'image2': 'News of the World-1.jpeg'
      },
      {
        'name': 'Newsmax',
        'link': 'https://en.wikipedia.org/wiki/Newsmax',
        'status': '🛑 Deprecated',
        'title': 'Newsmax - Wikipedia',
        'image2': 'Newsmax-1.png'
      },
      {
        'name': 'NNDB',
        'link': 'https://en.wikipedia.org/wiki/NNDB',
        'status': '🛑 Deprecated',
        'title': 'NNDB - Wikipedia',
        'image2': 'NNDB-1.png'
      },
      {
        'name': 'Occupy Democrats',
        'link': 'https://en.wikipedia.org/wiki/Occupy_Democrats',
        'status': '🛑 Deprecated',
        'title': 'Occupy Democrats - Wikipedia',
        'image': 'Occupy Democrats.png',
        'image2': 'Occupy Democrats-1.png'
      },
      {
        'name': 'One America News Network',
        'link': 'https://en.wikipedia.org/wiki/One_America_News_Network',
        'status': '🛑 Deprecated',
        'title': 'One America News Network - Wikipedia',
        'image2': 'One America News Network-1.png'
      },
      {
        'name': 'Press TV',
        'link': 'https://en.wikipedia.org/wiki/Press_TV',
        'status': '🛑 Deprecated',
        'title': 'Press TV - Wikipedia',
        'image': 'Press TV.png',
        'image2': 'Press TV-1.png'
      },
      {
        'name': 'Republic TV',
        'link': 'https://en.wikipedia.org/wiki/Republic_TV',
        'status': '🛑 Deprecated',
        'title': 'Republic TV - Wikipedia',
        'image': 'Republic TV.png',
        'image2': 'Republic TV-1.png'
      },
      {
        'name': 'RT',
        'link': 'https://en.wikipedia.org/wiki/RT_(TV_network)',
        'status': '🛑 Deprecated',
        'title': 'RT (TV network) - Wikipedia',
        'image': 'RT.png',
        'image2': 'RT-1.png'
      },
      {
        'name': 'Sputnik',
        'link': 'https://en.wikipedia.org/wiki/Sputnik_(news_agency)',
        'status': '🛑 Deprecated',
        'title': 'Sputnik (news agency) - Wikipedia',
        'image': 'Sputnik.png',
        'image2': 'Sputnik-1.png'
      },
      {
        'name': 'The Sun (UK)',
        'link': 'https://en.wikipedia.org/wiki/The_Sun_(United_Kingdom)',
        'status': '🛑 Deprecated',
        'title': 'The Sun (United Kingdom) - Wikipedia',
        'image2': 'The Sun (UK)-1.jpg',
        'image': 'The Sun (UK).png'
      },
      {
        'name': 'Taki\'s Magazine',
        'link': 'https://en.wikipedia.org/wiki/Taki%27s_Magazine',
        'status': '🛑 Deprecated',
        'title': 'Taki&#039;s Magazine - Wikipedia',
        'image2': 'Taki\'s Magazine-1.png'
      },
      {
        'name': 'Telesur',
        'link': 'https://en.wikipedia.org/wiki/Telesur',
        'status': '🛑 Deprecated',
        'title': 'Telesur - Wikipedia',
        'image': 'Telesur.png',
        'image2': 'Telesur-1.png'
      },
      {
        'name': 'Unz Review',
        'link': 'https://en.wikipedia.org/wiki/Unz_Review',
        'status': '🛑 Deprecated',
        'title': 'Ron Unz - Wikipedia',
        'image': 'Unz Review.jpg',
        'image2': 'Unz Review-1.jpg'
      },
      {
        'name': 'WorldNetDaily',
        'link': 'https://en.wikipedia.org/wiki/WorldNetDaily',
        'status': '🛑 Deprecated',
        'title': 'WorldNetDaily - Wikipedia',
        'image2': 'WorldNetDaily-1.png'
      },
      {
        'name': 'Zero Hedge',
        'link': 'https://en.wikipedia.org/wiki/Zero_Hedge',
        'status': '🛑 Deprecated',
        'title': 'Zero Hedge - Wikipedia',
        'image2': 'Zero Hedge-1.png'
      }
    ],
    [
      {
        'name': 'Advameg',
        'link': 'https://en.wikipedia.org/wiki/Advameg',
        'status': 'ⓧ Blacklisted',
        'title': 'City-Data - Wikipedia',
        'image': 'Advameg.jpg',
        'image2': 'Advameg-1.jpg'
      },
      {
        'name': 'Breitbart News',
        'link': 'https://en.wikipedia.org/wiki/Breitbart_News',
        'status': 'ⓧ Blacklisted',
        'title': 'Breitbart News - Wikipedia',
        'image': 'Breitbart News.png',
        'image2': 'Breitbart News-1.png'
      },
      {
        'name': 'Centre for Research on Globalisation',
        'link': 'https://en.wikipedia.org/wiki/Centre_for_Research_on_Globalisation',
        'status': 'ⓧ Blacklisted',
        'title': 'Michel Chossudovsky - Wikipedia',
        'image': 'Centre for Research on Globalisation.png',
        'image2': 'Centre for Research on Globalisation-1.jpg'
      },
      {
        'name': 'Examiner.com',
        'link': 'https://en.wikipedia.org/wiki/Examiner.com',
        'status': 'ⓧ Blacklisted',
        'title': 'Examiner.com - Wikipedia',
        'image': 'Examiner.com.png',
        'image2': 'Examiner.com-1.jpg'
      },
      {
        'name': 'Famous Birthdays',
        'link': 'https://en.wikipedia.org/wiki/Famous_Birthdays',
        'status': 'ⓧ Blacklisted',
        'title': 'Famous Birthdays - Wikipedia',
        'image': 'Famous Birthdays.png',
        'image2': 'Famous Birthdays-1.png'
      },
      {
        'name': 'InfoWars',
        'link': 'https://en.wikipedia.org/wiki/InfoWars',
        'status': 'ⓧ Blacklisted',
        'title': 'InfoWars - Wikipedia',
        'image2': 'InfoWars-1.png',
        'image': 'InfoWars.png'
      },
      {
        'name': 'Lenta.ru',
        'link': 'https://en.wikipedia.org/wiki/Lenta.ru',
        'status': 'ⓧ Blacklisted',
        'title': 'Lenta.ru - Wikipedia',
        'image2': 'Lenta.ru-1.png'
      },
      {
        'name': 'LiveLeak',
        'link': 'https://en.wikipedia.org/wiki/LiveLeak',
        'status': 'ⓧ Blacklisted',
        'title': 'LiveLeak - Wikipedia',
        'image': 'LiveLeak.png',
        'image2': 'LiveLeak-1.png'
      },
      {
        'name': 'Lulu.com',
        'link': 'https://en.wikipedia.org/wiki/Lulu.com',
        'status': 'ⓧ Blacklisted',
        'title': 'Lulu.com - Wikipedia',
        'image': 'Lulu.com.png',
        'image2': 'Lulu.com-1.png'
      },
      {
        'name': 'MyLife',
        'link': 'https://en.wikipedia.org/wiki/MyLife',
        'status': 'ⓧ Blacklisted',
        'title': 'MyLife - Wikipedia',
        'image': 'MyLife.png',
        'image2': 'MyLife-1.png'
      },
      {
        'name': 'Natural News',
        'link': 'https://en.wikipedia.org/wiki/Natural_News',
        'status': 'ⓧ Blacklisted',
        'title': 'Natural News - Wikipedia',
        'image2': 'Natural News-1.png'
      },
      {
        'name': 'OpIndia',
        'link': 'https://en.wikipedia.org/wiki/OpIndia',
        'status': 'ⓧ Blacklisted',
        'title': 'OpIndia - Wikipedia',
        'image': 'OpIndia.png',
        'image2': 'OpIndia-1.png'
      },
      {
        'name': 'The Points Guy',
        'link': 'https://en.wikipedia.org/wiki/The_Points_Guy',
        'status': 'ⓧ Blacklisted',
        'title': 'The Points Guy - Wikipedia',
        'image': 'The Points Guy.png',
        'image2': 'The Points Guy-1.png'
      },
      {
        'name': 'Swarajya',
        'link': 'https://en.wikipedia.org/wiki/Swarajya_(magazine)',
        'status': 'ⓧ Blacklisted',
        'title': 'Swarajya (magazine) - Wikipedia',
        'image': 'Swarajya.png',
        'image2': 'Swarajya-1.jpg'
      },
      {
        'name': 'Veterans Today',
        'link': 'https://en.wikipedia.org/wiki/Veterans_Today',
        'status': 'ⓧ Blacklisted',
        'title': 'Veterans Today - Wikipedia',
        'image': 'Veterans Today.jpg',
        'image2': 'Veterans Today-1.jpg'
      },
      {
        'name': 'ZoomInfo',
        'link': 'https://en.wikipedia.org/wiki/ZoomInfo',
        'status': 'ⓧ Blacklisted',
        'title': 'ZoomInfo - Wikipedia',
        'image2': 'ZoomInfo-1.png'
      }
    ]
  ];

  @ViewChildren('wikiSourceLink') wikiSourceLink: QueryList<ElementRef<HTMLAnchorElement>>;

  onSearchInput(query: string): void {
    query = query.toLowerCase().trim();

    this.wikiSourceLink.forEach(({nativeElement}) => {
      nativeElement.classList.remove('active');

      if (query && nativeElement.getAttribute('title').toLowerCase().includes(query)) {
        nativeElement.classList.add('active');
      }
    });
  }
}
