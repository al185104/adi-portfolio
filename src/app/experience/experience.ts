import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;
  highlights: string[];
  link?: string;
  techLogos: { src: string; alt: string; }[]; // <-- add this
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class ExperienceComponent implements OnInit, OnDestroy {
  selected = 0;
  shakingLogoIndex = 0;
  shakeInterval: any;

  ngOnInit() {
    this.startShakeInterval();
  }

  ngOnDestroy() {
    clearInterval(this.shakeInterval);
  }

    startShakeInterval() {
    this.updateShakingLogo();
    this.shakeInterval = setInterval(() => {
      this.updateShakingLogo();
    }, 2000); // Every 2 seconds, or adjust as needed
  }

  updateShakingLogo() {
    const techCount = this.experiences[this.selected].techLogos.length;
    this.shakingLogoIndex = Math.floor(Math.random() * techCount);
  }

  // Call this when changing experience
  onExperienceChange(i: number) {
    this.selected = i;
    this.updateShakingLogo();
  }

experiences: Experience[] = [
  {
    company: 'Synapxe (formerly IHiS)',
    role: 'Lead Software Engineer',
    location: 'Singapore',
    duration: 'July 2021 – Present',
    highlights: [
      'Provide technical leadership for healthcare software supporting clinics and hospitals nationwide.',
      'Spearheaded the National Vaccination Operations System for COVID-19.',
      'Enhanced digital workflows with the Ministry of Health.',
      'Lead a team of 6 developers delivering high-quality code for GP clinics and hospitals.'
    ],
    link: 'https://www.synapxe.sg/',
    techLogos: [
      { src: 'assets/logos/dotnet.png', alt: '.NET' },
      { src: 'assets/logos/csharp.png', alt: 'C#' },
      { src: 'assets/logos/docker.png', alt: 'Docker' },
      { src: 'assets/logos/azure.png', alt: 'Azure' },
      { src: 'assets/logos/mssql.png', alt: 'SQL Server' }
    ]
  },
  // ... add techLogos array for each experience
  {
    company: 'NE Digital (NTUC FairPrice)',
    role: 'Senior POS Systems Executive',
    location: 'Singapore',
    duration: 'Sept 2020 – July 2021',
    highlights: [
      'Modernized retail operations for Singapore’s largest retailer.',
      'Designed and implemented advanced Point-of-Sale systems.',
      'Delivered technical support and enhanced efficiency.'
    ],
    link: 'https://www.fairprice.com.sg/',
    techLogos: [
      { src: 'assets/logos/dotnet.png', alt: '.NET' },
      { src: 'assets/logos/csharp.png', alt: 'C#' },
      { src: 'assets/logos/mssql.png', alt: 'SQL Server' }
    ]
  },
  {
    company: 'Yokogawa',
    role: 'Software Engineer',
    location: 'Singapore',
    duration: 'May 2019 – Sept 2020',
    highlights: [
      'Developed and enhanced industrial control systems.',
      'Designed software solutions to optimize control systems.',
      'Customized solutions to meet client operational requirements.'
    ],
    link: 'https://www.yokogawa.com/sg/',
    techLogos: [
      { src: 'assets/logos/cplusplus.png', alt: 'C++' },
      { src: 'assets/logos/csharp.png', alt: '.NET' },
      { src: 'assets/logos/wpf.png', alt: 'WPF' }
    ]
  },
  {
    company: 'NCR Corporation',
    role: 'Software Development Team Lead',
    location: 'Philippines & USA',
    duration: 'Aug 2012 – May 2019',
    highlights: [
      'Developed self-checkout software for global clients including Walmart.',
      'Worked closely with SMEs in Duluth, Georgia, USA.',
      'Managed a team of 5 engineers, conducted quarterly reviews, mentored new hires.',
      'Led projects to enhance efficiency and reliability of retail technology solutions.'
    ],
    link: 'https://www.ncr.com/',
    techLogos: [
      { src: 'assets/logos/cplusplus.png', alt: 'C++' },
      { src: 'assets/logos/dotnetcore.png', alt: '.NET Core' },
      // { src: 'assets/logos/iis.png', alt: 'IIS' },
      { src: 'assets/logos/docker.png', alt: 'Docker' }
    ]
  }
];
}