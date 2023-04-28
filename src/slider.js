import circleOutline from './circle-outline.svg';
import circleFilled from './circle.svg';

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
        //change so only active dot's content is replaced with filled circle
        e.target.src = circleFilled;
        const position = e.target.id.slice(2) * 100;
        const sliderImages = document.getElementById(sliderId);
        sliderImages.style.transform = `translateX(-${position}%)`;
    }

    return { imageDots }
}

const slider1 = generateSlider('slider1');

export { slider1 }