/**
 * Differences between Types and Interfaces
 * 
 */


export interface InputProps {
    type: 'text' | 'email';
    text: string;
    onChange: (value: string) => void;  // property
    onChange2(value: string): void;     // method
}


// Interfaces must have body, so they don't support:
//  - short-hand-function-syntax
//  - interfaces of primitive-types
//  - names for types-unions
type InputOnChange = (value: InputValue) => void;   // short-hand-function-syntax
type InputValue = string;                           // types of primitive-types
type NewType = 'text' | 'email';                    // type-union 

export type InputProps2 = {
    type: NewType;
    text: string;
    onChange: InputOnChange;
    // onChange2: InputOnChange2;  // not working?!
}


function InputOnChange2(value: string): void {
    // todo
};