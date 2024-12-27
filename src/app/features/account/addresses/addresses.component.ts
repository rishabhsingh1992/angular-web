import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { IAddress } from '../../../shared/models';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrl: './addresses.component.scss',
})
export class AddressesComponent implements OnInit {
  statesAndUnionTerritories: string[] = [];
  addresses: IAddress[] = [];

  edit: boolean = false;
  addressId: string | null = null;

  showAddressForm: boolean = false;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.statesAndUnionTerritories = JSON.parse(
      localStorage.getItem('statesAndUnionTerritories') || '[]'
    );
    this.getAllAddresses();
  }

  addressForm = this.fb.group({
    firstName: [null, [Validators.required]],
    lastName: [null, [Validators.required]],
    phoneNumber: [null, [Validators.required]],
    addressLine1: [null, [Validators.required]],
    addressLine2: [null],
    city: [null, [Validators.required]],
    district: [null],
    state: [null, [Validators.required]],
    postalCode: [null, [Validators.required]],
    landmark: [null, [Validators.required]],
    alias: [null, [Validators.required]],
  });

  getAllAddresses() {
    this.accountService.getAddressesByUserId().subscribe((res: any) => {
      if (res.status === 'success') {
        this.addresses = res.data;
        this.edit = false;
        this.showAddressForm = false;
        this.addressForm.reset();
      }
    });
  }

  patchAddressForm(address: any) {
    this.addressForm.patchValue(address);
  }

  deleteAddress(id: string) {
    this.accountService.deleteAddress(id).subscribe((res) => {
      if (res === 'success') {
        this.getAllAddresses();
      }
    });
  }

  onSubmit() {
    const payload = {
      firstName: this.addressForm.value.firstName,
      lastName: this.addressForm.value.lastName,
      phoneNumber: this.addressForm.value.phoneNumber,
      addressLine1: this.addressForm.value.addressLine1,
      addressLine2: this.addressForm.value.addressLine2,
      city: this.addressForm.value.city,
      district: this.addressForm.value.district,
      state: this.addressForm.value.state,
      postalCode: this.addressForm.value.postalCode,
      landmark: this.addressForm.value.landmark,
      alias: this.addressForm.value.alias,
    };

    const req = this.edit
      ? this.accountService.updateAddress(this.addressId, payload)
      : this.accountService.addAddress(payload);

    req.subscribe((res: any) => {
      if (res.status === 'success') {
        this.getAllAddresses();
      }
    });
  }
}
