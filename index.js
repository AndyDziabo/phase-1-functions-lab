function distanceFromHqInBlocks(pickUp){
    return Math.abs(42 - pickUp);
}
function distanceFromHqInFeet(pickUp){
    return distanceFromHqInBlocks(pickUp) * 264;
}
function distanceTravelledInFeet(start, destination){
    return Math.abs(destination - start) * 264;
}
function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    
    if(distance <= 400){
        return 0;
    }else if(distance > 400 && distance <= 2000){
        return parseFloat(((distance-400) * 0.02).toFixed(2));

    }else if(distance > 2000 && distance <= 2500){
        return 25;
    }else{
        return "cannot travel that far";
    }
}