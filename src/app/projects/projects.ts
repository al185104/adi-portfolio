import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})

export class ProjectsComponent {
  projects = [
    {
      title: 'DMDynamite',
      description: 'An automation tool for sending customized direct messages (DMs) on Instagram. It includes account management, message personalization, proxy setup, and blast scheduling.',
      icon: 'assets/projects/dmdynamite.png', // Use your project image as icon for now
      size: 'tile-large', // Large prominent tile
      bg: '#F6C49C',
      highlights: [
        '.NET MAUI',
        'InstaSharper',
        'SQLite',
        'Microcharts',
        'FeatherUI'
      ],
      link: 'https://github.com/al185104/DMDynamite'
    },
    {
      title: 'Sales',
      description: 'A POS-style sales management dashboard showing sales trends, product performance, and customer activity. Includes modules for transactions, product management, and sales analysis.',
      icon: 'assets/projects/sales.png',
      size: 'tile-wide', // Wide tile
      bg: '#E7EFC7',
      highlights: [
        '.NET MAUI',
        'FluentUI',
        'Linq',
        'NewtonSoft',
        'SQLite',
        'MicroCharts',
        'GithubAPI'
      ],
      link: 'https://github.com/al185104/Sales'
    },    
    {
      title: 'Subs – Subscription Tracker App',
      description: 'A personal finance utility app that helps users manage and track subscription services like YouTube Premium, Spotify, Netflix, and more. It displays upcoming renewal dates and service details in a clean, responsive layout.',
      icon: 'assets/projects/subs.png',
      size: 'tile-default', // Standard size
      bg: '#FFFBE6',
      highlights: [
        '.NET MAUI',
        'SQLite',
        'Local Notifications'
      ],
      link: 'https://github.com/al185104/Subs'
    },
    {
      title: 'HR Management System',
      description: 'A full-featured Human Resource Management System designed for hotel or enterprise-level use. Modules include Employee Management, Timekeeping, Payroll, Scheduling, Leave Filing, and Reports.',
      icon: 'assets/projects/hrms.png',
      size: 'tile-tall', // Tall tile for more vertical space
      bg: '#E8B98E',
      highlights: [
        'Blazor Server',
        'Fluent UI',
        'Entity Framework',
        'MSSQL',
        'Microcharts',
        'Clean Architecture'
      ],
      link: 'https://github.com/al185104/Bluewater'
    }
  ];
}

