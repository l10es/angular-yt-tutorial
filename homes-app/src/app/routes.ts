import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailesComponent } from "./detailes/detailes.component";

const routerConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'HomePage',
    },
    {
        path: 'detailes/:id',
        component: DetailesComponent,
        title: 'Detailes page',
    },
];

export default routerConfig;