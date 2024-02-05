import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { WebcamModule } from 'ngx-webcam';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

/*
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment.development';

import { FirebaseOptions, initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAbWRn-h9Azp9BEQkvCAIXT3CKReE-5tkk",
  authDomain: "webcam-58db8.firebaseapp.com",
  databaseURL: "https://webcam-58db8-default-rtdb.firebaseio.com",
  projectId: "webcam-58db8",
  storageBucket: "webcam-58db8.appspot.com",
  messagingSenderId: "851336282884",
  appId: "1:851336282884:web:78b7d4e114f78374e78651",
  measurementId: "G-W7FCKVZS61",
  }
*/

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    WebcamModule,
    CommonModule,
    ButtonModule,
    BrowserAnimationsModule
    /*AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  AngularFireStorageModule8*/
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
