export type SubmitRequest = {
    transactionId: string,
    personal: {
        title: string,
        name: string,
        age: number,
        aliases: {
            name: string,
            nickname: string,
        }[],
    }
    payment: {
        creditCardToken: string,
    }
};

/** look-up type directly from a type */
export function getPayment(): SubmitRequest['payment'] {
    return {
        creditCardToken: '12345'
    }
}


/** For arrays (with additional type declaration) */
export type aliases = SubmitRequest['personal']['aliases'][0];