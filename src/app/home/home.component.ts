import { Component, OnInit } from '@angular/core';
import * as camera from '@nativescript/camera';

import { ImageAsset, ImageSource, knownFolders, path } from '@nativescript/core';
const source = new ImageSource();
@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  aImageAsset: ImageAsset;

  constructor() { }

  ngOnInit(): void {
  }
  test(){
    const options = {
      width: 300,
      height: 300,
      keepAspectRatio: false,
      saveToGallery: true
  };
  camera.takePicture(options)
      .then((imageAsset) => {
         
          this.aImageAsset = imageAsset;
          source.fromAsset(imageAsset)
          .then((imageSource: ImageSource) => {
              const folderPath: string =  knownFolders.documents().path;
              const fileName: string = new Date().toString();
              const filePath: string = path.join(folderPath, fileName);
              // const saved: boolean = imageSource.saveToFile(filePath, "jpg");
              const saved =  imageSource.fromAsset(this.aImageAsset).then(imageScoure =>{
                  imageScoure.saveToFile(filePath, "jpg");
              });      
              if (saved) {
                 
                  console.log('folder ', folderPath); 

                  console.log("Saved - " + filePath);
                  console.log("Image saved successfully!");
              }
          });
      }).catch((err) => {
          console.log("Error -> " + err.message);
      });
 
  }

  
}
