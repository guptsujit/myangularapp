import { Component, OnInit } from '@angular/core';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
  public uploader:FileUploader
  fileObject: any;
  attachmentList:any = [];
  constructor() { }

  ngOnInit() {

    this.uploader = new FileUploader({
      url : environment.apiBaseUrl+'/upload',
       allowedFileType: ['image', 'pdf']
    });
    this.uploader.onCompleteItem = (item :any,response:any,status:any,headers:any)=>{
      console.log(response);
      this.attachmentList.push(JSON.parse(response));
    }
  }
 public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
}
