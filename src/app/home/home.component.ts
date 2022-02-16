import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  readonly quotes = [
    ['लोकाः समस्ताः सुखिनो भवन्तु', 'May all beings everywhere be happy and free'],
    ['सत्यमेव जयते', 'Truth Alone Triumphs'],
    ['जीवेषु करुणा चापि मैत्री तेषु विधीयताम्', 'Be compassionate and friendly to all living beings'],
    ['अतिरोषणश्चक्षुष्मानन्ध एव जनः', 'An exceedingly angry person is blind even when possessing eyes'],
    ['स्वस्मै स्वल्पं समाजाय सर्वस्वं', 'A little bit for yourself and everything for others'],
    ['कृण्वन्तो विश्वं आर्यं', 'Make the world noble'],
    ['वसुधैव कुटुम्बकम', 'The world is one family'],
    ['न कंचित् शाश्वतम्', 'Nothing is permanent'],
    ['नमस्ते', 'I bow to you'],
    ['यद् भावं तद् भवति', 'You become as you think', 'You are what you believe'],
    ['एतदपि गमिष्यति', 'This too shall pass'],
    ['असतो मा सद्गमय, तमसो मा ज्योतिर्गमय', 'Lead me from unreal to real, from darkness to light'],
    ['शतहस्त समाहर सहस्त्रहस्त संकिर', 'Earn by hundred hands and distribute by thousand hands'],
    ['आत्मदीपो भव', 'Be your own light'],
    ['अनिषिध्दमनुमतम्', 'That which is not objected to is agreed to'],
    ['अस्माकं कार्याणि अस्मान्सावधीकरिष्यंति', 'Only action will define us'],
    ['शाश्वतं जीवनम्, अमरं प्रेम', 'Eternal Life, Undying Passion'],
    ['मा कस्मिंश्चित् विश्वसिहि', 'Trust nobody'],
  ];
  readonly quote = this.quotes[Date.now() % this.quotes.length];
}
