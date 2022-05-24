const getYieldForPlant = plant => {
    return plant.yield
}

const getYieldForCrop = plant => {
    return plant.numCrops * getYieldForPlant(plant.crop)
}

const getTotalYield = ({ crops }) => {
    let count = 0
    for(let c in crops) {
        count += getYieldForCrop(crops[c])
    }
    return count
}

// const getTotalYield = function(plant){
    // for(let i in plant){
    //     return plant[i]
    //     const yieldplant = plant[i].numCrops * plant[i].crop.yield
    //     const yieldplant1 = plant[i].numCrops * plant[i].crop.yield
    //     const yieldplant2 = plant[1].numCrops * plant[1].crop.yield
    //     console.log(yieldplant1 + yieldplant2)
    //     return yieldplant1 + yieldplant2
    // }
// }

module.exports = {
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield
  };