const {filterByTerm} = require('../../src/filterByTerm');

// Check filter function working properly

describe('filter function', () => {
    
    test('search by term functionality', () => {
        const input = [
            {id: 1, url: 'https://www.url1.com'},
            {id: 2, url: 'https://www.url2.com'},
            {id: 3, url: 'https://www.link3.com'},
        ];
    
        const output = [{id: 3, url: 'https://www.link3.com'}];
    
        expect(filterByTerm(input, "link")).toEqual(output);
        expect(filterByTerm(input, "LINK")).toEqual(output);
    });

    test("search term cannot be empty", () => {

        const input = [
            {id: 1, url: 'https://www.url1.com'},
            {id: 2, url: 'https://www.url2.com'},
            {id: 3, url: 'https://www.link3.com'},
        ];

        expect(()=>{
            filterByTerm(input, '');
        }).toThrowError(Error("Search term cannot be empty"));
    });

    test("input cannot be empty", () => {
        const input = [];
        expect(()=>{
            filterByTerm(input, 'search');
        }).toThrowError(Error("InputArr cannot be empty"));
    })

});


