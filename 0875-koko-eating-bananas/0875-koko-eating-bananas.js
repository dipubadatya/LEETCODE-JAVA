function minEatingSpeed(piles, h) {
   
    let left = 1;
    let right = Math.max(...piles);


    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        const totalHours = calculateHours(piles, mid);

        if (totalHours <= h) {
         
            right = mid;
        } else {
            
            left = mid + 1;
        }
    }

    return left;
}

function calculateHours(piles, speed) {
    let hours = 0;
    for (const pile of piles) {
        hours += Math.ceil(pile / speed);
    }
    return hours;
}