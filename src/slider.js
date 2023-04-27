import circleOutline from './circle-outline.svg';

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

const imageDots = (totalImages, sliderId) => {
    const dotsContainer = document.createElement('div');
    dotsContainer.classList.add('nav-dots');
    const sliderContainer = document.getElementById(sliderId).parentElement;
    sliderContainer.appendChild(dotsContainer);
    for (let i = 0; i < totalImages; i++) {
        const navDot = document.createElement('img');
        navDot.src = circleOutline;
        navDot.id = sliderId + '-' + (i + 1);
        navDot.setAttribute('aria-label', `slider image ${(i +1)}`);
        dotsContainer.appendChild(navDot);
        //navDot.addEventListener('click', moveSlider(navDot.id));
    }
}

export { sliderWidth, imageDots }