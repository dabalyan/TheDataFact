import {Component, ViewEncapsulation} from '@angular/core';

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
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/ABC_News_logo_2021.svg/1200px-ABC_News_logo_2021.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/2/2a/ABC_News_logo_2021.svg/220px-ABC_News_logo_2021.svg.png'
      },
      {
        'name': 'The Age',
        'link': 'https://en.wikipedia.org/wiki/The_Age',
        'status': '✅ Generally Reliable',
        'title': 'The Age - Wikipedia',
        'image': 'https://www.nineforbrands.com.au/wp-content/uploads/2020/08/age-logo-tagline-colour.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/4/42/The_Age%2C_front_cover%2C_May_11_2020.png/220px-The_Age%2C_front_cover%2C_May_11_2020.png'
      },
      {
        'name': 'Agence France-Presse',
        'link': 'https://en.wikipedia.org/wiki/Agence_France-Presse',
        'status': '✅ Generally Reliable',
        'title': 'Agence France-Presse - Wikipedia',
        'image': 'https://i.ibb.co/vvq5525/Untitled.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Afp_logotype_rvb_wikipedia.png/220px-Afp_logotype_rvb_wikipedia.png'
      },
      {
        'name': 'Al Jazeera',
        'link': 'https://en.wikipedia.org/wiki/Al_Jazeera',
        'status': '✅ Generally Reliable',
        'title': 'Al Jazeera - Wikipedia',
        'image2': 'https://upload.wikimedia.org/wikipedia/de/thumb/7/73/Aljazeera_English.svg/640px-Aljazeera_English.svg.png'
      },
      {
        'name': 'Anti-Defamation League',
        'link': 'https://en.wikipedia.org/wiki/Anti-Defamation_League',
        'status': '✅ Generally Reliable',
        'title': 'Anti-Defamation League - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ADL_logo_%282018%29_cropped.svg/1200px-ADL_logo_%282018%29_cropped.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/1/18/ADL_logo_%282018%29_cropped.svg/150px-ADL_logo_%282018%29_cropped.svg.png'
      },
      {
        'name': 'Ars Technica',
        'link': 'https://en.wikipedia.org/wiki/Ars_Technica',
        'status': '✅ Generally Reliable',
        'title': 'Ars Technica - Wikipedia',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/8/8f/Ars_Technica_screenshot.png',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/5/51/Ars_Technica_logo_%282016%29.svg/200px-Ars_Technica_logo_%282016%29.svg.png'
      },
      {
        'name': 'Associated Press',
        'link': 'https://en.wikipedia.org/wiki/Associated_Press',
        'status': '✅ Generally Reliable',
        'title': 'Associated Press - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Associated_Press_logo_2012.svg/1200px-Associated_Press_logo_2012.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Associated_Press_logo_2012.svg/220px-Associated_Press_logo_2012.svg.png'
      },
      {
        'name': 'The Atlantic',
        'link': 'https://en.wikipedia.org/wiki/The_Atlantic',
        'status': '✅ Generally Reliable',
        'title': 'The Atlantic - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/d/da/The_Atlantic_Logo_11.2019.svg/220px-The_Atlantic_Logo_11.2019.svg.png'
      },
      {
        'name': 'The Australian',
        'link': 'https://en.wikipedia.org/wiki/The_Australian',
        'status': '✅ Generally Reliable',
        'title': 'The Australian - Wikipedia',
        'image': 'https://logos-download.com/wp-content/uploads/2019/06/The_Australian_Newspaper_Logo_old.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/3/33/The_Australian_cover_26_July_2017.jpg/220px-The_Australian_cover_26_July_2017.jpg'
      },
      {
        'name': 'The A.V. Club',
        'link': 'https://en.wikipedia.org/wiki/The_A.V._Club',
        'status': '✅ Generally Reliable',
        'title': 'The A.V. Club - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/The_A.V._Club_logo.svg/1200px-The_A.V._Club_logo.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/9/91/The_A.V._Club_logo.svg/220px-The_A.V._Club_logo.svg.png'
      },
      {
        'name': 'AVN (magazine)',
        'link': 'https://en.wikipedia.org/wiki/AVN_(magazine)',
        'status': '✅ Generally Reliable',
        'title': 'AVN (magazine) - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Adult_Video_News_logo.svg/1200px-Adult_Video_News_logo.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Adult_Video_News_logo.svg/220px-Adult_Video_News_logo.svg.png'
      },
      {
        'name': 'Axios',
        'link': 'https://en.wikipedia.org/wiki/Axios_(website)',
        'status': '✅ Generally Reliable',
        'title': 'Axios (website) - Wikipedia',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/b/ba/Axios_screenshot_%28September_2020%29.png',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Axios_logo_%282020%29.svg/220px-Axios_logo_%282020%29.svg.png'
      },
      {
        'name': 'BBC',
        'link': 'https://en.wikipedia.org/wiki/BBC',
        'status': '✅ Generally Reliable',
        'title': 'BBC - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/4/41/BBC_Logo_2021.svg/220px-BBC_Logo_2021.svg.png'
      },
      {
        'name': 'Bellingcat',
        'link': 'https://en.wikipedia.org/wiki/Bellingcat',
        'status': '✅ Generally Reliable',
        'title': 'Bellingcat - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/5/51/Bellingcat_logo.svg/220px-Bellingcat_logo.svg.png'
      },
      {
        'name': 'Bloomberg',
        'link': 'https://en.wikipedia.org/wiki/Bloomberg_L.P.',
        'status': '✅ Generally Reliable',
        'title': 'Bloomberg L.P. - Wikipedia',
        'image2': 'https://upload.wikimedia.org/wikipedia/commons/9/94/Bloomberg_tower.jpg',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Bloomberg_L.P._logo.svg/220px-Bloomberg_L.P._logo.svg.png'
      },
      {
        'name': 'Burke\'s Peerage',
        'link': 'https://en.wikipedia.org/wiki/Burke%27s_Peerage',
        'status': '✅ Generally Reliable',
        'title': 'Burke&#039;s Peerage - Wikipedia',
        'image1': 'https://upload.wikimedia.org/wikipedia/commons/4/45/Burkes-062012_square.gif',
        'image': 'https://i.pinimg.com/originals/9d/4b/4a/9d4b4a9176cda005be5783242e94a761.png'
      },
      {
        'name': 'BuzzFeed News',
        'link': 'https://en.wikipedia.org/wiki/BuzzFeed_News',
        'status': '✅ Generally Reliable',
        'title': 'BuzzFeed News - Wikipedia',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/c/cd/BuzzFeed_News_website_screenshot.png',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/e/e7/BuzzFeed_News_logo_2018.svg/220px-BuzzFeed_News_logo_2018.svg.png'
      },
      {
        'name': 'The Christian Science Monitor',
        'link': 'https://en.wikipedia.org/wiki/The_Christian_Science_Monitor',
        'status': '✅ Generally Reliable',
        'title': 'The Christian Science Monitor - Wikipedia',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/5/5e/Christian_Science_Monitor.jpg',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/2/27/The_Christian_Science_Monitor_masthead.png/194px-The_Christian_Science_Monitor_masthead.png'
      },
      {
        'name': 'Climate Feedback',
        'link': 'https://en.wikipedia.org/wiki/Climate_Feedback',
        'status': '✅ Generally Reliable',
        'title': 'Climate Feedback - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/f/f3/Climate_Feedback_logo.png/80px-Climate_Feedback_logo.png'
      },
      {
        'name': 'CNET',
        'link': 'https://en.wikipedia.org/wiki/CNET',
        'status': '✅ Generally Reliable',
        'title': 'CNET - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Cnet-logo-red-2020.svg/1200px-Cnet-logo-red-2020.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/9/95/Cnet-logo-red-2020.svg/220px-Cnet-logo-red-2020.svg.png'
      },
      {
        'name': 'CNN',
        'link': 'https://en.wikipedia.org/wiki/CNN',
        'status': '✅ Generally Reliable',
        'title': 'CNN - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/CNN.svg/1200px-CNN.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/b/b1/CNN.svg/175px-CNN.svg.png'
      },
      {
        'name': 'Coda Media',
        'link': 'https://en.wikipedia.org/wiki/Coda_Media',
        'status': '✅ Generally Reliable',
        'title': 'Coda Media - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Coda_Story_mini_logo.svg/1200px-Coda_Story_mini_logo.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Coda_Story_mini_logo.svg/220px-Coda_Story_mini_logo.svg.png'
      },
      {
        'name': 'Common Sense Media',
        'link': 'https://en.wikipedia.org/wiki/Common_Sense_Media',
        'status': '✅ Generally Reliable',
        'title': 'Common Sense Media - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Common_Sense_Media_logo.svg/1200px-Common_Sense_Media_logo.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Common_Sense_Media_logo.svg/220px-Common_Sense_Media_logo.svg.png'
      },
      {
        'name': 'The Conversation',
        'link': 'https://en.wikipedia.org/wiki/The_Conversation_(website)',
        'status': '✅ Generally Reliable',
        'title': 'The Conversation (website) - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/7/7c/The_Conversation_website_text_logo.svg/220px-The_Conversation_website_text_logo.svg.png'
      },
      {
        'name': 'The Daily Dot',
        'link': 'https://en.wikipedia.org/wiki/The_Daily_Dot',
        'status': '✅ Generally Reliable',
        'title': 'The Daily Dot - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/7/74/Daily_dot_logo.svg/200px-Daily_dot_logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/d/d7/The_Daily_Dot_home_page_screenshot.png'
      },
      {
        'name': 'The Daily Telegraph',
        'link': 'https://en.wikipedia.org/wiki/The_Daily_Telegraph',
        'status': '✅ Generally Reliable',
        'title': 'The Daily Telegraph - Wikipedia',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/b/b9/The_Daily_Telegraph_%28British_newspaper%29_front_page.jpg',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/a/a7/The_Telegraph.svg/137px-The_Telegraph.svg.png'
      },
      {
        'name': 'Deadline Hollywood',
        'link': 'https://en.wikipedia.org/wiki/Deadline_Hollywood',
        'status': '✅ Generally Reliable',
        'title': 'Deadline Hollywood - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Deadline_logo.svg/220px-Deadline_logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/e/ef/Deadline_home_page_screenshot.jpg'
      },
      {
        'name': 'Debrett\'s',
        'link': 'https://en.wikipedia.org/wiki/Debrett%27s',
        'status': '✅ Generally Reliable',
        'title': 'Debrett&#039;s - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Wreath_lockup_gold_rgb.jpg/1200px-Wreath_lockup_gold_rgb.jpg',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/2/23/Wreath_lockup_gold_rgb.jpg/220px-Wreath_lockup_gold_rgb.jpg'
      },
      {
        'name': 'Deseret News',
        'link': 'https://en.wikipedia.org/wiki/Deseret_News',
        'status': '✅ Generally Reliable',
        'title': 'Deseret News - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/en/thumb/b/b1/DeseretNewslogo.webp/250px-DeseretNewslogo.webp.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/3/35/Deseret_News_%28front_page%29.jpg'
      },
      {
        'name': 'Digital Spy',
        'link': 'https://en.wikipedia.org/wiki/Digital_Spy',
        'status': '✅ Generally Reliable',
        'title': 'Digital Spy - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Digital_Spy_logo_%282013%29.svg/220px-Digital_Spy_logo_%282013%29.svg.png'
      },
      {
        'name': 'The Diplomat',
        'link': 'https://en.wikipedia.org/wiki/The_Diplomat',
        'status': '✅ Generally Reliable',
        'title': 'The Diplomat - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/8/8c/The_Diplomat_logo.svg/250px-The_Diplomat_logo.svg.png'
      },
      {
        'name': 'The Economist',
        'link': 'https://en.wikipedia.org/wiki/The_Economist',
        'status': '✅ Generally Reliable',
        'title': 'The Economist - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/The_Economist_Logo.svg/1200px-The_Economist_Logo.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/6/65/The_Economist_Logo.svg/135px-The_Economist_Logo.svg.png'
      },
      {
        'name': 'Engadget',
        'link': 'https://en.wikipedia.org/wiki/Engadget',
        'status': '✅ Generally Reliable',
        'title': 'Engadget - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Engadget-logo.svg/220px-Engadget-logo.svg.png'
      },
      {
        'name': 'Entertainment Weekly',
        'link': 'https://en.wikipedia.org/wiki/Entertainment_Weekly',
        'status': '✅ Generally Reliable',
        'title': 'Entertainment Weekly - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Entertainment_Weekly_logo.svg/180px-Entertainment_Weekly_logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/0/0b/EW-Issue_1-Feb1990.jpg'
      },
      {
        'name': 'Financial Times',
        'link': 'https://en.wikipedia.org/wiki/Financial_Times',
        'status': '✅ Generally Reliable',
        'title': 'Financial Times - Wikipedia',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/8/8a/Financial_Times_22_February_2021_cover.jpg',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/6/68/Financial_Times_masthead.svg/250px-Financial_Times_masthead.svg.png'
      },
      {
        'name': 'Forbes',
        'link': 'https://en.wikipedia.org/wiki/Forbes',
        'status': '✅ Generally Reliable',
        'title': 'Forbes - Wikipedia',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/d/d2/Forbes_%28magazine%29_cover.jpg',
        'image': 'https://logos-download.com/wp-content/uploads/2016/05/Forbes_logo_black.png'
      },
      {
        'name': 'Fox News',
        'link': 'https://en.wikipedia.org/wiki/Fox_News',
        'status': '✅ Generally Reliable',
        'title': 'Fox News - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/1200px-Fox_News_Channel_logo.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/150px-Fox_News_Channel_logo.svg.png'
      },
      {
        'name': 'Game Developer',
        'link': 'https://en.wikipedia.org/wiki/Game_Developer_(website)',
        'status': '✅ Generally Reliable',
        'title': 'Game Developer (website) - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/8/85/Game_Developer_logo.svg/220px-Game_Developer_logo.svg.png'
      },
      {
        'name': 'Game Informer',
        'link': 'https://en.wikipedia.org/wiki/Game_Informer',
        'status': '✅ Generally Reliable',
        'title': 'Game Informer - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Game_Informer_logo_%282021-present%29.svg/250px-Game_Informer_logo_%282021-present%29.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/1/1d/July_2011_gameInfromer.jpeg'
      },
      {
        'name': 'Geographic Names Information System',
        'link': 'https://en.wikipedia.org/wiki/Geographic_Names_Information_System',
        'status': '✅ Generally Reliable',
        'title': 'Geographic Names Information System - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/USGS_logo_green.svg/1200px-USGS_logo_green.svg.png'
      },
      {
        'name': 'Gizmodo',
        'link': 'https://en.wikipedia.org/wiki/Gizmodo',
        'status': '✅ Generally Reliable',
        'title': 'Gizmodo - Wikipedia',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/a/ac/Gizmodoscreenshot.png',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Gizmodo.svg/220px-Gizmodo.svg.png'
      },
      {
        'name': 'The Globe and Mail',
        'link': 'https://en.wikipedia.org/wiki/The_Globe_and_Mail',
        'status': '✅ Generally Reliable',
        'title': 'The Globe and Mail - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/The_Globe_and_Mail_%282019-10-31%29.svg/2560px-The_Globe_and_Mail_%282019-10-31%29.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/b/b5/The_Globe_and_Mail_%282019-10-31%29.svg/250px-The_Globe_and_Mail_%282019-10-31%29.svg.png'
      },
      {
        'name': 'The Guardian',
        'link': 'https://en.wikipedia.org/wiki/The_Guardian',
        'status': '✅ Generally Reliable',
        'title': 'The Guardian - Wikipedia',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/6/67/The_Guardian_28_May_2021.jpg',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/7/75/The_Guardian_2018.svg/153px-The_Guardian_2018.svg.png'
      },
      {
        'name': 'Haaretz',
        'link': 'https://en.wikipedia.org/wiki/Haaretz',
        'status': '✅ Generally Reliable',
        'title': 'Haaretz - Wikipedia',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/d/d2/Haaretz_front_page.jpg',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/9/90/Haaretz_en.svg/250px-Haaretz_en.svg.png'
      },
      {
        'name': 'The Hill',
        'link': 'https://en.wikipedia.org/wiki/The_Hill_(newspaper)',
        'status': '✅ Generally Reliable',
        'title': 'The Hill (newspaper) - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/The_Hill_%282020-01-15%29.svg/1200px-The_Hill_%282020-01-15%29.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/9/91/The_Hill_%282020-01-15%29.svg/220px-The_Hill_%282020-01-15%29.svg.png'
      },
      {
        'name': 'The Hindu',
        'link': 'https://en.wikipedia.org/wiki/The_Hindu',
        'status': '✅ Generally Reliable',
        'title': 'The Hindu - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/6/6c/The_Hindu_logo.webp/250px-The_Hindu_logo.webp.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/3/31/NewsPaperTheHindu.png'
      },
      {
        'name': 'The Hollywood Reporter',
        'link': 'https://en.wikipedia.org/wiki/The_Hollywood_Reporter',
        'status': '✅ Generally Reliable',
        'title': 'The Hollywood Reporter - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/4/42/The_Hollywood_Reporter_logo.svg/180px-The_Hollywood_Reporter_logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/2/28/19_May_2021_The_Hollywood_Reporter_Cover.jpg'
      },
      {
        'name': 'HuffPost',
        'link': 'https://en.wikipedia.org/wiki/HuffPost',
        'status': '✅ Generally Reliable',
        'title': 'HuffPost - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/5/5a/HuffPost.svg/220px-HuffPost.svg.png'
      },
      {
        'name': 'Idolator',
        'link': 'https://en.wikipedia.org/wiki/Idolator_(website)',
        'status': '✅ Generally Reliable',
        'title': 'Idolator (website) - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/9/90/Idolator_logo.png/220px-Idolator_logo.png'
      },
      {
        'name': 'IGN',
        'link': 'https://en.wikipedia.org/wiki/IGN',
        'status': '✅ Generally Reliable',
        'title': 'IGN - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/IGN_Entertainment_Logo.svg/1200px-IGN_Entertainment_Logo.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/f/f6/IGN_Entertainment_Logo.svg/220px-IGN_Entertainment_Logo.svg.png'
      },
      {
        'name': 'The Independent',
        'link': 'https://en.wikipedia.org/wiki/The_Independent',
        'status': '✅ Generally Reliable',
        'title': 'The Independent - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/en/thumb/4/40/The_Independent_news_logo.svg/240px-The_Independent_news_logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/1/10/The_Independent_screenshot%2C_25_July_2021.png'
      },
      {
        'name': 'The Indian Express',
        'link': 'https://en.wikipedia.org/wiki/The_Indian_Express',
        'status': '✅ Generally Reliable',
        'title': 'The Indian Express - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/2/24/The_Indian_Express_logo.svg/250px-The_Indian_Express_logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/8/85/Indian-Expree.jpg'
      },
      {
        'name': 'Insider Inc.',
        'link': 'https://en.wikipedia.org/wiki/Insider_Inc.',
        'status': '✅ Generally Reliable',
        'title': 'Insider Inc. - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/2/2c/InsiderLogo.svg/220px-InsiderLogo.svg.png'
      },
      {
        'name': 'Inter Press Service',
        'link': 'https://en.wikipedia.org/wiki/Inter_Press_Service',
        'status': '✅ Generally Reliable',
        'title': 'Inter Press Service - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/d/d6/Inter_Press_Service_logo.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/d/d6/Inter_Press_Service_logo.png'
      },
      {
        'name': 'The Intercept',
        'link': 'https://en.wikipedia.org/wiki/The_Intercept',
        'status': '✅ Generally Reliable',
        'title': 'The Intercept - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/1/14/The_Intercept_logo.svg/216px-The_Intercept_logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/3/31/Intercept_screenshot.PNG'
      },
      {
        'name': 'International Fact-Checking Network',
        'link': 'https://en.wikipedia.org/wiki/International_Fact-Checking_Network',
        'status': '✅ Generally Reliable',
        'title': 'Poynter Institute - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Poynter_Institute_logo.svg/220px-Poynter_Institute_logo.svg.png'
      },
      {
        'name': 'JAMA',
        'link': 'https://en.wikipedia.org/wiki/JAMA',
        'status': '✅ Generally Reliable',
        'title': 'JAMA - Wikipedia',
        'image': 'http://medicalopedia.org/wp-content/uploads/2012/12/JAMA.jpg',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/3/3f/JAMA_Cover_Image.png/200px-JAMA_Cover_Image.png'
      },
      {
        'name': 'The Jewish Chronicle',
        'link': 'https://en.wikipedia.org/wiki/The_Jewish_Chronicle',
        'status': '✅ Generally Reliable',
        'title': 'The Jewish Chronicle - Wikipedia',
        'image2': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFvW6kg84Yqz4Exeqoz3JizgE6lXR3fhglh_Ika2qjMfoMhen5ihIqIA4lJGZAx9797w&usqp=CAU',
        'image': 'https://www.respublica.org.uk/wp-content/uploads/2017/07/Jewish-Chronicle.jpg'
      },
      {
        'name': 'Kirkus Reviews',
        'link': 'https://en.wikipedia.org/wiki/Kirkus_Reviews',
        'status': '✅ Generally Reliable',
        'title': 'Kirkus Reviews - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Kirkus_logo.svg/180px-Kirkus_logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/2/2e/Kirkus_Reviews_031521_cover.png'
      },
      {
        'name': 'Kommersant',
        'link': 'https://en.wikipedia.org/wiki/Kommersant',
        'status': '✅ Generally Reliable',
        'title': 'Kommersant - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Logo_Kommersant.svg/640px-Logo_Kommersant.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/5/55/Kommersant.png'
      },
      {
        'name': 'Los Angeles Times',
        'link': 'https://en.wikipedia.org/wiki/Los_Angeles_Times',
        'status': '✅ Generally Reliable',
        'title': 'Los Angeles Times - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Los_Angeles_Times.svg/640px-Los_Angeles_Times.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/9/94/Los_Angeles_Times_July_10_2021.png'
      },
      {
        'name': 'Mail & Guardian',
        'link': 'https://en.wikipedia.org/wiki/Mail_%26_Guardian',
        'status': '✅ Generally Reliable',
        'title': 'Mail &amp; Guardian - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/8/84/Mail_%26_Guardian.gif',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/8/84/Mail_%26_Guardian.gif/280px-Mail_%26_Guardian.gif'
      },
      {
        'name': 'Metacritic',
        'link': 'https://en.wikipedia.org/wiki/Metacritic',
        'status': '✅ Generally Reliable',
        'title': 'Metacritic - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/4/48/Metacritic_logo.svg/253px-Metacritic_logo.svg.png'
      },
      {
        'name': 'Le Monde diplomatique',
        'link': 'https://en.wikipedia.org/wiki/Le_Monde_diplomatique',
        'status': '✅ Generally Reliable',
        'title': 'Le Monde diplomatique - Wikipedia',
        'image': 'https://www.icwa.org/wp-content/uploads/2017/03/Le_Monde_diplomatique.jpg',
        'image2': '//upload.wikimedia.org/wikipedia/en/b/bd/Le_Monde_diplomatique_front_page.jpg'
      },
      {
        'name': 'Mother Jones',
        'link': 'https://en.wikipedia.org/wiki/Mother_Jones_(magazine)',
        'status': '✅ Generally Reliable',
        'title': 'Mother Jones (magazine) - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Mother_Jones_Logo_2019.svg/180px-Mother_Jones_Logo_2019.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/commons/3/35/Mayjune_cover.JPG'
      },
      {
        'name': 'MSNBC',
        'link': 'https://en.wikipedia.org/wiki/MSNBC',
        'status': '✅ Generally Reliable',
        'title': 'MSNBC - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/8/83/MSNBC_2021.svg/250px-MSNBC_2021.svg.png'
      },
      {
        'name': 'The Nation',
        'link': 'https://en.wikipedia.org/wiki/The_Nation',
        'status': '✅ Generally Reliable',
        'title': 'The Nation - Wikipedia',
        'image': 'https://mpng.subpng.com/20180626/yh/kisspng-the-nation-institute-united-states-logo-5b3280798099c5.2096281515300363455268.jpg',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/4/48/The_Nation_magazine_cover_-_18-25_June_2018.jpg/220px-The_Nation_magazine_cover_-_18-25_June_2018.jpg'
      },
      {
        'name': 'National Geographic',
        'link': 'https://en.wikipedia.org/wiki/National_Geographic',
        'status': '✅ Generally Reliable',
        'title': 'National Geographic - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/National-Geographic-Logo.svg/320px-National-Geographic-Logo.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/a/ad/National_Geographic_Magazine_March_2017_Cover.jpg/220px-National_Geographic_Magazine_March_2017_Cover.jpg'
      },
      {
        'name': 'NBC News',
        'link': 'https://en.wikipedia.org/wiki/NBC_News',
        'status': '✅ Generally Reliable',
        'title': 'NBC News - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/NBC_News_2011.svg/1200px-NBC_News_2011.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/a/a0/NBC_News_2011.svg/210px-NBC_News_2011.svg.png'
      },
      {
        'name': 'The New Republic',
        'link': 'https://en.wikipedia.org/wiki/The_New_Republic',
        'status': '✅ Generally Reliable',
        'title': 'The New Republic - Wikipedia',
        'image': 'https://images.milledcdn.com/2020-04-27/Ww9WWrKPqREZbFcM/LwSQaKAYryRI.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/1/1e/The_New_Republic_%2811.2021%29.svg/250px-The_New_Republic_%2811.2021%29.svg.png'
      },
      {
        'name': 'New Scientist',
        'link': 'https://en.wikipedia.org/wiki/New_Scientist',
        'status': '✅ Generally Reliable',
        'title': 'New Scientist - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/c/c0/New_Scientist_logo.svg/180px-New_Scientist_logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/b/be/New_Scientist.jpg'
      },
      {
        'name': 'New York',
        'link': 'https://en.wikipedia.org/wiki/New_York_(magazine)',
        'status': '✅ Generally Reliable',
        'title': 'New York (magazine) - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/1/11/New_York_Magazine_Logo.svg/250px-New_York_Magazine_Logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/2/23/New_York_magazine_June_8_1970_cover.png'
      },
      {
        'name': 'New York Daily News',
        'link': 'https://en.wikipedia.org/wiki/New_York_Daily_News',
        'status': '✅ Generally Reliable',
        'title': 'New York Daily News - Wikipedia',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/9/9d/New_York_Daily_News_June_24_2021_cover.png',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/3/38/New_York_Daily_News.svg/250px-New_York_Daily_News.svg.png'
      },
      {
        'name': 'The New York Times',
        'link': 'https://en.wikipedia.org/wiki/The_New_York_Times',
        'status': '✅ Generally Reliable',
        'title': 'The New York Times - Wikipedia',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/2/2e/The-New-York-Times-March-26-2018.jpg',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/5/58/NewYorkTimes.svg/250px-NewYorkTimes.svg.png'
      },
      {
        'name': 'The New Yorker',
        'link': 'https://en.wikipedia.org/wiki/The_New_Yorker',
        'status': '✅ Generally Reliable',
        'title': 'The New Yorker - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/4/4a/The_New_Yorker_Logo.svg/180px-The_New_Yorker_Logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Original_New_Yorker_cover.png/1200px-Original_New_Yorker_cover.png'
      },
      {
        'name': 'The New Zealand Herald',
        'link': 'https://en.wikipedia.org/wiki/The_New_Zealand_Herald',
        'status': '✅ Generally Reliable',
        'title': 'The New Zealand Herald - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/1/14/The_New_Zealand_Herald_logo.webp/250px-The_New_Zealand_Herald_logo.webp.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/9/92/The_New_Zealand_Herald.jpg'
      },
      {
        'name': 'Newsweek',
        'link': 'https://en.wikipedia.org/wiki/Newsweek',
        'status': '✅ Generally Reliable',
        'title': 'Newsweek - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/d/db/Newsweek_Logo.svg/180px-Newsweek_Logo.svg.png'
      },
      {
        'name': 'NPR',
        'link': 'https://en.wikipedia.org/wiki/NPR',
        'status': '✅ Generally Reliable',
        'title': 'NPR - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/National_Public_Radio_logo.svg/1200px-National_Public_Radio_logo.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/d/d7/National_Public_Radio_logo.svg/220px-National_Public_Radio_logo.svg.png'
      },
      {
        'name': 'People',
        'link': 'https://en.wikipedia.org/wiki/People_(magazine)',
        'status': '✅ Generally Reliable',
        'title': 'People (magazine) - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/0/06/People_Magazine_logo.svg/180px-People_Magazine_logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/e/e4/People_Magazine_cover.png'
      },
      {
        'name': 'Pew Research Center',
        'link': 'https://en.wikipedia.org/wiki/Pew_Research_Center',
        'status': '✅ Generally Reliable',
        'title': 'Pew Research Center - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Pew_Research_Center.svg/220px-Pew_Research_Center.svg.png'
      },
      {
        'name': 'PinkNews',
        'link': 'https://en.wikipedia.org/wiki/PinkNews',
        'status': '✅ Generally Reliable',
        'title': 'PinkNews - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/3/3a/Pink_News_Logo.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/f/f5/Pink_News_Screenshot_15th_April_2012.png'
      },
      {
        'name': 'Playboy',
        'link': 'https://en.wikipedia.org/wiki/Playboy',
        'status': '✅ Generally Reliable',
        'title': 'Playboy - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/PlayboyLogo.svg/1200px-PlayboyLogo.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/a/a8/PlayboyLogo.svg/125px-PlayboyLogo.svg.png'
      },
      {
        'name': 'Politico',
        'link': 'https://en.wikipedia.org/wiki/Politico',
        'status': '✅ Generally Reliable',
        'title': 'Politico - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/1/11/POLITICOLOGO.svg/220px-POLITICOLOGO.svg.png'
      },
      {
        'name': 'PolitiFact',
        'link': 'https://en.wikipedia.org/wiki/PolitiFact',
        'status': '✅ Generally Reliable',
        'title': 'PolitiFact - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/e/e0/PolitiFact_logo.svg/280px-PolitiFact_logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/e/e3/PolitiFact_home_page_screenshot.png'
      },
      {
        'name': 'Polygon',
        'link': 'https://en.wikipedia.org/wiki/Polygon_(website)',
        'status': '✅ Generally Reliable',
        'title': 'Polygon (website) - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Polygon_logo.svg/220px-Polygon_logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/f/f4/Polygon_screenshot.png'
      },
      {
        'name': 'ProPublica',
        'link': 'https://en.wikipedia.org/wiki/ProPublica',
        'status': '✅ Generally Reliable',
        'title': 'ProPublica - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/8/86/ProPublica_logo.svg/250px-ProPublica_logo.svg.png'
      },
      {
        'name': 'Quartz',
        'link': 'https://en.wikipedia.org/wiki/Quartz_(website)',
        'status': '✅ Generally Reliable',
        'title': 'Quartz (publication) - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/0/02/Quartz_logo.png/220px-Quartz_logo.png'
      },
      {
        'name': 'Radio Free Asia',
        'link': 'https://en.wikipedia.org/wiki/Radio_Free_Asia',
        'status': '✅ Generally Reliable',
        'title': 'Radio Free Asia - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Radio_Free_Asia_Logo_2021.png/220px-Radio_Free_Asia_Logo_2021.png'
      },
      {
        'name': 'Rappler',
        'link': 'https://en.wikipedia.org/wiki/Rappler',
        'status': '✅ Generally Reliable',
        'title': 'Rappler - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Rappler_logo.svg/1200px-Rappler_logo.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/6/69/Rappler_logo.svg/150px-Rappler_logo.svg.png'
      },
      {
        'name': 'Reason',
        'link': 'https://en.wikipedia.org/wiki/Reason_(magazine)',
        'status': '✅ Generally Reliable',
        'title': 'Reason (magazine) - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Reason_logo.svg/320px-Reason_logo.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/2/26/Reason_Magazine_Cover.jpg/183px-Reason_Magazine_Cover.jpg'
      },
      {
        'name': 'The Register',
        'link': 'https://en.wikipedia.org/wiki/The_Register',
        'status': '✅ Generally Reliable',
        'title': 'The Register - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/en/thumb/b/b1/The_Register_logo.svg/220px-The_Register_logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/8/80/TheRegister.co.uk_screenshot.png'
      },
      {
        'name': 'Religion News Service',
        'link': 'https://en.wikipedia.org/wiki/Religion_News_Service',
        'status': '✅ Generally Reliable',
        'title': 'Religion News Service - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/f/fa/Religion_News_Service_logo.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/f/fa/Religion_News_Service_logo.png'
      },
      {
        'name': 'Reuters',
        'link': 'https://en.wikipedia.org/wiki/Reuters',
        'status': '✅ Generally Reliable',
        'title': 'Reuters - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Reuters_Logo.svg/220px-Reuters_Logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Reuters-Building-30SC.JPG/1200px-Reuters-Building-30SC.JPG'
      },
      {
        'name': 'Rolling Stone',
        'link': 'https://en.wikipedia.org/wiki/Rolling_Stone',
        'status': '✅ Generally Reliable',
        'title': 'Rolling Stone - Wikipedia',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/d/df/Rolling_Stone_1000th_Issue_May_June_2006.png',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/8/89/Rolling_Stone_2019.svg/180px-Rolling_Stone_2019.svg.png'
      },
      {
        'name': 'Rotten Tomatoes',
        'link': 'https://en.wikipedia.org/wiki/Rotten_Tomatoes',
        'status': '✅ Generally Reliable',
        'title': 'Rotten Tomatoes - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Rotten_Tomatoes_logo.svg/220px-Rotten_Tomatoes_logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/b/b3/Rotten_Tomatoes_homepage.png'
      },
      {
        'name': 'Science-Based Medicine',
        'link': 'https://en.wikipedia.org/wiki/Science-Based_Medicine',
        'status': '✅ Generally Reliable',
        'title': 'Science-Based Medicine - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/3/34/Science-Based_Medicine_logo.png/220px-Science-Based_Medicine_logo.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/b/b9/Science-Based_Medicine_home_page_screenshot.png'
      },
      {
        'name': 'Scientific American',
        'link': 'https://en.wikipedia.org/wiki/Scientific_American',
        'status': '✅ Generally Reliable',
        'title': 'Scientific American - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Scientific_American_logo.svg/320px-Scientific_American_logo.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/c/c4/Scientific_American_%28magazine%29_%E2%80%93_March_2005.jpg'
      },
      {
        'name': 'SCOTUSblog',
        'link': 'https://en.wikipedia.org/wiki/SCOTUSblog',
        'status': '✅ Generally Reliable',
        'title': 'SCOTUSblog - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/6/6c/SCOTUSblog_logo.png/220px-SCOTUSblog_logo.png'
      },
      {
        'name': 'Slate',
        'link': 'https://en.wikipedia.org/wiki/Slate_(magazine)',
        'status': '✅ Generally Reliable',
        'title': 'Slate (magazine) - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Slate_new_logo.svg/220px-Slate_new_logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/8/84/Slate_homepage_2013-11-09.png'
      },
      {
        'name': 'Snopes',
        'link': 'https://en.wikipedia.org/wiki/Snopes',
        'status': '✅ Generally Reliable',
        'title': 'Snopes - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/c/c9/Snopes_%28website%29_logo.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/c/c9/Snopes_%28website%29_logo.png/125px-Snopes_%28website%29_logo.png'
      },
      {
        'name': 'South China Morning Post',
        'link': 'https://en.wikipedia.org/wiki/South_China_Morning_Post',
        'status': '✅ Generally Reliable',
        'title': 'South China Morning Post - Wikipedia',
        'image2': 'https://www.drupal.org/files/styles/grid-4-2x/public/scmp_logo.png?itok=QN3-x6XV',
        'image': 'https://www.synergymediaspecialists.com/wp-content/uploads/2014/12/SCMP-new-horizontal-logo.png'
      },
      {
        'name': 'Southern Poverty Law Center',
        'link': 'https://en.wikipedia.org/wiki/Southern_Poverty_Law_Center',
        'status': '✅ Generally Reliable',
        'title': 'Southern Poverty Law Center - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/5/58/SPLC_Logo.svg/220px-SPLC_Logo.svg.png'
      },
      {
        'name': 'Space.com',
        'link': 'https://en.wikipedia.org/wiki/Space.com',
        'status': '✅ Generally Reliable',
        'title': 'Space.com - Wikipedia',
        'image': 'https://vectorlogoseek.com/wp-content/uploads/2019/05/space-com-vector-logo.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/b/b7/Space.com_as_of_2006-10-19.png/300px-Space.com_as_of_2006-10-19.png'
      },
      {
        'name': 'Der Spiegel',
        'link': 'https://en.wikipedia.org/wiki/Der_Spiegel',
        'status': '✅ Generally Reliable',
        'title': 'Der Spiegel - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Logo-der_spiegel.svg/180px-Logo-der_spiegel.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/f/fe/Der_Spiegel_front_page.jpg'
      },
      {
        'name': 'The Sydney Morning Herald',
        'link': 'https://en.wikipedia.org/wiki/The_Sydney_Morning_Herald',
        'status': '✅ Generally Reliable',
        'title': 'The Sydney Morning Herald - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/en/thumb/8/86/Sydney_Morning_Herald_logo.svg/250px-Sydney_Morning_Herald_logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/3/39/The_Sydney_Morning_Herald_front_page.jpg'
      },
      {
        'name': 'TheWrap',
        'link': 'https://en.wikipedia.org/wiki/TheWrap',
        'status': '✅ Generally Reliable',
        'title': 'TheWrap - Wikipedia',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/5/52/TheWrap_home_page_screenshot.png',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/9/91/TheWrap.svg/180px-TheWrap.svg.png'
      },
      {
        'name': 'Time',
        'link': 'https://en.wikipedia.org/wiki/Time_(magazine)',
        'status': '✅ Generally Reliable',
        'title': 'Time (magazine) - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Time_Magazine_logo.svg/180px-Time_Magazine_logo.svg.png'
      },
      {
        'name': 'The Times',
        'link': 'https://en.wikipedia.org/wiki/The_Times',
        'status': '✅ Generally Reliable',
        'title': 'The Times - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/en/thumb/1/1f/The_Times_logo.svg/250px-The_Times_logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/e/e1/Thetimespapercover.jpg'
      },
      {
        'name': 'TorrentFreak',
        'link': 'https://en.wikipedia.org/wiki/TorrentFreak',
        'status': '✅ Generally Reliable',
        'title': 'TorrentFreak - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/d/d1/TorrentFreak_logo.svg/80px-TorrentFreak_logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/b/bd/TorrentFreak_home_page_screenshot.png'
      },
      {
        'name': 'TV Guide',
        'link': 'https://en.wikipedia.org/wiki/TV_Guide',
        'status': '✅ Generally Reliable',
        'title': 'TV Guide - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/8/86/TVGDigital_logo_2019.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/8/86/TVGDigital_logo_2019.png/155px-TVGDigital_logo_2019.png'
      },
      {
        'name': 'U.S. News & World Report',
        'link': 'https://en.wikipedia.org/wiki/U.S._News_%26_World_Report',
        'status': '✅ Generally Reliable',
        'title': 'U.S. News &amp; World Report - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/1/18/U.S._News_%26_World_Report_logo.svg/197px-U.S._News_%26_World_Report_logo.svg.png'
      },
      {
        'name': 'USA Today',
        'link': 'https://en.wikipedia.org/wiki/USA_Today',
        'status': '✅ Generally Reliable',
        'title': 'USA Today - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Site-masthead-logo-dark%402x.png?20180205015208',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/f/fe/USA_Today_%282020-01-29%29.svg/250px-USA_Today_%282020-01-29%29.svg.png'
      },
      {
        'name': 'Vanity Fair',
        'link': 'https://en.wikipedia.org/wiki/Vanity_Fair_(magazine)',
        'status': '✅ Generally Reliable',
        'title': 'Vanity Fair (magazine) - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/4/41/Vanity_Fair_Logo.svg/250px-Vanity_Fair_Logo.svg.png'
      },
      {
        'name': 'Variety',
        'link': 'https://en.wikipedia.org/wiki/Variety_(magazine)',
        'status': '✅ Generally Reliable',
        'title': 'Variety (magazine) - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/en/thumb/f/f4/Variety_2013_logo.svg/180px-Variety_2013_logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/5/5a/Variety_cover.jpg'
      },
      {
        'name': 'VentureBeat',
        'link': 'https://en.wikipedia.org/wiki/VentureBeat',
        'status': '✅ Generally Reliable',
        'title': 'VentureBeat - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/7/7b/VentureBeat_logo.svg/220px-VentureBeat_logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/8/83/VentureBeat_home_page_screenshot.png'
      },
      {
        'name': 'The Verge',
        'link': 'https://en.wikipedia.org/wiki/The_Verge',
        'status': '✅ Generally Reliable',
        'title': 'The Verge - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/f/fb/The_Verge_Logo_2016.svg/100px-The_Verge_Logo_2016.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/6/6e/The_Verge_Website_Screenshot.png'
      },
      {
        'name': 'Vogue',
        'link': 'https://en.wikipedia.org/wiki/Vogue_(magazine)',
        'status': '✅ Generally Reliable',
        'title': 'Vogue (magazine) - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/f/f8/VOGUE_LOGO.svg/180px-VOGUE_LOGO.svg.png'
      },
      {
        'name': 'Vox',
        'link': 'https://en.wikipedia.org/wiki/Vox_(website)',
        'status': '✅ Generally Reliable',
        'title': 'Vox (website) - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vox_logo.svg/1200px-Vox_logo.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vox_logo.svg/150px-Vox_logo.svg.png'
      },
      {
        'name': 'The Wall Street Journal',
        'link': 'https://en.wikipedia.org/wiki/The_Wall_Street_Journal',
        'status': '✅ Generally Reliable',
        'title': 'The Wall Street Journal - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/4/4a/WSJ_Logo.svg/250px-WSJ_Logo.svg.png'
      },
      {
        'name': 'The Washington Post',
        'link': 'https://en.wikipedia.org/wiki/The_Washington_Post',
        'status': '✅ Generally Reliable',
        'title': 'The Washington Post - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/9/93/The_Logo_of_The_Washington_Post_Newspaper.svg/250px-The_Logo_of_The_Washington_Post_Newspaper.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/5/57/The-Washington-Post-10-June-2020.jpg'
      },
      {
        'name': 'The Weekly Standard',
        'link': 'https://en.wikipedia.org/wiki/The_Weekly_Standard',
        'status': '✅ Generally Reliable',
        'title': 'The Weekly Standard - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/6/62/The_Weekly_Standard_logo.svg/180px-The_Weekly_Standard_logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/f/f3/Cover_2018-12-24_edition_of_The_Weekly_Standard%28final_issue%29.jpg'
      },
      {
        'name': 'Wired',
        'link': 'https://en.wikipedia.org/wiki/Wired_(magazine)',
        'status': '✅ Generally Reliable',
        'title': 'Wired (magazine) - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Wired_logo.svg/1200px-Wired_logo.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/9/95/Wired_logo.svg/220px-Wired_logo.svg.png'
      },
      {
        'name': 'ZDNet',
        'link': 'https://en.wikipedia.org/wiki/ZDNet',
        'status': '✅ Generally Reliable',
        'title': 'ZDNet - Wikipedia',
        'image2': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/ZDNet_Logo.svg/1200px-ZDNet_Logo.svg.png',
        'image': 'https://logos-download.com/wp-content/uploads/2016/11/ZDNet_logo_logotype-700x481.png'
      }
    ],
    [
      {
        'name': 'The American Conservative',
        'link': 'https://en.wikipedia.org/wiki/The_American_Conservative',
        'status': '⚠ No Consensus',
        'title': 'The American Conservative - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/en/thumb/a/a1/The_American_Conservative_magazine_logo.png/180px-The_American_Conservative_magazine_logo.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/f/f5/Cover_September_October_2016_edition_of_The_American_Conservative.jpg'
      },
      {
        'name': 'Anadolu Agency',
        'link': 'https://en.wikipedia.org/wiki/Anadolu_Agency',
        'status': '⚠ No Consensus',
        'title': 'Anadolu Agency - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/7/79/Anadolu_Agency_Logo.jpg',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/7/79/Anadolu_Agency_Logo.jpg/220px-Anadolu_Agency_Logo.jpg'
      },
      {
        'name': 'Apple Daily',
        'link': 'https://en.wikipedia.org/wiki/Apple_Daily',
        'status': '⚠ No Consensus',
        'title': 'Apple Daily - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/en/thumb/9/98/Apple_Daily_logo_%282020-09-13%29.svg/90px-Apple_Daily_logo_%282020-09-13%29.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/9/96/Apple_daily_front_page.jpg'
      },
      {
        'name': 'Arab News',
        'link': 'https://en.wikipedia.org/wiki/Arab_News',
        'status': '⚠ No Consensus',
        'title': 'Arab News - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/8/86/Arab_news_Logo_L_Apr_2018.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Arab_News_%282019-07-27%29.svg/250px-Arab_News_%282019-07-27%29.svg.png'
      },
      {
        'name': 'Asian News International',
        'link': 'https://en.wikipedia.org/wiki/Asian_News_International',
        'status': '⚠ No Consensus',
        'title': 'Asian News International - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Ani-logo-black.png/220px-Ani-logo-black.png'
      },
      {
        'name': 'Australian Strategic Policy Institute',
        'link': 'https://en.wikipedia.org/wiki/Australian_Strategic_Policy_Institute',
        'status': '⚠ No Consensus',
        'title': 'Australian Strategic Policy Institute - Wikipedia',
        'image': 'https://www.aspi.org.au/themes/custom/aspi/assets/images/SVGs/aspi-logo.svg',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/b/ba/40_Macquarie_St_Barton_June_2012.JPG/220px-40_Macquarie_St_Barton_June_2012.JPG'
      },
      {
        'name': 'Ballotpedia',
        'link': 'https://en.wikipedia.org/wiki/Ballotpedia',
        'status': '⚠ No Consensus',
        'title': 'Ballotpedia - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Ballotpedia_logo.png/220px-Ballotpedia_logo.png'
      },
      {
        'name': 'Biography.com',
        'link': 'https://en.wikipedia.org/wiki/Biography.com',
        'status': '⚠ No Consensus',
        'title': 'Biography (TV program) - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/d/d3/Biography_tv_series_logo.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/d/d3/Biography_tv_series_logo.png/250px-Biography_tv_series_logo.png'
      },
      {
        'name': 'Bloomberg',
        'link': 'https://en.wikipedia.org/wiki/Bloomberg_L.P.',
        'status': '⚠ No Consensus',
        'title': 'Bloomberg L.P. - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Bloomberg_L.P._logo.svg/220px-Bloomberg_L.P._logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/commons/9/94/Bloomberg_tower.jpg'
      },
      {
        'name': 'Boing Boing',
        'link': 'https://en.wikipedia.org/wiki/Boing_Boing',
        'status': '⚠ No Consensus',
        'title': 'Boing Boing - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/5/51/Boing_Boing_Logo.svg/220px-Boing_Boing_Logo.svg.png'
      },
      {
        'name': 'Business Insider',
        'link': 'https://en.wikipedia.org/wiki/Business_Insider',
        'status': '⚠ No Consensus',
        'title': 'Insider (news website) - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/1/11/Business_Insider_Logo.svg/200px-Business_Insider_Logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/5/52/Business_Insider_front_page.png'
      },
      {
        'name': 'Bustle',
        'link': 'https://en.wikipedia.org/wiki/Bustle_(magazine)',
        'status': '⚠ No Consensus',
        'title': 'Bustle (magazine) - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Bustle_logo_2020.svg/180px-Bustle_logo_2020.svg.png'
      },
      {
        'name': 'BuzzFeed',
        'link': 'https://en.wikipedia.org/wiki/BuzzFeed',
        'status': '⚠ No Consensus',
        'title': 'BuzzFeed - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/3/3c/BuzzFeed_Logo_10.2019.svg/250px-BuzzFeed_Logo_10.2019.svg.png'
      },
      {
        'name': 'Cato Institute',
        'link': 'https://en.wikipedia.org/wiki/Cato_Institute',
        'status': '⚠ No Consensus',
        'title': 'Cato Institute - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Cato_Institute.svg/1200px-Cato_Institute.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Cato_Institute.svg/175px-Cato_Institute.svg.png'
      },
      {
        'name': 'Center for Economic and Policy Research',
        'link': 'https://en.wikipedia.org/wiki/Center_for_Economic_and_Policy_Research',
        'status': '⚠ No Consensus',
        'title': 'Center for Economic and Policy Research - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/d/dd/Center_for_Economic_and_Policy_Research_logo.svg/250px-Center_for_Economic_and_Policy_Research_logo.svg.png'
      },
      {
        'name': 'China Daily',
        'link': 'https://en.wikipedia.org/wiki/China_Daily',
        'status': '⚠ No Consensus',
        'title': 'China Daily - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/0/07/China_Daily_logo.jpg/240px-China_Daily_logo.jpg'
      },
      {
        'name': 'CliffsNotes',
        'link': 'https://en.wikipedia.org/wiki/CliffsNotes',
        'status': '⚠ No Consensus',
        'title': 'CliffsNotes - Wikipedia',
        'image': 'https://photos.prnewswire.com/prnfull/20160808/396496?p=publish'
      },
      {
        'name': 'Cosmopolitan',
        'link': 'https://en.wikipedia.org/wiki/Cosmopolitan_(magazine)',
        'status': '⚠ No Consensus',
        'title': 'Cosmopolitan (magazine) - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Comopolitan_Magazine_Logo.svg/180px-Comopolitan_Magazine_Logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/1/12/Cosmopolitan_cover_December_2020.jpeg'
      },
      {
        'name': 'The Daily Beast',
        'link': 'https://en.wikipedia.org/wiki/The_Daily_Beast',
        'status': '⚠ No Consensus',
        'title': 'The Daily Beast - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/0/0c/The_Daily_Beast_logo.png'
      },
      {
        'name': 'Daily Mirror',
        'link': 'https://en.wikipedia.org/wiki/Daily_Mirror',
        'status': '⚠ No Consensus',
        'title': 'Daily Mirror - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Daily_Mirror_logo.svg/133px-Daily_Mirror_logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/4/47/DailyMirror.jpg'
      },
      {
        'name': 'Democracy Now!',
        'link': 'https://en.wikipedia.org/wiki/Democracy_Now!',
        'status': '⚠ No Consensus',
        'title': 'Democracy Now! - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Democracy_Now%21_logo.svg/1200px-Democracy_Now%21_logo.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/0/01/Democracy_Now%21_logo.svg/220px-Democracy_Now%21_logo.svg.png'
      },
      {
        'name': 'Dotdash',
        'link': 'https://en.wikipedia.org/wiki/Dotdash',
        'status': '⚠ No Consensus',
        'title': 'Dotdash - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/6/64/Dotdash_logo.png/250px-Dotdash_logo.png'
      },
      {
        'name': 'Encyclopædia Britannica',
        'link': 'https://en.wikipedia.org/wiki/Encyclop%C3%A6dia_Britannica',
        'status': '⚠ No Consensus',
        'title': 'Encyclopædia Britannica - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Encyclop%C3%A6dia_Britannica.svg/1200px-Encyclop%C3%A6dia_Britannica.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/7/71/Encyclop%C3%A6dia_Britannica.svg/220px-Encyclop%C3%A6dia_Britannica.svg.png'
      },
      {
        'name': 'Entrepreneur',
        'link': 'https://en.wikipedia.org/wiki/Entrepreneur_(magazine)',
        'status': '⚠ No Consensus',
        'title': 'Entrepreneur (magazine) - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Entrepreneur_logo.png/180px-Entrepreneur_logo.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/e/e3/Entrepreneur_%28magazine%29_October_2009_cover.jpg'
      },
      {
        'name': 'Evening Standard',
        'link': 'https://en.wikipedia.org/wiki/Evening_Standard',
        'status': '⚠ No Consensus',
        'title': 'Evening Standard - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/3/32/Evening_Standard_logo.png/250px-Evening_Standard_logo.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/2/2d/Evening-Standard-19-March-2020.jpg'
      },
      {
        'name': 'Fairness and Accuracy in Reporting',
        'link': 'https://en.wikipedia.org/wiki/Fairness_%26_Accuracy_in_Reporting',
        'status': '⚠ No Consensus',
        'title': 'Fairness &amp; Accuracy in Reporting - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/7/7d/Fairness_and_Accuracy_in_Reporting_logo.jpg',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/7/7d/Fairness_and_Accuracy_in_Reporting_logo.jpg/220px-Fairness_and_Accuracy_in_Reporting_logo.jpg'
      },
      {
        'name': 'Fox News',
        'link': 'https://en.wikipedia.org/wiki/Fox_News',
        'status': '⚠ No Consensus',
        'title': 'Fox News - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/1200px-Fox_News_Channel_logo.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/150px-Fox_News_Channel_logo.svg.png'
      },
      {
        'name': 'Genius',
        'link': 'https://en.wikipedia.org/wiki/Genius_(website)',
        'status': '⚠ No Consensus',
        'title': 'Genius (website) - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Genius_website_logo.svg/220px-Genius_website_logo.svg.png'
      },
      {
        'name': 'Google Maps',
        'link': 'https://en.wikipedia.org/wiki/Google_Maps',
        'status': '⚠ No Consensus',
        'title': 'Google Maps - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Google_Maps_Logo.svg/220px-Google_Maps_Logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/5/56/Google_maps_screenshot.png'
      },
      {
        'name': 'The Green Papers',
        'link': 'https://en.wikipedia.org/wiki/The_Green_Papers',
        'status': '⚠ No Consensus',
        'title': 'The Green Papers - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/b/b6/The_Green_Papers_logo.gif/220px-The_Green_Papers_logo.gif'
      },
      {
        'name': 'The Guardian',
        'link': 'https://en.wikipedia.org/wiki/The_Guardian',
        'status': '⚠ No Consensus',
        'title': 'The Guardian - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/7/75/The_Guardian_2018.svg',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/7/75/The_Guardian_2018.svg/153px-The_Guardian_2018.svg.png'
      },
      {
        'name': 'Guinness World Records',
        'link': 'https://en.wikipedia.org/wiki/Guinness_World_Records',
        'status': '⚠ No Consensus',
        'title': 'Guinness World Records - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Guinness_World_Records_logo.svg/1200px-Guinness_World_Records_logo.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/f/f4/Guinness_World_Records_logo.svg/220px-Guinness_World_Records_logo.svg.png'
      },
      {
        'name': 'Hansard',
        'link': 'https://en.wikipedia.org/wiki/Hansard',
        'status': '⚠ No Consensus',
        'title': 'Hansard - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/5/5f/Hansard-1832.jpg'
      },
      {
        'name': 'Heavy.com',
        'link': 'https://en.wikipedia.org/wiki/Heavy.com',
        'status': '⚠ No Consensus',
        'title': 'Heavy (website) - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Heavy.com_Logo_2017.svg/1200px-Heavy.com_Logo_2017.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/6/64/Heavy.com_Logo_2017.svg/220px-Heavy.com_Logo_2017.svg.png'
      },
      {
        'name': 'Hope not Hate',
        'link': 'https://en.wikipedia.org/wiki/Hope_not_Hate',
        'status': '⚠ No Consensus',
        'title': 'Hope not Hate - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Hope_not_hate.svg/1200px-Hope_not_hate.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/2/25/Hope_not_hate.svg/150px-Hope_not_hate.svg.png'
      },
      {
        'name': 'HuffPost',
        'link': 'https://en.wikipedia.org/wiki/HuffPost',
        'status': '⚠ No Consensus',
        'title': 'HuffPost - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/5/5a/HuffPost.svg/220px-HuffPost.svg.png'
      },
      {
        'name': 'Human Events',
        'link': 'https://en.wikipedia.org/wiki/Human_Events',
        'status': '⚠ No Consensus',
        'title': 'Human Events - Wikipedia',
        'image': 'https://hashiloach.org.il/wp-content/uploads/2020/12/wsi-imageoptim-human-events-4.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/7/7f/Human_Events_cover.png/220px-Human_Events_cover.png'
      },
      {
        'name': 'Independent Journal Review',
        'link': 'https://en.wikipedia.org/wiki/Independent_Journal_Review',
        'status': '⚠ No Consensus',
        'title': 'Independent Journal Review - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Independent_Journal_Review.svg/220px-Independent_Journal_Review.svg.png'
      },
      {
        'name': 'Investopedia',
        'link': 'https://en.wikipedia.org/wiki/Investopedia',
        'status': '⚠ No Consensus',
        'title': 'Investopedia - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/3/37/Investopedia_Logo.svg/250px-Investopedia_Logo.svg.png'
      },
      {
        'name': 'Jezebel',
        'link': 'https://en.wikipedia.org/wiki/Jezebel_(website)',
        'status': '⚠ No Consensus',
        'title': 'Jezebel (website) - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/1/19/Jezebel.svg/200px-Jezebel.svg.png'
      },
      {
        'name': 'Mashable',
        'link': 'https://en.wikipedia.org/wiki/Mashable',
        'status': '⚠ No Consensus',
        'title': 'Mashable - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Mashable_Logo_%282021%29.svg/220px-Mashable_Logo_%282021%29.svg.png'
      },
      {
        'name': 'MDPI',
        'link': 'https://en.wikipedia.org/wiki/MDPI',
        'status': '⚠ No Consensus',
        'title': 'MDPI - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/9/9f/MDPI-logo.png/100px-MDPI-logo.png'
      },
      {
        'name': 'Media Matters for America',
        'link': 'https://en.wikipedia.org/wiki/Media_Matters_for_America',
        'status': '⚠ No Consensus',
        'title': 'Media Matters for America - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Media-matters.jpg/640px-Media-matters.jpg',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/b/be/Mediamatters.png/220px-Mediamatters.png'
      },
      {
        'name': 'Mediaite',
        'link': 'https://en.wikipedia.org/wiki/Mediaite',
        'status': '⚠ No Consensus',
        'title': 'Mediaite - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Mediaite_Logo_2019.svg/220px-Mediaite_Logo_2019.svg.png'
      },
      {
        'name': 'MetalSucks',
        'link': 'https://en.wikipedia.org/wiki/MetalSucks',
        'status': '⚠ No Consensus',
        'title': 'MetalSucks - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Metal-Sucks-logo.png/220px-Metal-Sucks-logo.png'
      },
      {
        'name': 'Middle East Media Research Institute',
        'link': 'https://en.wikipedia.org/wiki/Middle_East_Media_Research_Institute',
        'status': '⚠ No Consensus',
        'title': 'Middle East Media Research Institute - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/f/f3/Memrilogo.jpg/250px-Memrilogo.jpg'
      },
      {
        'name': 'Mondoweiss',
        'link': 'https://en.wikipedia.org/wiki/Mondoweiss',
        'status': '⚠ No Consensus',
        'title': 'Mondoweiss - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mondoweiss-wordmark-tagline-black-outlines.svg/220px-Mondoweiss-wordmark-tagline-black-outlines.svg.png'
      },
      {
        'name': 'Morning Star (UK)',
        'link': 'https://en.wikipedia.org/wiki/Morning_Star_(British_newspaper)',
        'status': '⚠ No Consensus',
        'title': 'Morning Star (British newspaper) - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Morning_star_logo_2018.svg/640px-Morning_star_logo_2018.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/3/39/MorningStarFrontPage200627%28280x357%3D99960px%29.png/220px-MorningStarFrontPage200627%28280x357%3D99960px%29.png'
      },
      {
        'name': 'National Review',
        'link': 'https://en.wikipedia.org/wiki/National_Review',
        'status': '⚠ No Consensus',
        'title': 'National Review - Wikipedia',
        'image': 'https://images.squarespace-cdn.com/content/v1/5515d9f9e4b04d5c3198b7bb/1429290429463-DRYF7CM4R0YAUBBWHICN/image-asset.jpeg?format=500w',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/a/af/Natreview.jpg/220px-Natreview.jpg'
      },
      {
        'name': 'The Needle Drop',
        'link': 'https://en.wikipedia.org/wiki/The_Needle_Drop',
        'status': '⚠ No Consensus',
        'title': 'Anthony Fantano - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/The_Needle_Drop_logo.png/640px-The_Needle_Drop_logo.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/7/79/AnthonyFantano2016.png/220px-AnthonyFantano2016.png'
      },
      {
        'name': 'The Next Web',
        'link': 'https://en.wikipedia.org/wiki/The_Next_Web',
        'status': '⚠ No Consensus',
        'title': 'TNW (website) - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/2/2f/The_Next_Web_Logo.svg/220px-The_Next_Web_Logo.svg.png'
      },
      {
        'name': 'Pride.com',
        'link': 'https://en.wikipedia.org/wiki/Pride.com',
        'status': '⚠ No Consensus',
        'title': 'Here Media - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/b/ba/Here_Media.png/220px-Here_Media.png'
      },
      {
        'name': 'Quackwatch',
        'link': 'https://en.wikipedia.org/wiki/Quackwatch',
        'status': '⚠ No Consensus',
        'title': 'Quackwatch - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/2/2a/QuackWatch_logo.png/100px-QuackWatch_logo.png'
      },
      {
        'name': 'RealClearPolitics',
        'link': 'https://en.wikipedia.org/wiki/RealClearPolitics',
        'status': '⚠ No Consensus',
        'title': 'RealClearPolitics - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/8/8e/RCPlogoNew.png/220px-RCPlogoNew.png'
      },
      {
        'name': 'RhythmOne',
        'link': 'https://en.wikipedia.org/wiki/RhythmOne',
        'status': '⚠ No Consensus',
        'title': 'RhythmOne - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/2/28/RhythmOne_logo.svg/220px-RhythmOne_logo.svg.png'
      },
      {
        'name': 'RIA Novosti',
        'link': 'https://en.wikipedia.org/wiki/RIA_Novosti',
        'status': '⚠ No Consensus',
        'title': 'RIA Novosti - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/4/4b/RIA_Novosti.svg/220px-RIA_Novosti.svg.png'
      },
      {
        'name': 'Salon',
        'link': 'https://en.wikipedia.org/wiki/Salon_(website)',
        'status': '⚠ No Consensus',
        'title': 'Salon.com - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/1/18/Salon_Logo_2019.svg/220px-Salon_Logo_2019.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/2/27/Salon_screenshot_-_May_18%2C_2012.png'
      },
      {
        'name': 'ScienceBlogs',
        'link': 'https://en.wikipedia.org/wiki/ScienceBlogs',
        'status': '⚠ No Consensus',
        'title': 'ScienceBlogs - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Science_Blogs_logo.JPG/220px-Science_Blogs_logo.JPG'
      },
      {
        'name': 'Screen Rant',
        'link': 'https://en.wikipedia.org/wiki/Screen_Rant',
        'status': '⚠ No Consensus',
        'title': 'Screen Rant - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Screen_Rant_black_text_logo.svg/220px-Screen_Rant_black_text_logo.svg.png'
      },
      {
        'name': 'Sherdog',
        'link': 'https://en.wikipedia.org/wiki/Sherdog',
        'status': '⚠ No Consensus',
        'title': 'Sherdog - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/a/ac/Logo_sherdog.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/a/ac/Logo_sherdog.png'
      },
      {
        'name': 'Sixth Tone',
        'link': 'https://en.wikipedia.org/wiki/Sixth_Tone',
        'status': '⚠ No Consensus',
        'title': 'Sixth Tone - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Sixth_Tone_logo.png/180px-Sixth_Tone_logo.png'
      },
      {
        'name': 'The Skeptic\'s Dictionary',
        'link': 'https://en.wikipedia.org/wiki/The_Skeptic%27s_Dictionary',
        'status': '⚠ No Consensus',
        'title': 'The Skeptic&#039;s Dictionary - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/4/4a/Skeptic%27s_Dictionary.jpg',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/4/4a/Skeptic%27s_Dictionary.jpg/220px-Skeptic%27s_Dictionary.jpg'
      },
      {
        'name': 'SparkNotes',
        'link': 'https://en.wikipedia.org/wiki/SparkNotes',
        'status': '⚠ No Consensus',
        'title': 'SparkNotes - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/6/64/SparkNotes_logo.svg/220px-SparkNotes_logo.svg.png'
      },
      {
        'name': 'The Spectator',
        'link': 'https://en.wikipedia.org/wiki/The_Spectator',
        'status': '⚠ No Consensus',
        'title': 'The Spectator - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/c/c7/The_Spectator_logo.svg/180px-The_Spectator_logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/1/15/The_Spectator_October_2016_cover.jpg'
      },
      {
        'name': 'The Straits Times',
        'link': 'https://en.wikipedia.org/wiki/The_Straits_Times',
        'status': '⚠ No Consensus',
        'title': 'The Straits Times - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/8/83/The_Straits_Times_Logo.svg/250px-The_Straits_Times_Logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/a/a8/The_Straits_Times_%28December_13%2C_2019%29.jpg'
      },
      {
        'name': 'TASS',
        'link': 'https://en.wikipedia.org/wiki/TASS',
        'status': '⚠ No Consensus',
        'title': 'TASS - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/TASS_Logo_%28Cyrillic%29_2017.svg/1200px-TASS_Logo_%28Cyrillic%29_2017.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/7/70/TASS_Logo_%28Cyrillic%29_2017.svg/150px-TASS_Logo_%28Cyrillic%29_2017.svg.png'
      },
      {
        'name': 'TechCrunch',
        'link': 'https://en.wikipedia.org/wiki/TechCrunch',
        'status': '⚠ No Consensus',
        'title': 'TechCrunch - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/TechCrunch_logo.svg/1200px-TechCrunch_logo.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/b/b9/TechCrunch_logo.svg/200px-TechCrunch_logo.svg.png'
      },
      {
        'name': 'ThinkProgress',
        'link': 'https://en.wikipedia.org/wiki/ThinkProgress',
        'status': '⚠ No Consensus',
        'title': 'ThinkProgress - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/f/f3/ThinkProgress_logo.svg/250px-ThinkProgress_logo.svg.png'
      },
      {
        'name': 'The Times of India',
        'link': 'https://en.wikipedia.org/wiki/The_Times_of_India',
        'status': '⚠ No Consensus',
        'title': 'The Times of India - Wikipedia',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/8/80/The_Times_of_India_cover_03-22-10.jpg',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_times_of_india.svg/250px-The_times_of_india.svg.png'
      },
      {
        'name': 'TMZ',
        'link': 'https://en.wikipedia.org/wiki/TMZ',
        'status': '⚠ No Consensus',
        'title': 'TMZ - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/TMZLogo.svg/1200px-TMZLogo.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/5/54/TMZLogo.svg/200px-TMZLogo.svg.png'
      },
      {
        'name': 'Townhall',
        'link': 'https://en.wikipedia.org/wiki/Townhall',
        'status': '⚠ No Consensus',
        'title': 'Townhall - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Th_logo.svg/220px-Th_logo.svg.png'
      },
      {
        'name': 'TRT World',
        'link': 'https://en.wikipedia.org/wiki/TRT_World',
        'status': '⚠ No Consensus',
        'title': 'TRT World - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/2/27/TRT_World.svg/250px-TRT_World.svg.png'
      },
      {
        'name': 'Us Weekly',
        'link': 'https://en.wikipedia.org/wiki/Us_Weekly',
        'status': '⚠ No Consensus',
        'title': 'Us Weekly - Wikipedia',
        'image': 'https://seeklogo.com/images/U/us-weekly-logo-51928092A2-seeklogo.com.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/0/04/Us_Jen_John_In_Love_Cover.jpeg/220px-Us_Jen_John_In_Love_Cover.jpeg'
      },
      {
        'name': 'Vice Media',
        'link': 'https://en.wikipedia.org/wiki/Vice_Media',
        'status': '⚠ No Consensus',
        'title': 'Vice Media - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/c/c0/Vice_logo.svg/220px-Vice_logo.svg.png'
      },
      {
        'name': 'Washington Examiner',
        'link': 'https://en.wikipedia.org/wiki/Washington_Examiner',
        'status': '⚠ No Consensus',
        'title': 'Washington Examiner - Wikipedia',
        'image': 'https://mediadc.brightspotcdn.com/0f/83/c7eaa5f04ff3a4acd37a7949a7e0/wex-logo-new-450.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/a/ae/Cover_image_of_Washington_Examiner_magazine_for_July_29_2013.jpg/240px-Cover_image_of_Washington_Examiner_magazine_for_July_29_2013.jpg'
      },
      {
        'name': 'The Washington Times',
        'link': 'https://en.wikipedia.org/wiki/The_Washington_Times',
        'status': '⚠ No Consensus',
        'title': 'The Washington Times - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/The_Washington_Times_%282019-10-31%29.svg/640px-The_Washington_Times_%282019-10-31%29.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/6/68/The_Washington_Times_%282019-10-31%29.svg/250px-The_Washington_Times_%282019-10-31%29.svg.png'
      },
      {
        'name': 'Who\'s Who (UK)',
        'link': 'https://en.wikipedia.org/wiki/Who%27s_Who_(UK)',
        'status': '⚠ No Consensus',
        'title': 'Who&#039;s Who (UK) - Wikipedia',
        'image': 'https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2011/5/20/1305895378960/Whos-Who-2011-book-cover-007.jpg',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/d/d9/Who%27s_Who_%28UK%29.jpg/220px-Who%27s_Who_%28UK%29.jpg'
      },
      {
        'name': 'Wikidata',
        'link': 'https://en.wikipedia.org/wiki/Wikidata',
        'status': '⚠ No Consensus',
        'title': 'Wikidata - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Wikidata-logo-en.svg/1200px-Wikidata-logo-en.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/6/66/Wikidata-logo-en.svg/220px-Wikidata-logo-en.svg.png'
      },
      {
        'name': 'World Socialist Web Site',
        'link': 'https://en.wikipedia.org/wiki/World_Socialist_Web_Site',
        'status': '⚠ No Consensus',
        'title': 'World Socialist Web Site - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/7/78/World_Socialist_Web_Site_logo.svg/220px-World_Socialist_Web_Site_logo.svg.png'
      },
      {
        'name': 'XBIZ',
        'link': 'https://en.wikipedia.org/wiki/XBIZ',
        'status': '⚠ No Consensus',
        'title': 'XBIZ - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/2/29/Xbiz_logo_TN.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/2/29/Xbiz_logo_TN.png'
      },
      {
        'name': 'Xinhua News Agency',
        'link': 'https://en.wikipedia.org/wiki/Xinhua_News_Agency',
        'status': '⚠ No Consensus',
        'title': 'Xinhua News Agency - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/5/59/Xinhua_Logo.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/5/59/Xinhua_Logo.png/300px-Xinhua_Logo.png'
      }
    ],
    [
      {
        'name': '112 Ukraine',
        'link': 'https://en.wikipedia.org/wiki/112_Ukraine',
        'status': '🚫 Generally Unreliable',
        'title': '112 Ukraine - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Logo_112_Ukraine.svg/1200px-Logo_112_Ukraine.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/1/16/Logo_112_Ukraine.svg/200px-Logo_112_Ukraine.svg.png'
      },
      {
        'name': 'Ad Fontes Media',
        'link': 'https://en.wikipedia.org/wiki/Ad_Fontes_Media',
        'status': '🚫 Generally Unreliable',
        'title': 'Ad Fontes Media - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/1/10/Ad_Fontes_Media_logo.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/1/10/Ad_Fontes_Media_logo.png'
      },
      {
        'name': 'AlterNet',
        'link': 'https://en.wikipedia.org/wiki/AlterNet',
        'status': '🚫 Generally Unreliable',
        'title': 'AlterNet - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/1/16/AlterNet-logo.png/220px-AlterNet-logo.png'
      },
      {
        'name': 'Amazon',
        'link': 'https://en.wikipedia.org/wiki/Amazon_(company)',
        'status': '🚫 Generally Unreliable',
        'title': 'Amazon (company) - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Amazon_Spheres_05.jpg/1200px-Amazon_Spheres_05.jpg'
      },
      {
        'name': 'An Phoblacht',
        'link': 'https://en.wikipedia.org/wiki/An_Phoblacht',
        'status': '🚫 Generally Unreliable',
        'title': 'An Phoblacht - Wikipedia',
        'image': 'https://www.anphoblacht.com/assets/images/anphoblacht.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/5/59/An_Phoblacht_June_2014_post-election.jpg/250px-An_Phoblacht_June_2014_post-election.jpg'
      },
      {
        'name': 'Anadolu Agency',
        'link': 'https://en.wikipedia.org/wiki/Anadolu_Agency',
        'status': '🚫 Generally Unreliable',
        'title': 'Anadolu Agency - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/7/79/Anadolu_Agency_Logo.jpg',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/7/79/Anadolu_Agency_Logo.jpg/220px-Anadolu_Agency_Logo.jpg'
      },
      {
        'name': 'Ancestry.com',
        'link': 'https://en.wikipedia.org/wiki/Ancestry.com',
        'status': '🚫 Generally Unreliable',
        'title': 'Ancestry.com - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/b/b0/Ancestry_logo_2016.svg/220px-Ancestry_logo_2016.svg.png'
      },
      {
        'name': 'Answers.com',
        'link': 'https://en.wikipedia.org/wiki/Answers.com',
        'status': '🚫 Generally Unreliable',
        'title': 'Answers.com - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/2/22/Answers.com_Logo.png/200px-Answers.com_Logo.png'
      },
      {
        'name': 'arXiv',
        'link': 'https://en.wikipedia.org/wiki/ArXiv',
        'status': '🚫 Generally Unreliable',
        'title': 'arXiv - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/ArXiv_web.svg/640px-ArXiv_web.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/a/a8/ArXiv_web.svg/80px-ArXiv_web.svg.png'
      },
      {
        'name': 'Bild',
        'link': 'https://en.wikipedia.org/wiki/Bild',
        'status': '🚫 Generally Unreliable',
        'title': 'Bild - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Logo_BILD.svg/1200px-Logo_BILD.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Logo_BILD.svg/47px-Logo_BILD.svg.png'
      },
      {
        'name': 'Blaze Media',
        'link': 'https://en.wikipedia.org/wiki/Blaze_Media',
        'status': '🚫 Generally Unreliable',
        'title': 'Blaze Media - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/3/36/BlazeTVLive.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/c/c2/Blaze_Media.png/220px-Blaze_Media.png'
      },
      {
        'name': 'Blogger',
        'link': 'https://en.wikipedia.org/wiki/Blogger_(service)',
        'status': '🚫 Generally Unreliable',
        'title': 'Blogger (service) - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Blogger_icon_2017.svg/90px-Blogger_icon_2017.svg.png'
      },
      {
        'name': 'The Canary',
        'link': 'https://en.wikipedia.org/wiki/The_Canary_(website)',
        'status': '🚫 Generally Unreliable',
        'title': 'The Canary (website) - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/b/b1/The_Canary_logo.png/220px-The_Canary_logo.png'
      },
      {
        'name': 'CESNUR',
        'link': 'https://en.wikipedia.org/wiki/CESNUR',
        'status': '🚫 Generally Unreliable',
        'title': 'CESNUR - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/a/a0/Logo_of_CESNUR.gif/300px-Logo_of_CESNUR.gif'
      },
      {
        'name': 'CoinDesk',
        'link': 'https://en.wikipedia.org/wiki/CoinDesk',
        'status': '🚫 Generally Unreliable',
        'title': 'CoinDesk - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/9/9b/Coindesk-logo.png/220px-Coindesk-logo.png'
      },
      {
        'name': 'CounterPunch',
        'link': 'https://en.wikipedia.org/wiki/CounterPunch',
        'status': '🚫 Generally Unreliable',
        'title': 'CounterPunch - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/f/f3/CounterPunch_logo.png/220px-CounterPunch_logo.png'
      },
      {
        'name': 'Cracked.com',
        'link': 'https://en.wikipedia.org/wiki/Cracked.com',
        'status': '🚫 Generally Unreliable',
        'title': 'Cracked.com - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/4/44/Cracked.com_logo.svg/200px-Cracked.com_logo.svg.png'
      },
      {
        'name': 'Daily Express',
        'link': 'https://en.wikipedia.org/wiki/Daily_Express',
        'status': '🚫 Generally Unreliable',
        'title': 'Daily Express - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/de/thumb/3/35/Daily_Express_Logo2.svg/640px-Daily_Express_Logo2.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/f/f5/Daily_Express_2009-01-10.jpg/220px-Daily_Express_2009-01-10.jpg'
      },
      {
        'name': 'Daily Kos',
        'link': 'https://en.wikipedia.org/wiki/Daily_Kos',
        'status': '🚫 Generally Unreliable',
        'title': 'Daily Kos - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/0/04/Daily_Kos_new_logo.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/0/04/Daily_Kos_new_logo.png/220px-Daily_Kos_new_logo.png'
      },
      {
        'name': 'Daily Sabah',
        'link': 'https://en.wikipedia.org/wiki/Daily_Sabah',
        'status': '🚫 Generally Unreliable',
        'title': 'Daily Sabah - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Daily_Sabah_logo.svg/250px-Daily_Sabah_logo.svg.png'
      },
      {
        'name': 'The Daily Wire',
        'link': 'https://en.wikipedia.org/wiki/The_Daily_Wire',
        'status': '🚫 Generally Unreliable',
        'title': 'The Daily Wire - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dailywirelogo.svg/220px-Dailywirelogo.svg.png'
      },
      {
        'name': 'Discogs',
        'link': 'https://en.wikipedia.org/wiki/Discogs',
        'status': '🚫 Generally Unreliable',
        'title': 'Discogs - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Discogs_logo.svg/1200px-Discogs_logo.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/e/e8/Discogs_logo.svg/220px-Discogs_logo.svg.png'
      },
      {
        'name': 'The Electronic Intifada',
        'link': 'https://en.wikipedia.org/wiki/The_Electronic_Intifada',
        'status': '🚫 Generally Unreliable',
        'title': 'The Electronic Intifada - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/8/83/The_Electronic_Intifada_logo.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/8/83/The_Electronic_Intifada_logo.png/220px-The_Electronic_Intifada_logo.png'
      },
      {
        'name': 'Encyclopaedia Metallum',
        'link': 'https://en.wikipedia.org/wiki/Encyclopaedia_Metallum',
        'status': '🚫 Generally Unreliable',
        'title': 'Encyclopaedia Metallum - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Metal-archives.jpg/300px-Metal-archives.jpg'
      },
      {
        'name': 'Facebook',
        'link': 'https://en.wikipedia.org/wiki/Facebook',
        'status': '🚫 Generally Unreliable',
        'title': 'Facebook - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/150px-2021_Facebook_icon.svg.png'
      },
      {
        'name': 'FamilySearch',
        'link': 'https://en.wikipedia.org/wiki/FamilySearch',
        'status': '🚫 Generally Unreliable',
        'title': 'FamilySearch - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/c/c3/FamilySearch_2013_logo.svg/250px-FamilySearch_2013_logo.svg.png'
      },
      {
        'name': 'Fandom',
        'link': 'https://en.wikipedia.org/wiki/Fandom_(website)',
        'status': '🚫 Generally Unreliable',
        'title': 'Fandom (website) - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Fandom.svg/220px-Fandom.svg.png'
      },
      {
        'name': 'The Federalist',
        'link': 'https://en.wikipedia.org/wiki/The_Federalist_(website)',
        'status': '🚫 Generally Unreliable',
        'title': 'The Federalist (website) - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/f/ff/The_Federalist_logo.png/220px-The_Federalist_logo.png'
      },
      {
        'name': 'Find a Grave',
        'link': 'https://en.wikipedia.org/wiki/Find_a_Grave',
        'status': '🚫 Generally Unreliable',
        'title': 'Find a Grave - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/d/de/Find_a_Grave_logo.svg/220px-Find_a_Grave_logo.svg.png'
      },
      {
        'name': 'Findmypast',
        'link': 'https://en.wikipedia.org/wiki/Findmypast',
        'status': '🚫 Generally Unreliable',
        'title': 'Findmypast - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Findmypast-logo-coral.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Findmypast-logo-coral.png/220px-Findmypast-logo-coral.png'
      },
      {
        'name': 'Flickr',
        'link': 'https://en.wikipedia.org/wiki/Flickr',
        'status': '🚫 Generally Unreliable',
        'title': 'Flickr - Wikipedia',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/9/97/Flickr_screenshot.png',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/5/52/Flickr_wordmark.svg/220px-Flickr_wordmark.svg.png'
      },
      {
        'name': 'Forbes.com',
        'link': 'https://en.wikipedia.org/wiki/Forbes.com',
        'status': '🚫 Generally Unreliable',
        'title': 'Forbes - Wikipedia',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/d/d2/Forbes_%28magazine%29_cover.jpg',
        'image': 'https://logos-download.com/wp-content/uploads/2016/05/Forbes_logo_black.png'
      },
      {
        'name': 'Fox News',
        'link': 'https://en.wikipedia.org/wiki/Fox_News',
        'status': '🚫 Generally Unreliable',
        'title': 'Fox News - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/1200px-Fox_News_Channel_logo.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/150px-Fox_News_Channel_logo.svg.png'
      },
      {
        'name': 'Gawker',
        'link': 'https://en.wikipedia.org/wiki/Gawker',
        'status': '🚫 Generally Unreliable',
        'title': 'Gawker - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Gawker_new_logo.svg/220px-Gawker_new_logo.svg.png'
      },
      {
        'name': 'Geni.com',
        'link': 'https://en.wikipedia.org/wiki/Geni.com',
        'status': '🚫 Generally Unreliable',
        'title': 'Geni.com - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Geni_Logo.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Geni_Logo.png/220px-Geni_Logo.png'
      },
      {
        'name': 'Geographic Names Information System',
        'link': 'https://en.wikipedia.org/wiki/Geographic_Names_Information_System',
        'status': '🚫 Generally Unreliable',
        'title': 'Geographic Names Information System - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/USGS_logo_green.svg/1200px-USGS_logo_green.svg.png'
      },
      {
        'name': 'Goodreads',
        'link': 'https://en.wikipedia.org/wiki/Goodreads',
        'status': '🚫 Generally Unreliable',
        'title': 'Goodreads - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Goodreads_logo.svg/150px-Goodreads_logo.svg.png'
      },
      {
        'name': 'Guido Fawkes',
        'link': 'https://en.wikipedia.org/wiki/Guido_Fawkes_(website)',
        'status': '🚫 Generally Unreliable',
        'title': 'Guido Fawkes (website) - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/e/e5/Gudio_Fawkes.jpg',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/e/e5/Gudio_Fawkes.jpg/220px-Gudio_Fawkes.jpg'
      },
      {
        'name': 'Heat Street',
        'link': 'https://en.wikipedia.org/wiki/Heat_Street',
        'status': '🚫 Generally Unreliable',
        'title': 'Heat Street - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Htst.jpg',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Htst.jpg/236px-Htst.jpg'
      },
      {
        'name': 'History',
        'link': 'https://en.wikipedia.org/wiki/History_(American_TV_network)',
        'status': '🚫 Generally Unreliable',
        'title': 'History (American TV network) - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/History_%282021%29.svg/1200px-History_%282021%29.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/0/01/History_%282021%29.svg/150px-History_%282021%29.svg.png'
      },
      {
        'name': 'HuffPost',
        'link': 'https://en.wikipedia.org/wiki/HuffPost',
        'status': '🚫 Generally Unreliable',
        'title': 'HuffPost - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/5/5a/HuffPost.svg/220px-HuffPost.svg.png'
      },
      {
        'name': 'IMDb',
        'link': 'https://en.wikipedia.org/wiki/IMDb',
        'status': '🚫 Generally Unreliable',
        'title': 'IMDb - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/220px-IMDB_Logo_2016.svg.png'
      },
      {
        'name': 'Independent Media Center',
        'link': 'https://en.wikipedia.org/wiki/Independent_Media_Center',
        'status': '🚫 Generally Unreliable',
        'title': 'Independent Media Center - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/4/41/Imclogo2.gif',
        'image2': '//upload.wikimedia.org/wikipedia/commons/4/41/Imclogo2.gif'
      },
      {
        'name': 'Inquisitr',
        'link': 'https://en.wikipedia.org/wiki/Inquisitr',
        'status': '🚫 Generally Unreliable',
        'title': 'Inquisitr - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/1/19/The_Inquisitr_Logo.png/220px-The_Inquisitr_Logo.png'
      },
      {
        'name': 'International Business Times',
        'link': 'https://en.wikipedia.org/wiki/International_Business_Times',
        'status': '🚫 Generally Unreliable',
        'title': 'International Business Times - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Logo_Intl_Business_Times.png/225px-Logo_Intl_Business_Times.png'
      },
      {
        'name': 'Jewish Virtual Library',
        'link': 'https://en.wikipedia.org/wiki/Jewish_Virtual_Library',
        'status': '🚫 Generally Unreliable',
        'title': 'Jewish Virtual Library - Wikipedia',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/4/4f/Jewish_Virtual_Library_website_screenshot.png',
        'image': '//upload.wikimedia.org/wikipedia/en/thumb/0/0a/Jewish_Virtual_Library.gif/220px-Jewish_Virtual_Library.gif'
      },
      {
        'name': 'Know Your Meme',
        'link': 'https://en.wikipedia.org/wiki/Know_Your_Meme',
        'status': '🚫 Generally Unreliable',
        'title': 'Know Your Meme - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/e/e2/KnowYourMeme.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/e/e2/KnowYourMeme.png/180px-KnowYourMeme.png'
      },
      {
        'name': 'LinkedIn',
        'link': 'https://en.wikipedia.org/wiki/LinkedIn',
        'status': '🚫 Generally Unreliable',
        'title': 'LinkedIn - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/200px-LinkedIn_Logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/9/91/LinkedIn_homepage.png'
      },
      {
        'name': 'LiveJournal',
        'link': 'https://en.wikipedia.org/wiki/LiveJournal',
        'status': '🚫 Generally Unreliable',
        'title': 'LiveJournal - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/LiveJournal_icon.svg/1200px-LiveJournal_icon.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/b/b3/LiveJournal_icon.svg/200px-LiveJournal_icon.svg.png'
      },
      {
        'name': 'Marquis Who\'s Who',
        'link': 'https://en.wikipedia.org/wiki/Marquis_Who%27s_Who',
        'status': '🚫 Generally Unreliable',
        'title': 'Marquis Who&#039;s Who - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/e/ec/Marquis_logo.png'
      },
      {
        'name': 'Mashable',
        'link': 'https://en.wikipedia.org/wiki/Mashable',
        'status': '🚫 Generally Unreliable',
        'title': 'Mashable - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Mashable_Logo_%282021%29.svg/220px-Mashable_Logo_%282021%29.svg.png'
      },
      {
        'name': 'Media Bias/Fact Check',
        'link': 'https://en.wikipedia.org/wiki/Media_Bias/Fact_Check',
        'status': '🚫 Generally Unreliable',
        'title': 'Media Bias/Fact Check - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Media_Bias_Fact_Check_wordmark.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Media_Bias_Fact_Check_wordmark.png/220px-Media_Bias_Fact_Check_wordmark.png'
      },
      {
        'name': 'Media Research Center',
        'link': 'https://en.wikipedia.org/wiki/Media_Research_Center',
        'status': '🚫 Generally Unreliable',
        'title': 'Media Research Center - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/3/38/MRC_Official_Logo.png/300px-MRC_Official_Logo.png'
      },
      {
        'name': 'Medium',
        'link': 'https://en.wikipedia.org/wiki/Medium_(website)',
        'status': '🚫 Generally Unreliable',
        'title': 'Medium (website) - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Medium_%28website%29_logo.svg/250px-Medium_%28website%29_logo.svg.png'
      },
      {
        'name': 'Metro (UK)',
        'link': 'https://en.wikipedia.org/wiki/Metro_(British_newspaper)',
        'status': '🚫 Generally Unreliable',
        'title': 'Metro (British newspaper) - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/en/thumb/1/19/Metro_%28newspaper%29_logo.svg/173px-Metro_%28newspaper%29_logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/7/77/Metro_front_page1.jpg'
      },
      {
        'name': 'The New American',
        'link': 'https://en.wikipedia.org/wiki/The_New_American',
        'status': '🚫 Generally Unreliable',
        'title': 'The New American - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/8/8c/New-American-Review-Logo_%281%29.png/250px-New-American-Review-Logo_%281%29.png'
      },
      {
        'name': 'New York Post',
        'link': 'https://en.wikipedia.org/wiki/New_York_Post',
        'status': '🚫 Generally Unreliable',
        'title': 'New York Post - Wikipedia',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/8/8e/New_York_Post_font_page_111307.jpg',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/2/26/New_York_Post.svg/250px-New_York_Post.svg.png'
      },
      {
        'name': 'The Onion',
        'link': 'https://en.wikipedia.org/wiki/The_Onion',
        'status': '🚫 Generally Unreliable',
        'title': 'The Onion - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/8/8d/The_Onion.svg/250px-The_Onion.svg.png'
      },
      {
        'name': 'PanAm Post',
        'link': 'https://en.wikipedia.org/wiki/PanAm_Post',
        'status': '🚫 Generally Unreliable',
        'title': 'PanAm Post - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/c/c2/PanAm_Post.png/220px-PanAm_Post.png'
      },
      {
        'name': 'Patheos',
        'link': 'https://en.wikipedia.org/wiki/Patheos',
        'status': '🚫 Generally Unreliable',
        'title': 'Patheos - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/7/7a/Patheos_Logo.png/220px-Patheos_Logo.png'
      },
      {
        'name': 'The Post Millennial',
        'link': 'https://en.wikipedia.org/wiki/The_Post_Millennial',
        'status': '🚫 Generally Unreliable',
        'title': 'The Post Millennial - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/3/36/The_Post_Millennial_Official_Logo.svg/220px-The_Post_Millennial_Official_Logo.svg.png'
      },
      {
        'name': 'PR Newswire',
        'link': 'https://en.wikipedia.org/wiki/PR_Newswire',
        'status': '🚫 Generally Unreliable',
        'title': 'PR Newswire - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Cision_PRN_Teal.png/1200px-Cision_PRN_Teal.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Cision_PRN_Teal.png/220px-Cision_PRN_Teal.png'
      },
      {
        'name': 'Project Veritas',
        'link': 'https://en.wikipedia.org/wiki/Project_Veritas',
        'status': '🚫 Generally Unreliable',
        'title': 'Project Veritas - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Project_Veritas_logo.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Project_Veritas_logo.png/250px-Project_Veritas_logo.png'
      },
      {
        'name': 'Quadrant',
        'link': 'https://en.wikipedia.org/wiki/Quadrant_(magazine)',
        'status': '🚫 Generally Unreliable',
        'title': 'Quadrant (magazine) - Wikipedia',
        'image': 'https://quadrant.org.au/wp-content/themes/Quadrant/images/qandrant-neg2x.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/2/2a/Quadrant_cover_Nov_2014.png/180px-Quadrant_cover_Nov_2014.png'
      },
      {
        'name': 'Quillette',
        'link': 'https://en.wikipedia.org/wiki/Quillette',
        'status': '🚫 Generally Unreliable',
        'title': 'Quillette - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Quillette.png/200px-Quillette.png'
      },
      {
        'name': 'Quora',
        'link': 'https://en.wikipedia.org/wiki/Quora',
        'status': '🚫 Generally Unreliable',
        'title': 'Quora - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/220px-Quora_logo_2015.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/2/2f/Quora_screenshot.jpg'
      },
      {
        'name': 'The Raw Story',
        'link': 'https://en.wikipedia.org/wiki/The_Raw_Story',
        'status': '🚫 Generally Unreliable',
        'title': 'The Raw Story - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Raw_Story_logo.png/220px-Raw_Story_logo.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/7/71/Raw_Story_website%2C_July_2021.png'
      },
      {
        'name': 'Reddit',
        'link': 'https://en.wikipedia.org/wiki/Reddit',
        'status': '🚫 Generally Unreliable',
        'title': 'Reddit - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/en/thumb/5/58/Reddit_logo_new.svg/220px-Reddit_logo_new.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/3/3a/Reddit_screenshot.png'
      },
      {
        'name': 'RedState',
        'link': 'https://en.wikipedia.org/wiki/RedState',
        'status': '🚫 Generally Unreliable',
        'title': 'RedState - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/a/a3/RedState_logo.svg/220px-RedState_logo.svg.png'
      },
      {
        'name': 'ResearchGate',
        'link': 'https://en.wikipedia.org/wiki/ResearchGate',
        'status': '🚫 Generally Unreliable',
        'title': 'ResearchGate - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/a/aa/ResearchGate_Logo.png/220px-ResearchGate_Logo.png'
      },
      {
        'name': 'Rolling Stone',
        'link': 'https://en.wikipedia.org/wiki/Rolling_Stone',
        'status': '🚫 Generally Unreliable',
        'title': 'Rolling Stone - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Rolling_Stone_2019.svg/640px-Rolling_Stone_2019.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/8/89/Rolling_Stone_2019.svg/180px-Rolling_Stone_2019.svg.png'
      },
      {
        'name': 'Scribd',
        'link': 'https://en.wikipedia.org/wiki/Scribd',
        'status': '🚫 Generally Unreliable',
        'title': 'Scribd - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/2/26/Scribd_logo_%28new%29.svg/220px-Scribd_logo_%28new%29.svg.png'
      },
      {
        'name': 'Scriptural texts',
        'link': 'https://en.wikipedia.org/wiki/Scriptural_texts',
        'status': '🚫 Generally Unreliable',
        'title': 'Religious text - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Codex_Vaticanus_B%2C_2Thess._3%2C11-18%2C_Hebr._1%2C1-2%2C2.jpg'
      },
      {
        'name': 'Sixth Tone',
        'link': 'https://en.wikipedia.org/wiki/Sixth_Tone',
        'status': '🚫 Generally Unreliable',
        'title': 'Sixth Tone - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Sixth_Tone_logo.png/180px-Sixth_Tone_logo.png'
      },
      {
        'name': 'The Skwawkbox',
        'link': 'https://en.wikipedia.org/wiki/The_Skwawkbox',
        'status': '🚫 Generally Unreliable',
        'title': 'The Skwawkbox - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/1/1b/The_Skwawkbox_logo.jpeg/220px-The_Skwawkbox_logo.jpeg'
      },
      {
        'name': 'SourceWatch',
        'link': 'https://en.wikipedia.org/wiki/SourceWatch',
        'status': '🚫 Generally Unreliable',
        'title': 'Center for Media and Democracy - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/ExposedbyCMD.png/1200px-ExposedbyCMD.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/4/40/ExposedbyCMD.png/250px-ExposedbyCMD.png'
      },
      {
        'name': 'Stack Exchange',
        'link': 'https://en.wikipedia.org/wiki/Stack_Exchange',
        'status': '🚫 Generally Unreliable',
        'title': 'Stack Exchange - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/7/75/Stack_Exchange_logo_and_wordmark.svg/220px-Stack_Exchange_logo_and_wordmark.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/commons/4/4c/SuperUser2.png'
      },
      {
        'name': 'The Truth About Guns',
        'link': 'https://en.wikipedia.org/wiki/The_Truth_About_Guns',
        'status': '🚫 Generally Unreliable',
        'title': 'The Truth About Guns - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/4/44/The_Truth_About_Guns_logo.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/4/44/The_Truth_About_Guns_logo.png/220px-The_Truth_About_Guns_logo.png'
      },
      {
        'name': 'TV.com',
        'link': 'https://en.wikipedia.org/wiki/TV.com',
        'status': '🚫 Generally Unreliable',
        'title': 'TV.com - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/6/6f/TV.com_logo.png/220px-TV.com_logo.png'
      },
      {
        'name': 'TV Tropes',
        'link': 'https://en.wikipedia.org/wiki/TV_Tropes',
        'status': '🚫 Generally Unreliable',
        'title': 'TV Tropes - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/en/thumb/6/60/TVtropes-new-logo.png/220px-TVtropes-new-logo.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/4/41/TV_Tropes_Screenshot.png'
      },
      {
        'name': 'Twitter',
        'link': 'https://en.wikipedia.org/wiki/Twitter',
        'status': '🚫 Generally Unreliable',
        'title': 'Twitter - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/100px-Twitter-logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/2/20/Twitter_Home_Page_%28Moments_version%2C_countries_without_dedicated_feed%29.png'
      },
      {
        'name': 'Urban Dictionary',
        'link': 'https://en.wikipedia.org/wiki/Urban_Dictionary',
        'status': '🚫 Generally Unreliable',
        'title': 'Urban Dictionary - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Urban_Dictionary_logo.svg/220px-Urban_Dictionary_logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/b/ba/Urban_Dictionary_%28screenshot_of_homepage%29.png'
      },
      {
        'name': 'Venezuelanalysis',
        'link': 'https://en.wikipedia.org/wiki/Venezuelanalysis',
        'status': '🚫 Generally Unreliable',
        'title': 'Venezuelanalysis - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Venezuelanalysis_logo.png/220px-Venezuelanalysis_logo.png'
      },
      {
        'name': 'VGChartz',
        'link': 'https://en.wikipedia.org/wiki/VGChartz',
        'status': '🚫 Generally Unreliable',
        'title': 'VGChartz - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/b/b0/Vgclogo.JPG',
        'image2': '//upload.wikimedia.org/wikipedia/en/b/b0/Vgclogo.JPG'
      },
      {
        'name': 'Victims of Communism Memorial Foundation',
        'link': 'https://en.wikipedia.org/wiki/Victims_of_Communism_Memorial_Foundation',
        'status': '🚫 Generally Unreliable',
        'title': 'Victims of Communism Memorial Foundation - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Welcome_logo_VOC_Logo_Words_Navy_copy.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Welcome_logo_VOC_Logo_Words_Navy_copy.png/250px-Welcome_logo_VOC_Logo_Words_Navy_copy.png'
      },
      {
        'name': 'The Western Journal',
        'link': 'https://en.wikipedia.org/wiki/The_Western_Journal',
        'status': '🚫 Generally Unreliable',
        'title': 'The Western Journal - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/The_Western_Journal_logo.png/1200px-The_Western_Journal_logo.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/6/63/The_Western_Journal_logo.png/121px-The_Western_Journal_logo.png'
      },
      {
        'name': 'WhatCulture',
        'link': 'https://en.wikipedia.org/wiki/WhatCulture',
        'status': '🚫 Generally Unreliable',
        'title': 'WhatCulture - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Whatculture_logo.svg/1200px-Whatculture_logo.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/2/2e/Whatculture_logo.svg/220px-Whatculture_logo.svg.png'
      },
      {
        'name': 'WhoSampled',
        'link': 'https://en.wikipedia.org/wiki/WhoSampled',
        'status': '🚫 Generally Unreliable',
        'title': 'WhoSampled - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/4/41/Whosampled_logo_small.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/4/41/Whosampled_logo_small.png'
      },
      {
        'name': 'Wikidata',
        'link': 'https://en.wikipedia.org/wiki/Wikidata',
        'status': '🚫 Generally Unreliable',
        'title': 'Wikidata - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Wikidata-logo-en.svg/1200px-Wikidata-logo-en.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/6/66/Wikidata-logo-en.svg/220px-Wikidata-logo-en.svg.png'
      },
      {
        'name': 'WikiLeaks',
        'link': 'https://en.wikipedia.org/wiki/WikiLeaks',
        'status': '🚫 Generally Unreliable',
        'title': 'WikiLeaks - Wikipedia',
        'image2': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Wikileaks_logo.svg/1200px-Wikileaks_logo.svg.png',
        'image': 'https://logos-download.com/wp-content/uploads/2016/05/Wikileaks_logo_text_wordmark-700x231.png'
      },
      {
        'name': 'Wikinews',
        'link': 'https://en.wikipedia.org/wiki/Wikinews',
        'status': '🚫 Generally Unreliable',
        'title': 'Wikinews - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/WikiNews-Logo-en.svg/1200px-WikiNews-Logo-en.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/2/2d/WikiNews-Logo-en.svg/120px-WikiNews-Logo-en.svg.png'
      },
      {
        'name': 'Wikipedia',
        'link': 'https://en.wikipedia.org/wiki/Wikipedia',
        'status': '🚫 Generally Unreliable',
        'title': 'Wikipedia - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1200px-Wikipedia-logo-v2.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/150px-Wikipedia-logo-v2.svg.png'
      },
      {
        'name': 'WordPress.com',
        'link': 'https://en.wikipedia.org/wiki/WordPress.com',
        'status': '🚫 Generally Unreliable',
        'title': 'WordPress.com - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1200px-WordPress_blue_logo.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/150px-WordPress_blue_logo.svg.png'
      },
      {
        'name': 'Worldometer',
        'link': 'https://en.wikipedia.org/wiki/Worldometer',
        'status': '🚫 Generally Unreliable',
        'title': 'Worldometer - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Worldometer_logo.jpg/100px-Worldometer_logo.jpg',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/a/a6/Worldometer_main_page.jpg'
      },
      {
        'name': 'YouTube',
        'link': 'https://en.wikipedia.org/wiki/YouTube',
        'status': '🚫 Generally Unreliable',
        'title': 'YouTube - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/250px-YouTube_Logo_2017.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/1/1c/YouTube_homepage.png'
      }
    ],
    [
      {
        'name': 'Baidu Baike',
        'link': 'https://en.wikipedia.org/wiki/Baidu_Baike',
        'status': '🛑 Deprecated',
        'title': 'Baidu Baike - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/en/thumb/1/19/Baidu_Baike_logo.svg/145px-Baidu_Baike_logo.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/d/de/BaikeBaidudotcomsite2.PNG'
      },
      {
        'name': 'China Global Television Network',
        'link': 'https://en.wikipedia.org/wiki/China_Global_Television_Network',
        'status': '🛑 Deprecated',
        'title': 'China Global Television Network - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/8/81/CGTN.svg/220px-CGTN.svg.png'
      },
      {
        'name': 'Crunchbase',
        'link': 'https://en.wikipedia.org/wiki/Crunchbase',
        'status': '🛑 Deprecated',
        'title': 'Crunchbase - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Crunchbase_wordmark_dark_blue.svg/220px-Crunchbase_wordmark_dark_blue.svg.png'
      },
      {
        'name': 'The Daily Caller',
        'link': 'https://en.wikipedia.org/wiki/The_Daily_Caller',
        'status': '🛑 Deprecated',
        'title': 'The Daily Caller - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/a/a9/The_Daily_Caller_2019_logo_black.png/250px-The_Daily_Caller_2019_logo_black.png'
      },
      {
        'name': 'Daily Mail',
        'link': 'https://en.wikipedia.org/wiki/Daily_Mail',
        'status': '🛑 Deprecated',
        'title': 'Daily Mail - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/de/thumb/4/44/Logo_Daily_Mail_1.svg/640px-Logo_Daily_Mail_1.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/d/d7/Daily_Mail_10_July_2021.png/220px-Daily_Mail_10_July_2021.png'
      },
      {
        'name': 'Daily Star (UK)',
        'link': 'https://en.wikipedia.org/wiki/Daily_Star_(United_Kingdom)',
        'status': '🛑 Deprecated',
        'title': 'Daily Star (United Kingdom) - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/9/90/Daily_Star_logo.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/9/90/Daily_Star_logo.png/150px-Daily_Star_logo.png'
      },
      {
        'name': 'The Epoch Times',
        'link': 'https://en.wikipedia.org/wiki/The_Epoch_Times',
        'status': '🛑 Deprecated',
        'title': 'The Epoch Times - Wikipedia',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/1/14/Epochtimescover.png',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/2/23/EpochTimes.svg/250px-EpochTimes.svg.png'
      },
      {
        'name': 'FrontPage Magazine',
        'link': 'https://en.wikipedia.org/wiki/FrontPage_Magazine',
        'status': '🛑 Deprecated',
        'title': 'FrontPage Magazine - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/6/68/Fpm_index_logo2.png/240px-Fpm_index_logo2.png'
      },
      {
        'name': 'The Gateway Pundit',
        'link': 'https://en.wikipedia.org/wiki/The_Gateway_Pundit',
        'status': '🛑 Deprecated',
        'title': 'The Gateway Pundit - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/a/af/The_Gateway_Pundit_logo.svg/100px-The_Gateway_Pundit_logo.svg.png'
      },
      {
        'name': 'Global Times',
        'link': 'https://en.wikipedia.org/wiki/Global_Times',
        'status': '🛑 Deprecated',
        'title': 'Global Times - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/5/55/GlobalTimesLogo.svg/250px-GlobalTimesLogo.svg.png'
      },
      {
        'name': 'The Grayzone',
        'link': 'https://en.wikipedia.org/wiki/The_Grayzone',
        'status': '🛑 Deprecated',
        'title': 'The Grayzone - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/en/a/ad/The_Grayzone_Logo.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/6/62/The_Grayzone_as_of_11_September_2021.png'
      },
      {
        'name': 'HispanTV',
        'link': 'https://en.wikipedia.org/wiki/HispanTV',
        'status': '🛑 Deprecated',
        'title': 'HispanTV - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HispanTv_logo.svg/220px-HispanTv_logo.svg.png'
      },
      {
        'name': 'Jihad Watch',
        'link': 'https://en.wikipedia.org/wiki/Jihad_Watch',
        'status': '🛑 Deprecated',
        'title': 'Jihad Watch - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/7/72/Jihad_Watch_logo.PNG/200px-Jihad_Watch_logo.PNG'
      },
      {
        'name': 'Last.fm',
        'link': 'https://en.wikipedia.org/wiki/Last.fm',
        'status': '🛑 Deprecated',
        'title': 'Last.fm - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Lastfm_logo.svg/220px-Lastfm_logo.svg.png'
      },
      {
        'name': 'LifeSiteNews',
        'link': 'https://en.wikipedia.org/wiki/LifeSiteNews',
        'status': '🛑 Deprecated',
        'title': 'LifeSiteNews - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/6/60/LifeSiteNews_logo.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/6/60/LifeSiteNews_logo.png/220px-LifeSiteNews_logo.png'
      },
      {
        'name': 'The Mail on Sunday',
        'link': 'https://en.wikipedia.org/wiki/The_Mail_on_Sunday',
        'status': '🛑 Deprecated',
        'title': 'The Mail on Sunday - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/6/60/The_Mail_on_Sunday.jpg/280px-The_Mail_on_Sunday.jpg'
      },
      {
        'name': 'MintPress News',
        'link': 'https://en.wikipedia.org/wiki/MintPress_News',
        'status': '🛑 Deprecated',
        'title': 'MintPress News - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/4/49/MintPress_News_logo.png/100px-MintPress_News_logo.png'
      },
      {
        'name': 'National Enquirer',
        'link': 'https://en.wikipedia.org/wiki/National_Enquirer',
        'status': '🛑 Deprecated',
        'title': 'National Enquirer - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/6/69/National_Enquirer_logo_2014.svg/180px-National_Enquirer_logo_2014.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/b/bb/National_Enquirer_%28cover%29.jpg'
      },
      {
        'name': 'News Break',
        'link': 'https://en.wikipedia.org/wiki/News_Break',
        'status': '🛑 Deprecated',
        'title': 'Jerry Yang - Wikipedia',
        'image': 'https://journalists.org/wp-content/uploads/2020/09/Newsbreak-ONA20-Logo-9-17.png?resize=600,99',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Jerry_yang_2010%284555102908%29.jpg/220px-Jerry_yang_2010%284555102908%29.jpg'
      },
      {
        'name': 'News of the World',
        'link': 'https://en.wikipedia.org/wiki/News_of_the_World',
        'status': '🛑 Deprecated',
        'title': 'News of the World - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/9/94/News_of_the_World_Logo_2009.svg/143px-News_of_the_World_Logo_2009.svg.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/6/61/Final_NOTW_cover.jpeg'
      },
      {
        'name': 'Newsmax',
        'link': 'https://en.wikipedia.org/wiki/Newsmax',
        'status': '🛑 Deprecated',
        'title': 'Newsmax - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/c/c5/Newsmax2021.svg/270px-Newsmax2021.svg.png'
      },
      {
        'name': 'NNDB',
        'link': 'https://en.wikipedia.org/wiki/NNDB',
        'status': '🛑 Deprecated',
        'title': 'NNDB - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/a/a8/NNDBLogo.png/220px-NNDBLogo.png'
      },
      {
        'name': 'Occupy Democrats',
        'link': 'https://en.wikipedia.org/wiki/Occupy_Democrats',
        'status': '🛑 Deprecated',
        'title': 'Occupy Democrats - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/a/ae/Occupy_Democrats_logo.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/a/ae/Occupy_Democrats_logo.png/220px-Occupy_Democrats_logo.png'
      },
      {
        'name': 'One America News Network',
        'link': 'https://en.wikipedia.org/wiki/One_America_News_Network',
        'status': '🛑 Deprecated',
        'title': 'One America News Network - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/8/84/One_America_News_Network_logo.svg/200px-One_America_News_Network_logo.svg.png'
      },
      {
        'name': 'Press TV',
        'link': 'https://en.wikipedia.org/wiki/Press_TV',
        'status': '🛑 Deprecated',
        'title': 'Press TV - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Press_Tv_logo.svg/1200px-Press_Tv_logo.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/6/63/Press_Tv_logo.svg/200px-Press_Tv_logo.svg.png'
      },
      {
        'name': 'Republic TV',
        'link': 'https://en.wikipedia.org/wiki/Republic_TV',
        'status': '🛑 Deprecated',
        'title': 'Republic TV - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Republic_TV.svg/1200px-Republic_TV.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Republic_TV.svg/200px-Republic_TV.svg.png'
      },
      {
        'name': 'RT',
        'link': 'https://en.wikipedia.org/wiki/RT_(TV_network)',
        'status': '🛑 Deprecated',
        'title': 'RT (TV network) - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Russia-today-logo.svg/1200px-Russia-today-logo.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Russia-today-logo.svg/200px-Russia-today-logo.svg.png'
      },
      {
        'name': 'Sputnik',
        'link': 'https://en.wikipedia.org/wiki/Sputnik_(news_agency)',
        'status': '🛑 Deprecated',
        'title': 'Sputnik (news agency) - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Sputnik_logo.svg/1200px-Sputnik_logo.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Sputnik_logo.svg/150px-Sputnik_logo.svg.png'
      },
      {
        'name': 'The Sun (UK)',
        'link': 'https://en.wikipedia.org/wiki/The_Sun_(United_Kingdom)',
        'status': '🛑 Deprecated',
        'title': 'The Sun (United Kingdom) - Wikipedia',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/5/53/The_Sun_Front_Page.jpg',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/3/3b/The_Sun.svg/116px-The_Sun.svg.png'
      },
      {
        'name': 'Taki\'s Magazine',
        'link': 'https://en.wikipedia.org/wiki/Taki%27s_Magazine',
        'status': '🛑 Deprecated',
        'title': 'Taki&#039;s Magazine - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Takis_Magazine_Wordmark.png/220px-Takis_Magazine_Wordmark.png'
      },
      {
        'name': 'Telesur',
        'link': 'https://en.wikipedia.org/wiki/Telesur',
        'status': '🛑 Deprecated',
        'title': 'Telesur - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/TeleSUR-Logo.svg/1200px-TeleSUR-Logo.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/b/bf/TeleSUR-Logo.svg/150px-TeleSUR-Logo.svg.png'
      },
      {
        'name': 'Unz Review',
        'link': 'https://en.wikipedia.org/wiki/Unz_Review',
        'status': '🛑 Deprecated',
        'title': 'Ron Unz - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/0/09/Ron_Unz_2013_01_%28cropped%29.jpg',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/0/09/Ron_Unz_2013_01_%28cropped%29.jpg/220px-Ron_Unz_2013_01_%28cropped%29.jpg'
      },
      {
        'name': 'WorldNetDaily',
        'link': 'https://en.wikipedia.org/wiki/WorldNetDaily',
        'status': '🛑 Deprecated',
        'title': 'WorldNetDaily - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/5/55/WorldNetDaily_logo.svg/220px-WorldNetDaily_logo.svg.png'
      },
      {
        'name': 'Zero Hedge',
        'link': 'https://en.wikipedia.org/wiki/Zero_Hedge',
        'status': '🛑 Deprecated',
        'title': 'Zero Hedge - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/c/cc/ZeroHedge_logo.svg/220px-ZeroHedge_logo.svg.png'
      }
    ],
    [
      {
        'name': 'Advameg',
        'link': 'https://en.wikipedia.org/wiki/Advameg',
        'status': 'ⓧ Blacklisted',
        'title': 'City-Data - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/5/57/Citydata.jpg',
        'image2': '//upload.wikimedia.org/wikipedia/en/5/57/Citydata.jpg'
      },
      {
        'name': 'Breitbart News',
        'link': 'https://en.wikipedia.org/wiki/Breitbart_News',
        'status': 'ⓧ Blacklisted',
        'title': 'Breitbart News - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Breitbart_News.svg/1200px-Breitbart_News.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Breitbart_News.svg/150px-Breitbart_News.svg.png'
      },
      {
        'name': 'Centre for Research on Globalisation',
        'link': 'https://en.wikipedia.org/wiki/Centre_for_Research_on_Globalisation',
        'status': 'ⓧ Blacklisted',
        'title': 'Michel Chossudovsky - Wikipedia',
        'image': 'https://www.globalresearch.ca/wp-content/themes/globalresearch/images/logo2.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Michel_Chossudovsky_En_direct_d%27Alep.jpg/220px-Michel_Chossudovsky_En_direct_d%27Alep.jpg'
      },
      {
        'name': 'Examiner.com',
        'link': 'https://en.wikipedia.org/wiki/Examiner.com',
        'status': 'ⓧ Blacklisted',
        'title': 'Examiner.com - Wikipedia',
        'image': 'https://logodix.com/logo/1941305.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/5/5b/Examinerdotcom.jpg/220px-Examinerdotcom.jpg'
      },
      {
        'name': 'Famous Birthdays',
        'link': 'https://en.wikipedia.org/wiki/Famous_Birthdays',
        'status': 'ⓧ Blacklisted',
        'title': 'Famous Birthdays - Wikipedia',
        'image': 'https://seekvectorlogo.net/wp-content/uploads/2020/05/famous-birthdays-vector-logo.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/f/f5/Famous_Birthdays.png/300px-Famous_Birthdays.png'
      },
      {
        'name': 'InfoWars',
        'link': 'https://en.wikipedia.org/wiki/InfoWars',
        'status': 'ⓧ Blacklisted',
        'title': 'InfoWars - Wikipedia',
        'image2': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Infowars_Logo_with_Natural_Earth_Map_Background.svg/320px-Infowars_Logo_with_Natural_Earth_Map_Background.svg.png',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/3/37/Infowars_Logo.svg/125px-Infowars_Logo.svg.png'
      },
      {
        'name': 'Lenta.ru',
        'link': 'https://en.wikipedia.org/wiki/Lenta.ru',
        'status': 'ⓧ Blacklisted',
        'title': 'Lenta.ru - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/0/01/Lenta.svg/220px-Lenta.svg.png'
      },
      {
        'name': 'LiveLeak',
        'link': 'https://en.wikipedia.org/wiki/LiveLeak',
        'status': 'ⓧ Blacklisted',
        'title': 'LiveLeak - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/5/5f/Liveleak_logo_july_2014.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/5/5f/Liveleak_logo_july_2014.png/220px-Liveleak_logo_july_2014.png'
      },
      {
        'name': 'Lulu.com',
        'link': 'https://en.wikipedia.org/wiki/Lulu.com',
        'status': 'ⓧ Blacklisted',
        'title': 'Lulu.com - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Lulu_logo_%28new%29.svg/1200px-Lulu_logo_%28new%29.svg.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/4/46/Lulu_logo_%28new%29.svg/220px-Lulu_logo_%28new%29.svg.png'
      },
      {
        'name': 'MyLife',
        'link': 'https://en.wikipedia.org/wiki/MyLife',
        'status': 'ⓧ Blacklisted',
        'title': 'MyLife - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/en/d/d8/MyLife_logo.png',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/d/d8/MyLife_logo.png/220px-MyLife_logo.png'
      },
      {
        'name': 'Natural News',
        'link': 'https://en.wikipedia.org/wiki/Natural_News',
        'status': 'ⓧ Blacklisted',
        'title': 'Natural News - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/en/thumb/6/6a/Natural_News_logo._around_June_2015%2C_depicting_new_slogan.png/220px-Natural_News_logo._around_June_2015%2C_depicting_new_slogan.png'
      },
      {
        'name': 'OpIndia',
        'link': 'https://en.wikipedia.org/wiki/OpIndia',
        'status': 'ⓧ Blacklisted',
        'title': 'OpIndia - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/9/9a/OpIndia_logo_%28transparent%29.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/9/9a/OpIndia_logo_%28transparent%29.png/200px-OpIndia_logo_%28transparent%29.png'
      },
      {
        'name': 'The Points Guy',
        'link': 'https://en.wikipedia.org/wiki/The_Points_Guy',
        'status': 'ⓧ Blacklisted',
        'title': 'The Points Guy - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/b/bb/TPG.PGN.png',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/b/bb/TPG.PGN.png/220px-TPG.PGN.png'
      },
      {
        'name': 'Swarajya',
        'link': 'https://en.wikipedia.org/wiki/Swarajya_(magazine)',
        'status': 'ⓧ Blacklisted',
        'title': 'Swarajya (magazine) - Wikipedia',
        'image': '//upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Swarajya_logo.png/180px-Swarajya_logo.png',
        'image2': 'https://upload.wikimedia.org/wikipedia/en/8/87/Swarajya_Magazine_cover%2C_May_2018.jpg'
      },
      {
        'name': 'Veterans Today',
        'link': 'https://en.wikipedia.org/wiki/Veterans_Today',
        'status': 'ⓧ Blacklisted',
        'title': 'Veterans Today - Wikipedia',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Veterans-today-logo.jpg',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Veterans-today-logo.jpg/220px-Veterans-today-logo.jpg'
      },
      {
        'name': 'ZoomInfo',
        'link': 'https://en.wikipedia.org/wiki/ZoomInfo',
        'status': 'ⓧ Blacklisted',
        'title': 'ZoomInfo - Wikipedia',
        'image2': '//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/ZoomInfo_Logo.png/220px-ZoomInfo_Logo.png'
      }
    ]
  ];
}
