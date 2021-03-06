import { Routes } from "@angular/router";
import { CityComponent } from "./city/city.component";
import { HomeComponent } from "./home/home.component";
import { CityDetailComponent } from './city-detail/city-detail.component';
import { CityAddComponent } from './city-add/city-add.component';
import { RegisterComponent } from './register/register.component';

export const appRoutes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "city", component: CityComponent },
    { path: "cityadd", component: CityAddComponent },
    { path: "cityDetail/:cityId", component: CityDetailComponent },
    { path: "register", component: RegisterComponent },

    { path: "**", redirectTo: "home", pathMatch: "full" }
]