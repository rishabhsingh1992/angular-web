import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionService } from '../../../shared/services/collection.service';
import { AuthService } from '../../../core/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Input() isUserLoggedIn: boolean = false;
  @Input() isUserSeller: boolean = false;
  @Output() handleLogout = new EventEmitter<void>();

  // isSeller: boolean = false;
  roles: string[] = [];
  plantCategories: any;
  categories: any;

  constructor(
    private router: Router,
    private userService: UserService,
    private collectionService: CollectionService,
    private authService: AuthService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.categories = JSON.parse(localStorage.getItem('categories') || '[]');
  }

  logout() {
    this.handleLogout.emit();
  }

  navigateToCollection(category: any) {
    // console.log(category._id);
    // this.collectionService.collectionId = category._id;
    // this.router.navigate([`collections/${category.slug}/${category._id}`], {
    this.router.navigate([`collections/${category.slug}`]);
  }
}
