const sliderWidth = (sliderId) => {
    const sliderImages = document.getElementById(sliderId);
    const images = [ ...sliderImages.children];
    let i = 0;
    images.forEach(image => {
        i++;
    });
    const totalImages = i; 
    return totalImages;
}