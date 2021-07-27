import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input('post') post: any;
  @Output('onDelete') onDelete = new EventEmitter();
  postData: any = {};
  user: any = {};

  constructor() { }

  ngOnInit(): void {
    this.postData = this.post.data();
    this.user = firebase.auth().currentUser;
  }
  
  delete(){
    firebase.firestore().collection("posts").doc
    (this.post.id).delete().then(()=>{
      this.onDelete.emit();
;    })
  }

}
