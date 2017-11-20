import { OrderByPipe } from './orderBy.pipe'

describe("OrderByPipe", () => {
    let pipe: OrderByPipe;

    beforeEach(() => pipe = new OrderByPipe());

    it('should be able to handle null', () => {
        expect(pipe.transform(null, 'bla')).toBeNull()
    })
    it('should order a collection by the given string property name', () => {
        const unsorted = [
            { amount: 3 },
            { amount: 2 },
            { amount: 1 },
        ];
        const sorted = [
            { amount: 1 },
            { amount: 2 },
            { amount: 3 },
        ]

        expect(pipe.transform(unsorted, 'amount')).toEqual(sorted);
    })

    it('should order a collection by the given string property name', () => {
        const unsorted = [
            { title: 'd' },
            { title: 'a' },
            { title: 'b' },
        ];
        const sorted = [
            { title: 'a' },
            { title: 'b' },
            { title: 'd' },
        ]

        expect(pipe.transform(unsorted, 'title')).toEqual(sorted);
    })

    it('should reverse order on the second click', () => {
        const unsorted = [
            { title: 'd' },
            { title: 'a' },
            { title: 'b' },
        ];
        const sorted = [
            { title: 'a' },
            { title: 'b' },
            { title: 'd' },
        ]
        const sortedReverse = sorted.reverse();
        expect(pipe.transform(pipe.transform(unsorted, 'title'), 'title')).toEqual(sortedReverse);
    })
})