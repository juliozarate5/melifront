import { getProducts } from "../../services/ProductService"

describe('ProductServices tests', () => {


    test('must get 10 elements', async() => {

       const {data} =  await getProducts(0, 10);

       expect(data.length).toBe(10);

    })

    test('must get 5 elements', async() => {

        const {data} =  await getProducts(0, 5);
 
        expect(data.length).toBe(5);
 
     })

     test('must get 0 elements', async() => {

        const {data} =  await getProducts(1, 10);
 
        expect(data.length).toBe(0);
 
     })
})