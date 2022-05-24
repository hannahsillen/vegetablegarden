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

const getCostForCrop = (plant) => {
    return getYieldForCrop(plant) * plant.crop.cost
}

const getRevenueForCrop = (plant) => {
    return getYieldForCrop(plant) * plant.crop.saleprice
}

const getProfitForCrop = (plant) => {
    return getRevenueForCrop(plant) - getCostForCrop(plant)
}

const getTotalProfit = ({ crops }) => {
    let count = 0
    for(let c in crops) {
        count += getProfitForCrop(crops[c])
    }
    return count
}

module.exports = {
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield,
    getCostForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
  };