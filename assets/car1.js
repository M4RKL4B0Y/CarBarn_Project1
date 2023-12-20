function car1(x,y) {
    const element = pixelCar('assets/pixel_car2.png')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = 'assets/pixel_car2.png'
        }
        if (direction === 'west') {
            element.src = 'assets/pixel_car2.png'
        }
        if (direction === 'north') {
            element.src = 'assets/pixel_car2.png'
        }
        if (direction === 'east') {
            element.src = 'assets/pixel_car2.png'
        }
        if (direction === 'south') {
            element.src = 'assets/pixel_car2.png'
        }
    }

    move(element).withArrowKeys(x, y, handleDirectionChange)

    return {
        element: element
    }
}