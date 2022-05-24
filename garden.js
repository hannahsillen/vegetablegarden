const getYieldForPlant = (plant, factor) => {
    if(factor.sun == "low"){
        return plant.yield * (100 + plant.factor.sun.low)
    }
    else if(factor.sun == "medium"){
        return plant.yield * (100 + plant.factor.sun.medium)
    }
    else if(factor.sun == "high"){
        return plant.yield * (100 + plant.factor.sun.high)
    }
}

const getYieldForCrop = (plant, factor) => {
    return plant.numCrops * getYieldForPlant(plant.crop, factor)
}

const getTotalYield = ({ crops }, factor) => {
    let count = 0
    for(let c in crops) {
        count += getYieldForCrop(crops[c], factor)
    }
    return count
}

const getCostForCrop = (plant, factor) => {
    return getYieldForCrop(plant, factor) * plant.crop.cost
}

const getRevenueForCrop = (plant, factor) => {
    return getYieldForCrop(plant, factor) * plant.crop.saleprice
}

const getProfitForCrop = (plant, factor) => {
    return getRevenueForCrop(plant, factor) - getCostForCrop(plant, factor)
}

const getTotalProfit = ({ crops }, factor) => {
    let count = 0
    for(let c in crops) {
        count += getProfitForCrop(crops[c], factor)
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