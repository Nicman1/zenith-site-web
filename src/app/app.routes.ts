import { Routes } from '@angular/router';
import {MainComponent} from './pages/main/main.component';
import {TeamComponent} from './pages/team/team.component';
import {ContactComponent} from './pages/contact/contact.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {SponsorsComponent} from './pages/sponsors/sponsors.component';
import {GalleryComponent} from './pages/gallery/gallery.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contact', component: ContactComponent  },
  { path: 'projects', component: ProjectsComponent  },
  { path: 'sponsors', component: SponsorsComponent  },
  { path: 'gallery', component: GalleryComponent  },
  { path: '**', component: MainComponent }
];
