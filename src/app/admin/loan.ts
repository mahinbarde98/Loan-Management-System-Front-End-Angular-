export class Loan {
    loanId !: number;
    userFirstName !: string;
    userLastName !: String;
    payment !: boolean;
    interestRate : any;
    propertyAddress !: string;

    constructor(loan : Loan){
        this.loanId=loan.loanId;
        this.userFirstName=loan.userFirstName;
        this.userLastName=loan.userLastName;
        this.payment=loan.payment;
        this.interestRate=loan.interestRate;
        this.propertyAddress=loan.propertyAddress;
    }
}
