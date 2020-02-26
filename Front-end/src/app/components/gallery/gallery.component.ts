import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryRef } from '@ngx-gallery/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  galleryId = 'mixedExample';

  constructor(private gallery: Gallery) { }

  ngOnInit(): void {

    const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);

  
  galleryRef.addImage({
    src: '../../assets/cortes/4.jpg',
    thumb: '../../assets/cortes/4.jpg',
    title: 'Some title'
  });
  galleryRef.addImage({
    src: '../../assets/cortes/3.jpg',
    thumb: '../../assets/cortes/3.jpg',
    title: 'Some title'
  });
  galleryRef.addImage({
    src: '../../assets/cortes/2.jpg',
    thumb: '../../assets/cortes/2.jpg',
    title: 'Some title'
  });
  galleryRef.addImage({
    src: '../../assets/cortes/1.jpg',
    thumb: '../../assets/cortes/1.jpg',
    title: 'Some title'
  });
  galleryRef.addImage({
    src: '../../assets/cortes/5.jpg',
    thumb: '../../assets/cortes/5.jpg',
    title: 'Some title'
  });
  galleryRef.addImage({
    src: '../../assets/cortes/6.jpg',
    thumb: '../../assets/cortes/6.jpg',
    title: 'Some title'
  });

  // galleryRef.addVideo({
  //   src: 'VIDEO_URL',
  //   thumb: '(OPTIONAL)VIDEO_THUMBNAIL_URL',
  //   poster: '(OPTIONAL)VIDEO_POSTER_URL'
  // });

  // // Add a video item with multiple url sources
  // galleryRef.addVideo({
  //   src: [
  //     { url: 'MP4_URL', type: 'video/mp4' },
  //     { url: 'OGG_URL', type: 'video/ogg' }
  //   ],
  //   thumb: '(OPTIONAL)VIDEO_THUMBNAIL_URL',
  //   poster: '(OPTIONAL)VIDEO_POSTER_URL'
  // });

  // galleryRef.addYoutube({
  //   src: 'VIDEO_ID'
  // });

  // galleryRef.addIframe({
  //   src: '../../assets/logo.png',
  //   thumb: '(OPTIONAL)IMAGE_THUMBNAIL_URL'
  // });

}

}
