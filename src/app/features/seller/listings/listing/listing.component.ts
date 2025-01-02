import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss',
})
export class ListingComponent implements OnInit {
  path: string = '';
  edit: boolean = false;
  categories: any;
  listingId: string | null = null;

  listingForm: FormGroup = this.fb.group({});
  listingFormSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private listingService: ListingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.path = this.route.snapshot.routeConfig?.path?.split('/')[0] || '';

    this.edit = this.path === 'edit' ? true : false;
    this.categories = localStorage.getItem('categories');

    if (this.categories) {
      this.categories = JSON.parse(this.categories)
        .map((item: any) => item.categories)
        .flat();

      console.log(this.categories);
    }

    this.initializeListingForm();

    if (this.edit) {
      this.route.paramMap.subscribe((params) => {
        this.listingId = params.get('listingId');
        this.getListing();
        this.listingForm.get('category')?.disable();
      });
    }
  }

  initializeListingForm() {
    this.listingForm = this.fb.group({
      name: [null, [Validators.required]],
      description: [null, []],
      category: [null, [Validators.required]],
      images: [null, []],
      price: [400, [Validators.required]],
      stock: [50, [Validators.required]],
      shippingWeight: [20, [Validators.required]],
      shippingLeadTime: [20, Validators.required],
    });
  }

  getListing() {
    this.listingService.getListingById(this.listingId).subscribe((res: any) => {
      if (res) {
        console.log(res.data[0]);
        res.data[0].category = this.getCategoryByCategoryId(
          res.data[0].category
        );

        this.listingForm.patchValue(res.data[0]);
      }
    });
  }

  onListingCategoryChange() {}

  addListingImage(ev: Event) {
    const reader = new FileReader();
    const file = (ev.target as HTMLInputElement).files?.[0];

    if (file) {
      reader.readAsDataURL(file);

      reader.onload = () => {
        const result = reader.result;

        if (typeof result === 'string') {
          const base64String = result.split(',')[1];
          const fileObj = {
            imageBase64: base64String,
            name: file.name,
          };

          this.listingService.uploadImage(fileObj).subscribe((res: any) => {
            this.listingForm.get('images')?.setValue([res.data.src]);
          });
        }
      };
    }
  }

  addListing() {

    const listingPayload = {
      name: this.listingForm.value.name,
      description: this.listingForm.value.description,
      category: this.listingForm.value.category.slug,
      slug: this.listingForm.value.name
        .toLowerCase()
        .trim()
        .replaceAll(/[^a-z]+/g, '-'),
      images: this.listingForm.value.images,
      price: this.listingForm.value.price,
      stock: this.listingForm.value.stock,
      shippingWeight: this.listingForm.value.shippingWeight,
      shippingLeadTime: this.listingForm.value.shippingLeadTime,
    };

    console.log('[Add Listing] Body => ', listingPayload);

    this.listingService.addListing(listingPayload).subscribe((res) => {
      console.log('[Add Listing] API Response => ', res);
      if (res) {
        this.router.navigateByUrl('/seller/listings');
      }
    });
  }

  onSubmit() {
    this.listingFormSubmitted = true;
    console.log(this.listingForm);

    this.addListing();
    if (this.listingForm.valid) {
      this.listingFormSubmitted = false;
    }
  }

  getCategoryByCategoryId(categoryId: string) {
    return this.categories.find(
      (category: any) => category.slug === categoryId
    );
  }
}
