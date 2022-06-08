const getYieldForPlant = (plant, factor) => {
    if(factor.sun === "low"){
        if(factor.wind === "low"){
            if(factor.rain === "low"){
                return plant.yield * (1 + plant.factor.sun.low) * (1 + plant.factor.wind.low) * (1 + plant.factor.rain.low)
            }
            else if(factor.rain === "medium"){
                return plant.yield * (1 + plant.factor.sun.low) * (1 + plant.factor.wind.low) * (1 + plant.factor.rain.medium)
            }
            else if(factor.rain === "high"){
                return plant.yield * (1 + plant.factor.sun.low) * (1 + plant.factor.wind.low) * (1 + plant.factor.rain.high)
            }
        }
        else if(factor.wind === "medium"){
            if(factor.rain === "low"){
                return plant.yield * (1 + plant.factor.sun.low) * (1 + plant.factor.wind.medium) * (1 + plant.factor.rain.low)
            }
            else if(factor.rain === "medium"){
                return plant.yield * (1 + plant.factor.sun.low) * (1 + plant.factor.wind.medium) * (1 + plant.factor.rain.medium)
            }
            else if(factor.rain === "high"){
                return plant.yield * (1 + plant.factor.sun.low) * (1 + plant.factor.wind.medium) * (1 + plant.factor.rain.high)
            }
        }
        else if(factor.wind === "high"){
            if(factor.rain === "low"){
                return plant.yield * (1 + plant.factor.sun.low) * (1 + plant.factor.wind.high) * (1 + plant.factor.rain.low)
            }
            else if(factor.rain === "medium"){
                return plant.yield * (1 + plant.factor.sun.low) * (1 + plant.factor.wind.high) * (1 + plant.factor.rain.medium)
            }
            else if(factor.rain === "high"){
                return plant.yield * (1 + plant.factor.sun.low) * (1 + plant.factor.wind.high) * (1 + plant.factor.rain.high)
            }
        }
    }
    else if(factor.sun === "medium"){
        if(factor.wind === "low"){
            if(factor.rain === "low"){
                return plant.yield * (1 + plant.factor.sun.medium) * (1 + plant.factor.wind.low) * (1 + plant.factor.rain.low)
            }
            else if(factor.rain === "medium"){
                return plant.yield * (1 + plant.factor.sun.medium) * (1 + plant.factor.wind.low) * (1 + plant.factor.rain.medium)
            }
            else if(factor.rain === "high"){
                return plant.yield * (1 + plant.factor.sun.medium) * (1 + plant.factor.wind.low) * (1 + plant.factor.rain.high)
            }
        }
        else if(factor.wind === "medium"){
            if(factor.rain === "low"){
                return plant.yield * (1 + plant.factor.sun.medium) * (1 + plant.factor.wind.medium) * (1 + plant.factor.rain.low)
            }
            else if(factor.rain === "medium"){
                return plant.yield * (1 + plant.factor.sun.medium) * (1 + plant.factor.wind.medium) * (1 + plant.factor.rain.medium)
            }
            else if(factor.rain === "high"){
                return plant.yield * (1 + plant.factor.sun.medium) * (1 + plant.factor.wind.medium) * (1 + plant.factor.rain.high)
            }
        }
        else if(factor.wind === "high"){
            if(factor.rain === "low"){
                return plant.yield * (1 + plant.factor.sun.medium) * (1 + plant.factor.wind.high) * (1 + plant.factor.rain.low)
            }
            else if(factor.rain === "medium"){
                return plant.yield * (1 + plant.factor.sun.medium) * (1 + plant.factor.wind.high) * (1 + plant.factor.rain.medium)
            }
            else if(factor.rain === "high"){
                return plant.yield * (1 + plant.factor.sun.medium) * (1 + plant.factor.wind.high) * (1 + plant.factor.rain.high)
            }
        }
    }
    else if(factor.sun === "high"){
        if(factor.wind === "low"){
            if(factor.rain === "low"){
                return plant.yield * (1 + plant.factor.sun.high) * (1 + plant.factor.wind.low) * (1 + plant.factor.rain.low)
            }
            else if(factor.rain === "medium"){
                return plant.yield * (1 + plant.factor.sun.high) * (1 + plant.factor.wind.low) * (1 + plant.factor.rain.medium)
            }
            else if(factor.rain === "high"){
                return plant.yield * (1 + plant.factor.sun.high) * (1 + plant.factor.wind.low) * (1 + plant.factor.rain.high)
            }
        }
        else if(factor.wind === "medium"){
            if(factor.rain === "low"){
                return plant.yield * (1 + plant.factor.sun.high) * (1 + plant.factor.wind.medium) * (1 + plant.factor.rain.low)
            }
            else if(factor.rain === "medium"){
                return plant.yield * (1 + plant.factor.sun.high) * (1 + plant.factor.wind.medium) * (1 + plant.factor.rain.medium)
            }
            else if(factor.rain === "high"){
                return plant.yield * (1 + plant.factor.sun.high) * (1 + plant.factor.wind.medium) * (1 + plant.factor.rain.high)
            }
        }
        else if(factor.wind === "high"){
            if(factor.rain === "low"){
                return plant.yield * (1 + plant.factor.sun.high) * (1 + plant.factor.wind.high) * (1 + plant.factor.rain.low)
            }
            else if(factor.rain === "medium"){
                return plant.yield * (1 + plant.factor.sun.high) * (1 + plant.factor.wind.high) * (1 + plant.factor.rain.medium)
            }
            else if(factor.rain === "high"){
                return plant.yield * (1 + plant.factor.sun.high) * (1 + plant.factor.wind.high) * (100 + plant.factor.rain.high)
            }
        }
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