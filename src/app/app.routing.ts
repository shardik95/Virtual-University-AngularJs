import {Routes,RouterModule} from '@angular/router';
import {WhiteBoardComponent} from './white-board/white-board.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {ProfileComponent} from './profile/profile.component';
import {SectionPageComponent} from './section-page/section-page.component';
import {AdminPageComponent} from './admin-page/admin-page.component';

const appRoute:Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:WhiteBoardComponent},
  {path:'course/:courseId',component:CourseViewerComponent},
  {path:'course/:courseId/section',component:SectionPageComponent},
  {path:'course/:courseId/module/:moduleId',component:CourseViewerComponent},
  {path:'course/:courseId/module/:moduleId/lesson/:lessonId',component:CourseViewerComponent},
  {path:'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId/widget',component:CourseViewerComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'profile',component:ProfileComponent},
  {path:'admin',component:AdminPageComponent},
  {path:'**',component:WhiteBoardComponent}
]

export const routing = RouterModule.forRoot(appRoute);
