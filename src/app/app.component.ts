import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
/* import { getStorage, ref, uploadBytes } from 'firebase/storage'; */

declare var MediaRecorder: any;
/*const storage = getStorage();
const storageRef = ref(storage, 'videoRecording');*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
})
export class AppComponent implements OnInit {
  title = "Test"
  //Video Record and Play By Rajesh Gami
  videoElement: HTMLVideoElement;
  recordVideoElement: HTMLVideoElement;
  mediaVideoRecorder: any;
  videoRecordedBlobs: Blob[];
  isRecording: boolean = false;
  downloadVideoUrl: string;
  stream: MediaStream;
  @ViewChild('recordedVideo') recordVideoElementRef: ElementRef;
  @ViewChild('liveVideo') videoElementRef: ElementRef;

  constructor() {}
  async ngOnInit() {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: 480,
        },
      })
      .then((stream) => {
        this.videoElement = this.videoElementRef.nativeElement;
        this.recordVideoElement = this.recordVideoElementRef.nativeElement;
        this.stream = stream;
        this.videoElement.srcObject = this.stream;
      });
  }
  startVideoRecording() {
    this.videoRecordedBlobs = [];
    let options: any = {
      mimeType: 'video/webm',
    };
    try {
      this.mediaVideoRecorder = new MediaRecorder(this.stream, options);
    } catch (err) {
      console.log(err);
    }
    this.mediaVideoRecorder.start();
    this.isRecording = !this.isRecording;
    this.onDataAvailableVideoEvent();
    this.onStopVideoRecordingEvent();
  }
  stopVideoRecording() {
    this.mediaVideoRecorder.stop();
    this.isRecording = !this.isRecording;
  }
  playRecording() {
    if (!this.videoRecordedBlobs || !this.videoRecordedBlobs.length) {
      return;
    }
    this.recordVideoElement.play();
  }
  onDataAvailableVideoEvent() {
    try {
      this.mediaVideoRecorder.ondataavailable = (event: any) => {
        if (event.data && event.data.size > 0) {
          this.videoRecordedBlobs.push(event.data);
        }
      };
    } catch (error) {
      console.log(error);
    }
  }
  async uploadVideoRecording() {
    /* uploadBytes(storageRef, File) */
  }
  onStopVideoRecordingEvent() {
    try {
      this.mediaVideoRecorder.onstop = (event: Event) => {
        const videoBuffer = new Blob(this.videoRecordedBlobs, {
          type: 'video/webm',
        });
        this.downloadVideoUrl = window.URL.createObjectURL(videoBuffer);
        this.recordVideoElement.src = this.downloadVideoUrl;
      };
    } catch (error) {
      console.log(error);
    }
  }
}
