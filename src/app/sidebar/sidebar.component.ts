import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  icon: string;
  label: string;
  route?: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() isSidebarCollapsed = false;
  @Output() sidebarToggle = new EventEmitter<void>();
  menuItems: MenuItem[] = [
    {
      icon: 'fas fa-home',
      label: 'Dashboard',
      route: '/dashboard',
    },
    {
      icon: 'fas fa-cog',
      label: 'Settings',
      route: '/settings',
    },
    {
      icon: 'fas fa-envelope',
      label: 'Messages',
    },
  ];

  toggleSidebar = () => this.sidebarToggle.emit();
}
