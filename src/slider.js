import circleOutline from './circle-outline.svg';
import leftArrow from './arrow-left.svg';
import rightArrow from './arrow-right.svg';

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
        slider.sliderContainer.appendChild(dotsContainer);
        for (let i = 0; i < sliderWidth(); i++) {
            const dotLink = document.createElement('a');
            dotLink.id = sliderId.slice(6) + '-' + i;
            dotLink.setAttribute('aria-label', `move slider to image ${i}`);
            const navDot = document.createElement('img');
            navDot.src = circleOutline;
            dotLink.appendChild(navDot);
            dotsContainer.appendChild(dotLink);
            dotLink.addEventListener('click', dotNav);
        }
    }

    const dotNav = (e) => {
        slider.currentSlideId = e.currentTarget.id;
        currentDot();
    }

    const currentDot = () => {
        const currentSlide = document.getElementById(slider.currentSlideId);
        const navDots = [ ...currentSlide.parentElement.children];
        navDots.forEach(navDot => {
            navDot.classList.remove('selected');
        });
        currentSlide.classList.add('selected');
        const position = slider.currentSlideId.slice(2) * 100;
        slider.sliderImages.style.transform = `translateX(-${position}%)`;
    }

    const navArrow = (direction) => {
        const arrowDiv = document.createElement('div');
        arrowDiv.classList.add(`arrow-${direction}`);
        const arrowLink = document.createElement('a');
        arrowLink.setAttribute('aria-label', `move slider ${direction}`);
        arrowLink.id = sliderId + '-' + direction;
        const arrow = document.createElement('img');
        if (direction === 'left') {
            arrow.src = leftArrow;
            arrowLink.addEventListener('click', lastSlide);
        } else if (direction === 'right') {
            arrow.src = rightArrow;
            arrowLink.addEventListener('click', nextSlide);
        }
        arrowLink.appendChild(arrow);
        arrowDiv.appendChild(arrowLink);
        return arrowDiv;
    }

    const navArrows = () => {
        const arrowsDiv = document.createElement('div');
        arrowsDiv.classList.add('slider-arrows');
        arrowsDiv.appendChild(navArrow('left'));
        arrowsDiv.appendChild(navArrow('right'));
        const sliderContainer = document.getElementById(sliderId).parentElement;
        sliderContainer.appendChild(arrowsDiv);
    }

    const nextSlide = () => {

        //if the current slide is the last in the slide set by sliderWidth, go to the first one (id 0)
    }

    const lastSlide = () => {
        //if the current slide is the first in the slide set (id 0), go to the last one
    }

    const slider = {
        id: sliderId.slice(6),
        sliderImages: document.getElementById(sliderId),
        sliderContainer: document.getElementById(sliderId).parentElement,
        totalImages: sliderWidth(),
        currentSlideId: sliderId.slice(6) + '-' + 0,
    }

    const arrowNav = {
        //arrowId: currentTarget.id,
        //sliderId: currentTarget.parentElement.parentElement.firstChild.id,
    }

    return { imageDots, navArrows, currentDot }
}

const generateSliders = () => {
    const sliders = document.querySelectorAll('.slider-images');
    sliders.forEach(slider => {
        const sliderCreate = generateSlider(slider.id);
        sliderCreate.imageDots();
        sliderCreate.navArrows();
        sliderCreate.currentDot();
    });
}

export { generateSliders }