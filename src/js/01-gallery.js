// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const gallery = document.querySelector('.gallery');
galleryItems.forEach(item => {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  link.href = item.original;
  const image = document.createElement('img');
  image.src = item.preview;
  image.alt = item.description;
  link.appendChild(image);
  listItem.appendChild(link);
  gallery.appendChild(listItem);
});
// Change code below this line
const lightbox = new SimpleLightbox('.gallery a');
console.log(galleryItems);
