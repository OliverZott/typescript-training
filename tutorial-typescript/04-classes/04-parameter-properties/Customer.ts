class CustomerPara {

    constructor(private _firstName: string, private _lastName: string) { }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
}

let myCustomerPara = new CustomerPara("Martin", "Dixon");

myCustomerPara.firstName = "Susan";
myCustomerPara.lastName = "Public";

console.log(myCustomerPara.firstName);
console.log(myCustomerPara.lastName);