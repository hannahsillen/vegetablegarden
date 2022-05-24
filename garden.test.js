const { getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield,
    getCostForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit } = require("./garden.js");

const corn = {
    name: "corn",
    yield: 3,
    cost: 1,
    saleprice: 2,
    factor: {
        sun: {
        low: -50,
        medium: 0,
        high: 50,
        },
        wind: {
        low: 0,
        medium: -20,
        high: -50
        },
        rain: {
        low: -100,
        medium: 0,
        high: -50
        }
    },
};
const pumpkin = {
    name: "pumpkin",
    yield: 4,
    cost: 1,
    saleprice: 3,
    factor: {
        sun: {
        low: -50,
        medium: 0,
        high: 50,
        },
        wind: {
        low: 0,
        medium: 0,
        high: -10
        },
        rain: {
        low: -100,
        medium: 0,
        high: -50
        }
    },
};
const environmentFactors = {
    sun: "medium",
    wind: "medium",
    rain: "medium"
};
const crops = [
    { crop: corn, numCrops: 5 },
    { crop: pumpkin, numCrops: 2 },
];
const input = {
    crop: corn,
    numCrops: 10,
};

describe("getYieldForPlant", () => {
    test("Get yield for plant with environment factors", () => {
        expect(getYieldForPlant(corn, environmentFactors)).toBeTruthy();
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        expect(getYieldForCrop(input, environmentFactors)).toBeTruthy();
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        expect(getTotalYield({ crops }, environmentFactors)).toBeTruthy();
    });
});

describe("getCostForCrop", () => {
    test("get the total cost for the crop", () => {
        expect(getCostForCrop(input, environmentFactors)).toBeTruthy();
    });
});

describe("getRevenueForCrop", () => {
    test("get the total revenue of the crops", () => {
        expect(getRevenueForCrop(input, environmentFactors)).toBeTruthy();
    });
});

describe("getProfitForCrop", () => {
    test("get the total profit of the crops", () => {
        expect(getProfitForCrop(input, environmentFactors)).toBeTruthy();
    });
});

describe("getTotalProfit", () => {
    test("Calculate total profit with multiple crops", () => {
        expect(getTotalProfit({ crops }, environmentFactors)).toBeTruthy();
    });
});