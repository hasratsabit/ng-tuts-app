import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogsComponent } from './components/blogs/blogs.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  declarations: [
    BlogsComponent, 
    AddBlogComponent, 
    BlogListComponent, 
    BlogDetailComponent, 
    EditBlogComponent
  ],
  exports: [
    BlogsComponent
  ]
})
export class BlogModule { }
