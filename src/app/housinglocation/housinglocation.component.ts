import { Component, Input } from '@angular/core';
import { HousingLocation } from '../../services';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './housinglocation.component.html',
  styleUrl: './housinglocation.component.scss',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
