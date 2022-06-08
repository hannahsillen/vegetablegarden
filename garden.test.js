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
        low: -0.50,
        medium: 0,
        high: 0.50,
        },
        wind: {
        low: 0,
        medium: -0.20,
        high: -0.50
        },
        rain: {
        low: -1.00,
        medium: 0,
        high: -0.50
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
        low: -0.50,
        medium: 0,
        high: 0.50,
        },
        wind: {
        low: 0,
        medium: 0,
        high: -0.10
        },
        rain: {
        low: -1.00,
        medium: 0,
        high: -0.50
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
        expect(getYieldForPlant(corn, environmentFactors)).toBeCloseTo(2.4);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop", () => {
        expect(getYieldForCrop(input, environmentFactors)).toBeCloseTo(24);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        expect(getTotalYield({ crops }, environmentFactors)).toBeCloseTo(20);
    });
});

describe("getCostForCrop", () => {
    test("get the total cost for the crop", () => {
        expect(getCostForCrop(input, environmentFactors)).toBeCloseTo(24);
    });
});

describe("getRevenueForCrop", () => {
    test("get the total revenue of the crops", () => {
        expect(getRevenueForCrop(input, environmentFactors)).toBeCloseTo(48);
    });
});

describe("getProfitForCrop", () => {
    test("get the total profit of the crops", () => {
        expect(getProfitForCrop(input, environmentFactors)).toBeCloseTo(24);
    });
});

describe("getTotalProfit", () => {
    test("Calculate total profit with multiple crops", () => {
        expect(getTotalProfit({ crops }, environmentFactors)).toBeCloseTo(28);
    });
});