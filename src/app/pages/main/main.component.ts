import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { WhoWeAreComponent } from '../../components/who-we-are/who-we-are.component';
import { OurValuesComponent } from '../../components/our-values/our-values.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FlayersComponent } from '../../components/flayers/flayers.component';
import { OurServicesComponent } from '../../components/our-services/our-services.component';
import { CommentAndVideoComponent } from '../../components/comment-and-video/comment-and-video.component';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,FooterComponent,ContactFormComponent,OurValuesComponent,NavBarComponent,HeaderComponent,FlayersComponent,OurServicesComponent,CommentAndVideoComponent,WhoWeAreComponent ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
