import { Injectable } from '@angular/core';
import { HousingLocation } from 'src/app/interfaces/housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://127.0.0.1:3000/locations';

  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: Number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email)
  }
}
