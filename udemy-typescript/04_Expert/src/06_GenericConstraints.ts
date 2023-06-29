type NameFields = { firstName: string, lastName: string };

function addFullName<T extends NameFields>(obj: T) {
    return {
        ...obj,
        fullName: `${obj.firstName} ${obj.lastName}`
    };
}

const john = addFullName({
    email: "jd@mail.com",
    firstName: "John",
    lastName: "Doe",
});

console.log(john);