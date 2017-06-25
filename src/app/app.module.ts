import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages'

import { AppComponent } from './app.component';
import { JumbotronComponent } from './homecomponents/jumbotron/jumbotron.component';
import { ProjectsComponent } from './homecomponents/projects/projects.component';
import { KitchenPiPanelComponent } from './homecomponents/projects/kitchen-pi-panel/kitchen-pi-panel.component';
import { BlogPanelComponent } from './homecomponents/projects/blog-panel/blog-panel.component';
import { KitchenPiComponentsComponent } from './kitchen-pi-components/kitchen-pi-components.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './homecomponents/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BreakfastComponent } from './kitchen-pi-components/breakfast/breakfast.component';
import { LunchComponent } from './kitchen-pi-components/lunch/lunch.component';
import { DinnerComponent } from './kitchen-pi-components/dinner/dinner.component';
import { AddRecipeComponent } from './kitchen-pi-components/add-recipe/add-recipe.component';
import { NewPostComponent } from './blog/new-post/new-post.component';

import { RecipesService } from './kitchen-pi-components/Services/recipes.service';
import { BlogService } from './blog/Services/blog.service';

import { OrderBy } from './kitchen-pi-components/Services/orderby.pipe';
import { LoginComponent } from './homecomponents/login/login.component';
import { RegisterComponent } from './homecomponents/register/register.component';
import { SinglePostComponent } from './blog/singlepost/singlepost.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { RobotComponent } from './robot/robot.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pi-home', component: KitchenPiComponentsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'pi-home/breakfast', component: BreakfastComponent },
  { path: 'pi-home/lunch', component: LunchComponent },
  { path: 'pi-home/dinner', component: DinnerComponent },
  { path: 'pi-home/add-recipe', component: AddRecipeComponent },
  { path: 'blog', component: BlogComponent},
  { path: 'blog/new-post', component: NewPostComponent },
  { path: 'blog/posts/:id', component: SinglePostComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'thankyou', component: ThankyouComponent },
  { path: 'robot', component: RobotComponent },
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    ProjectsComponent,
    KitchenPiPanelComponent,
    BlogPanelComponent,
    KitchenPiComponentsComponent,
    BlogComponent,
    HomeComponent,
    PageNotFoundComponent,
    BreakfastComponent,
    LunchComponent,
    DinnerComponent,
    AddRecipeComponent,
    OrderBy,
    NewPostComponent,
    LoginComponent,
    RegisterComponent,
    SinglePostComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    ThankyouComponent,
    RobotComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
  ],
  providers: [
    RecipesService,
    BlogService
    ],
  bootstrap: [
    AppComponent,
    ]
})
export class AppModule { }
