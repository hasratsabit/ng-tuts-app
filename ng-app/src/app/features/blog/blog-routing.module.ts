import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';

const routes: Routes = [
  { path: 'blogs', component: BlogsComponent},
  { path: 'add-blog', component: AddBlogComponent},
  { path: 'blog-list', component: BlogListComponent},
  { path: 'blog-detail/:id', component: BlogDetailComponent},
  { path: 'edit-blog/:id', component: EditBlogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
