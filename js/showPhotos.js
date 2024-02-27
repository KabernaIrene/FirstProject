import {
    photosObj, randomCount,
    photosArr
    
} from "./main.js"

console.log(photosArr);


const photoId = document.querySelector("#picture")
const photoRandom = photoId.content.cloneNode(true)
const image = document.querySelector(".pictures")
const imageSect = document.querySelector(".img-upload")
image.appendChild(imageSect)


function showPhoto () {
    let i = randomCount (1, 25)
    const photoImg = photoRandom.querySelector(".picture__img")
    photoImg.src = photosObj(i).url

    const photoComments = photoRandom.querySelector(".picture__comments")
    photoComments.innerText = photosObj().comments.length
    
    const photoLikes = photoRandom.querySelector(".picture__likes")
    photoLikes.innerText = photosObj().likes

    const photoImage = document.createDocumentFragment()
    photoImage.appendChild(photoRandom)
    imageSect.after(photoImage)
}

showPhoto(photosArr)



function allPhotos (){
    let newPhotosArr = photosArr.map(photo => {
   return`<a href="#" class="picture">
   <img class="picture__img" src="${photo.url}" width="182" height="182" alt="Випадкова фотографія">
   <p class="picture__info">
     <span class="picture__comments">${photo.comments.length}</span>
     <span class="picture__likes">${photo.likes}</span>
   </p>
 </a>`
    }).join(''); 


    image.innerHTML += newPhotosArr

}
   

  allPhotos(photosArr);


