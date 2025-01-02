import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  isUserSeller: boolean = false;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    localStorage.setItem(
      'statesAndUnionTerritories',
      JSON.stringify(this.statesAndUnionTerritories)
    );

    localStorage.setItem('categories', JSON.stringify(this.categories));

    this.authService.getLoginState().subscribe((loginState) => {
      this.isUserLoggedIn = loginState;

      if (this.isUserLoggedIn) {
        this.authService.getRoles().subscribe((userRoles: string[]) => {
          this.isUserSeller = userRoles.includes('seller');
        });
      }
    });
  }

  logout() {
    this.authService.logout();
  }

  categories = [
    {
      id: 'plants',
      name: 'Plants',
      parentCategoryId: null,
      categories: [
        {
          id: 'plants/indoor',
          name: 'Indoor Plants',
          slug: 'indoor-plants',
          parentCategoryId: 'plants',
        },
        {
          id: 'plants/outdoor',
          name: 'Outdoor Plants',
          slug: 'outdoor-plants',
          parentCategoryId: 'plants',
        },
        {
          id: 'plants/low-maintenance',
          name: 'Low Maintenance Plants',
          slug: 'low-maintenance-plants',
          parentCategoryId: 'plants',
        },
        {
          id: 'plants/air-purifying',
          name: 'Air Purifying Plants',
          slug: 'air-purifying-plants',
          parentCategoryId: 'plants',
        },
        {
          id: 'plants/medicinal-aromatic',
          name: 'Medicinal & Aromatic Plants',
          slug: 'medicinal-aromatic-plants',
          parentCategoryId: 'plants',
        },
      ],
    },
    {
      id: 'seeds',
      name: 'Seeds',
      parentCategoryId: null,
      categories: [
        {
          id: 'seeds/flower',
          name: 'Flower Seeds',
          slug: 'flower-seeds',
          parentCategoryId: 'seeds',
        },
        {
          id: 'seeds/fruit',
          name: 'Fruit Seeds',
          slug: 'fruit-seeds',
          parentCategoryId: 'seeds',
        },
        {
          id: 'seeds/vegetable',
          name: 'Vegetable Seeds',
          slug: 'vegetable-seeds',
          parentCategoryId: 'seeds',
        },
        {
          id: 'seeds/tree-grass',
          name: 'Tree & Grass Seeds',
          slug: 'tree-grass-seeds',
          parentCategoryId: 'seeds',
        },
      ],
    },
    {
      id: 'pots-planters',
      name: 'Pots & Planters',
      parentCategoryId: null,
      categories: [
        {
          id: 'pots-planters/plastic',
          name: 'Plastic Pots',
          slug: 'plastic-pots',
          parentCategoryId: 'pots-planters',
        },
        {
          id: 'pots-planters/ceramic',
          name: 'Ceramic Pots',
          slug: 'ceramic-pots',
          parentCategoryId: 'pots-planters',
        },
        {
          id: 'pots-planters/wooden',
          name: 'Wooden Pots',
          slug: 'wooden-pots',
          parentCategoryId: 'pots-planters',
        },
        {
          id: 'pots-planters/hanging',
          name: 'Hanging Planters',
          slug: 'hanging-planters',
          parentCategoryId: 'pots-planters',
        },
      ],
    },
    {
      id: 'soil-manure',
      name: 'Soil & Manure',
      parentCategoryId: null,
      categories: [],
    },
    {
      id: 'tools-accessories',
      name: 'Tools & Accessories',
      parentCategoryId: null,
      categories: [],
    },
    {
      id: 'gifting',
      name: 'Gifting',
      parentCategoryId: null,
      categories: [
        {
          id: 'gifting/corporate-bulk',
          name: 'Corporate/ Bulk Gifting',
          slug: 'bulk',
          parentCategoryId: 'gifting',
        },
        {
          id: 'gifting/personalised',
          name: 'Personalised Gifting',
          slug: 'personalised',
          parentCategoryId: 'gifting',
        },
      ],
    },
    {
      id: 'buyOneGetOne',
      name: 'Buy 1 Get 1 Free',
      parentCategoryId: null,
      categories: [],
    },
    {
      id: 'clearance',
      name: 'Clearance Sale',
      parentCategoryId: null,
      categories: [],
    },
    {
      id: 'offers',
      name: 'Offers For You',
      parentCategoryId: null,
      categories: [],
    },
  ];

  statesAndUnionTerritories = [
    'Andaman and Nicobar Islands',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chandigarh',
    'Chhattisgarh',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Ladakh',
    'Lakshadweep',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Puducherry',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
  ];
}
