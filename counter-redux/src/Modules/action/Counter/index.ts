export const INCREASE = "counter/INCREASE" as const;
export const DECREASE = "counter/DECREASE" as const;

export type counterState = {
    number:number,
};

type increaseType = {
    type:typeof INCREASE,
};

type decreaseType = {
    type:typeof DECREASE,
};

export const increase = ():increaseType => ({
    type:INCREASE
});

export const decrease = ():decreaseType => ({
    type:DECREASE
});

export type actionType = 
    | increaseType
    | decreaseType;