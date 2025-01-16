import { Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { SurfingMethodComponent } from './surfing-method/surfing-method.component';
import { SurfingSeasonComponent } from './surfing-season/surfing-season.component';
import { OrderComponent } from './order/order.component';

export const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: '', component: HomeComponent, data: {
      meta: {
        page: 'Home Page - Learn to Surf in Bali',
        title: 'learn to surf in bali',
        description: 'Discover the best surf spots in Bali, get surfing tips, and plan your ultimate surfing adventure in Indonesia.',
        metatags: 'Holy Surf Bali,surfing, Bali, surf spots, surf schools, wave riding, Indonesia',
      },
    },
  },
  { path: 'order', component: OrderComponent, data: { title: 'Order' } },
  { path: 'surf-method', component: SurfingMethodComponent, data: { title: 'Surfing Method' } },
  { path: 'surf-season', component: SurfingSeasonComponent, data: { title: 'Surfing Season' } },
  { path: 'gallery', component: GalleryComponent, data: { title: 'Gallery' } },
  { path: 'contact-us', component: ContactUsComponent, data: { title: 'About Us' } },
  { path: '**', redirectTo: '/' },
];
