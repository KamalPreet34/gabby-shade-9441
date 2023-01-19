function displayShow(images) {
    let currentIndex = 0;
    let parentEl = document.getElementById("parent");
    let image = document.createElement("img");
    image.setAttribute("src", images[currentIndex]);
    parentEl.append(image);
    setInterval(() => {
      currentIndex++;
      if (currentIndex == images.length) {
        currentIndex = 0;
      }
      image.setAttribute("src", images[currentIndex]);
    }, 3000);
  }

let imageArr = ["https://img0.junaroad.com/images/banners/B2G1_13january2023_1673587401792.jpg?crsl_pos=0","https://img1.junaroad.com//assets/images/mobileNotif/img-1672290419954.jpg?crsl_pos=0","https://img1.junaroad.com//assets/images/mobileNotif/img-1674044135107.jpg?crsl_pos=0","https://img1.junaroad.com//assets/images/mobileNotif/img-1667988209100.jpg?crsl_pos=0","https://img1.junaroad.com//assets/images/mobileNotif/img-1652694665568.jpg?crsl_pos=0"]

window.addEventListener("load",function(){
    displayShow(imageArr);
})
