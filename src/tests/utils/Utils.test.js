import { truncateTitle } from "../../utils/Utils";

describe('Utils tests', () => {


    test('must get same caracteres', () => {
       const text="Hola";
       const chars =  truncateTitle(text);

       expect(chars).toBe(text);

    })

    test('must get 50 caracteres', () => {
        const text = "Report: SpaceX to launch at least five back-to-back Crew Dragon missions for NASA";
        const chars =  truncateTitle(text);
        
        expect(chars.length).toBe(53);
 
    })

})