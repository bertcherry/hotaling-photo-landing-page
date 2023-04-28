import circleOutline from './circle-outline.svg';

const generateSlider = (sliderId) => {
    const sliderWidth = () => {
        const sliderImages = document.getElementById(sliderId);
        const images = [ ...sliderImages.children];
        let i = 0;
        images.forEach(image => {
            i++;
        });
        const totalImages = i; 
        return totalImages;
    }

    const imageDots = () => {
        const dotsContainer = document.createElement('div');
        dotsContainer.classList.add('nav-dots');
        const sliderContainer = document.getElementById(sliderId).parentElement;
        sliderContainer.appendChild(dotsContainer);
        for (let i = 0; i < sliderWidth(); i++) {
            const navDot = document.createElement('img');
            navDot.src = circleOutline;
            navDot.id = sliderId.slice(6) + '-' + i;
            navDot.setAttribute('aria-label', `slider image ${i}`);
            dotsContainer.appendChild(navDot);
            navDot.addEventListener('click', dotNav);
        }
    }

    const dotNav = (e) => {
        const navDots = [ ...e.target.parentElement.children];
        navDots.forEach(navDot => {
            navDot.classList.remove('selected');
        });
        e.target.classList.add('selected');
        const position = e.target.id.slice(2) * 100;
        const sliderImages = document.getElementById(sliderId);
        sliderImages.style.transform = `translateX(-${position}%)`;
    }

    return { imageDots }
}

const slider1 = generateSlider('slider1');

export { slider1 }