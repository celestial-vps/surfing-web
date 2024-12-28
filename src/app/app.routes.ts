import { Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { SurfingMethodComponent } from './surfing-method/surfing-method.component';
import { SurfingSeasonComponent } from './surfing-season/surfing-season.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,  data: {
    meta: {
        page: 'Context example page',
        title: 'Home',
        description: 'Discover the best surf spots in Bali, get surfing tips, and plan your ultimate surfing adventure in Indonesia.',
        metatags: 'Holy Surf Bali,surfing, Bali, surf spots, surf schools, wave riding, Indonesia',
    },
}, },
  { path: 'surf-method', component: SurfingMethodComponent,data:{title:'Surfing Method'} },
  { path: 'surf-season', component: SurfingSeasonComponent,data:{title:'Surfing Season'} },
  { path: 'gallery', component: GalleryComponent,data:{title:'Gallery'} },
  { path: 'contact-us', component: ContactUsComponent,data:{title:'About Us'} },
];
