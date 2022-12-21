import { Injectable } from '@angular/core';
import * as userData from "../Shared/Database/Users.json";

@Injectable({
  providedIn: 'root'
})
export class UserActivityService {
  AllUsers: any[] = (userData as any).default;

  constructor() { }

  IsUserLoggedIn(): boolean {
    let result = false;
    try {
      let data = sessionStorage.getItem("UserDetails");
      if (data != null && data != undefined) {
        result = true;
      }
    } catch (error) {
      result = false;
    }
    return result;
  }
}
