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
        const sliderContainer = document.getElementById(sliderId).parentElement;
        sliderContainer.appendChild(dotsContainer);
        for (let i = 0; i < sliderWidth(); i++) {
            const dotLink = document.createElement('a');
            dotLink.setAttribute('aria-label', `move slider to image ${i}`);
            //put this inside a button or 'a' element for accessibility
            const navDot = document.createElement('img');
            navDot.src = circleOutline;
            navDot.id = sliderId.slice(6) + '-' + i;
            dotLink.appendChild(navDot);
            dotsContainer.appendChild(dotLink);
            dotLink.addEventListener('click', dotNav);
        }
    }

    const dotNav = (e) => {
        const navDots = [ ...e.currentTarget.parentElement.children];
        navDots.forEach(navDot => {
            navDot.classList.remove('selected');
        });
        e.currentTarget.classList.add('selected');
        const position = e.target.id.slice(2) * 100;
        const sliderImages = document.getElementById(sliderId);
        sliderImages.style.transform = `translateX(-${position}%)`;
    }

    const navArrow = (direction) => {
        const arrowDiv = document.createElement('div');
        arrowDiv.classList.add(`arrow-${direction}`);
        const arrowLink = document.createElement('a');
        arrowLink.setAttribute('aria-label', `move slider ${direction}`);
        const arrow = document.createElement('img');
        arrow.id = sliderId + '-' + direction;
        if (direction === 'left') {
            arrow.src = leftArrow;
        } else if (direction === 'right') {
            arrow.src = rightArrow;
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

    return { imageDots, navArrows }
}

//write a for each loop that searches for sliders and creates all elements for each slider, export just that function
const slider1 = generateSlider('slider1');

export { slider1 }