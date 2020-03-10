import {expect} from "chai";
import {markToCharge} from "../src/main.js"

describe("Start test suite", ()=> {
    it("Si envío una lista con una transacción pendiente de cobro válida, debe devolver 1 elemento'", () => {

        let t = [
            {
                id: 12323,
                course : {
                    id: 22222,
                    status: "AVAILABLE",
                    title: "Course title",
                    created_at: "2020-02-20 10:00:00",
                    from_datetime: "2020-02-27 15:30:00",
                    min_assistants: 1,
                    assistants: 5,
                    is_cancelable: true
        
                },
                user: 11111,
                status: "PENDING",
                type: "CHARGE",
                profile: "MASTER",
                total_amount: 10.5,
            },
        ];
        
        expect(markToCharge(t)).to.have.lengthOf(1);
    })
    
    it("Si envío una lista con dos transacciones pendientes de cobro válidas, debe devolver 2 elementos'", () => {


        let t = [
            {
                id: 11111,
                course : {
                    id: "C-11111",
                    status: "AVAILABLE",
                    title: "Course title",
                    created_at: "2020-02-20 10:00:00",
                    from_datetime: "2020-02-27 15:30:00",
                    min_assistants: 1,
                    assistants: 5,
                    is_cancelable: true
        
                },
                user: 11111,
                status: "PENDING",
                type: "CHARGE",
                profile: "MASTER",
                total_amount: 10.5,
            },
            {
                id: 22222,
                course : {
                    id: "C-22222",
                    status: "AVAILABLE",
                    title: "Course title",
                    created_at: "2020-02-20 10:00:00",
                    from_datetime: "2020-02-29 15:30:00",
                    min_assistants: 1,
                    assistants: 5,
                    is_cancelable: true
        
                },
                user: 11111,
                status: "PENDING",
                type: "CHARGE",
                profile: "MASTER",
                total_amount: 10.5,
            },
        ];
        
        expect(markToCharge(t)).to.have.lengthOf(2);
    })

    it("Si envío una lista con una transacción pendiente de cobro sin que llege al mínimo de asistentes, debe devolver 0 elementos'", () => {

        let t = [
            {
                id: 12323,
                course : {
                    id: 22222,
                    status: "AVAILABLE",
                    title: "Course title",
                    created_at: "2020-02-20 10:00:00",
                    from_datetime: "2020-02-27 15:30:00",
                    min_assistants: 7,
                    assistants: 5,
                    is_cancelable: true
        
                },
                user: 11111,
                status: "PENDING",
                type: "CHARGE",
                profile: "MASTER",
                total_amount: 10.5,
            },
        ];
        
        expect(markToCharge(t)).to.have.lengthOf(0);
    })

    it("Si envío una lista con una transacción pendiente de cobro con asistentes igual al mínimo, debe devolver 1 elemento'", () => {

        let t = [
            {
                id: 12323,
                course : {
                    id: 22222,
                    status: "AVAILABLE",
                    title: "Course title",
                    created_at: "2020-02-20 10:00:00",
                    from_datetime: "2020-02-27 15:30:00",
                    min_assistants: 5,
                    assistants: 5,
                    is_cancelable: true
        
                },
                user: 11111,
                status: "PENDING",
                type: "CHARGE",
                profile: "MASTER",
                total_amount: 10.5,
            },
        ];
        
        expect(markToCharge(t)).to.have.lengthOf(1);
    })

    it("Si envío una lista con una transacción pendiente de cobro con un importe inferior a cero, debe devolver 0'", () => {

        let t = [
            {
                id: 12323,
                course : {
                    id: 22222,
                    status: "AVAILABLE",
                    title: "Course title",
                    created_at: "2020-02-20 10:00:00",
                    from_datetime: "2020-02-27 15:30:00",
                    min_assistants: 5,
                    assistants: 5,
                    is_cancelable: true
        
                },
                user: 11111,
                status: "PENDING",
                type: "CHARGE",
                profile: "MASTER",
                total_amount: -10.5,
            },
        ];
        
        expect(markToCharge(t)).to.have.lengthOf(0);
    })

    it("Si envío una lista con una transacción pendiente de cobro con un importe igual a cero, debe devolver 1 y marcarla como primera clase gratuita'", () => {

        let t = [
            {
                id: 12323,
                course : {
                    id: 22222,
                    status: "AVAILABLE",
                    title: "Course title",
                    created_at: "2020-02-20 10:00:00",
                    from_datetime: "2020-02-27 15:30:00",
                    min_assistants: 5,
                    assistants: 5,
                    is_cancelable: true
        
                },
                user: 11111,
                status: "PENDING",
                type: "CHARGE",
                profile: "MASTER",
                total_amount: 0,
            },
        ];
        
        let makeTransitions = markToCharge(t);

        expect(makeTransitions).to.have.lengthOf(1);
        expect(makeTransitions[0]).to.have.property("payload", "first_course_discount");
    })
})
