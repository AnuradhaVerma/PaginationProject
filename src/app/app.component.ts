import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'paginationproject';
  posts:any[] =[];
  currentPage=1;
  postsPerPage =10;
  totalPosts=100;
  constructor( private postService :PostService){}
  ngOnInit(): void {
    this.loadPosts;
  }

  loadPosts():void{
    this.postService.getPosts(this.currentPage, this.postsPerPage).subscribe(data =>{
      this.posts=data;
    })
  }

  goToPage(page:number):void{
    this.currentPage=page;
    this.loadPosts();
  }

  nextPage():void{
    if (this.currentPage *this.postsPerPage < this.totalPosts){
      this.currentPage++;
      this.loadPosts();
    }
  }

  prevPage():void{
    if(this.currentPage >1){
      this.currentPage--;
      this.loadPosts();
    }
  }
  
}
