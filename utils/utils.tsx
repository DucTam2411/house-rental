import { differenceInDays } from "date-fns";

const getDiffInDay = (endDate: Date, startDate: Date) => {
    const diff = differenceInDays(endDate, startDate);
    if (diff === 0) {
        return 1;
    }
    return diff;
};

export { getDiffInDay };
