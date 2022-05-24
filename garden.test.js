const { getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield,
    getCostForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit } = require("./garden.js");

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factor: {
            sun: {
            low: -50,
            medium: 0,
            high: 50,
            },
        },
    };
    const environmentFactors = {
        sun: "low",
    };
    test("Get yield for plant with environment factors", () => {
        expect(getYieldForPlant(corn, environmentFactors)).toBeTruthy();
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factor: {
                sun: {
                low: -50,
                medium: 0,
                high: 50,
                },
            },
        };
        const environmentFactors = {
            sun: "low",
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input, environmentFactors)).toBeTruthy();
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
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
            },
        };
        const environmentFactors = {
            sun: "low",
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops }, environmentFactors)).toBeTruthy();
    });

    test("Calculate total yield with 0 amount", () => {
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
            },
        };
        const environmentFactors = {
            sun: "low",
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops }, environmentFactors)).toBeFalsy();
    });
});

describe("getCostForCrop", () => {
    const corn = {
        name: "corn",
        yield: 30,
        cost: 1,
        saleprice: 2,
        factor: {
            sun: {
            low: -50,
            medium: 0,
            high: 50,
            },
        },
    };
    const environmentFactors = {
        sun: "low",
    };
    const input = {
        crop: corn,
        numCrops: 10,
    };
    test("get the total cost for the crop", () => {
        expect(getCostForCrop(input, environmentFactors)).toBeTruthy();
    });
});

describe("getRevenueForCrop", () => {
    const corn = {
        name: "corn",
        yield: 30,
        cost: 1,
        saleprice: 2,
        factor: {
            sun: {
            low: -50,
            medium: 0,
            high: 50,
            },
        },
    };
    const environmentFactors = {
        sun: "low",
    };
    const input = {
        crop: corn,
        numCrops: 10,
    };
    test("get the total revenue of the crops", () => {
        expect(getRevenueForCrop(input, environmentFactors)).toBeTruthy();
    });
});

describe("getProfitForCrop", () => {
    const corn = {
        name: "corn",
        yield: 30,
        cost: 1,
        saleprice: 2,
        factor: {
            sun: {
            low: -50,
            medium: 0,
            high: 50,
            },
        },
    };
    const environmentFactors = {
        sun: "low",
    };
    const input = {
        crop: corn,
        numCrops: 10,
    };
    test("get the total profit of the crops", () => {
        expect(getProfitForCrop(input, environmentFactors)).toBeTruthy();
    });
});

describe("getTotalProfit", () => {
    test("Calculate total profit with multiple crops", () => {
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
            },
        };
        const environmentFactors = {
            sun: "low",
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalProfit({ crops }, environmentFactors)).toBeTruthy();
    });
});