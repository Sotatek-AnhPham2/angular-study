import { Injectable } from '@angular/core';
import { HousingLocation } from '.';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:3000/locations';
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}`);
    return (
      (await data.json()).find((item: HousingLocation) => item.id === id) ?? {}
    );
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
