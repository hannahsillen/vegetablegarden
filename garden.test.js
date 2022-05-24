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
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

describe("getCostForCrop", () => {
    const corn = {
        name: "corn",
        yield: 3,
        cost: 1,
        saleprice: 2
    };
    const input = {
        crop: corn,
        numCrops: 10,
    };
    test("get the total cost for the crop", () => {
        expect(getCostForCrop(input)).toBeTruthy();
    });
});

describe("getRevenueForCrop", () => {
    const corn = {
        name: "corn",
        yield: 3,
        cost: 1,
        saleprice: 2
    };
    const input = {
        crop: corn,
        numCrops: 10,
    };
    test("get the total revenue of the crops", () => {
        expect(getRevenueForCrop(input)).toBeTruthy();
    });
});

describe("getProfitForCrop", () => {
    const corn = {
        name: "corn",
        yield: 3,
        cost: 1,
        saleprice: 2
    };
    const input = {
        crop: corn,
        numCrops: 10,
    };
    test("get the total profit of the crops", () => {
        expect(getProfitForCrop(input)).toBeTruthy();
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
            cost: 1,
            saleprice: 2
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            cost: 1,
            saleprice: 3
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalProfit({ crops })).toBeTruthy();
    });
});