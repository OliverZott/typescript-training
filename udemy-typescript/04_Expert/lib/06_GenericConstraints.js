"use strict";
function addFullName(obj) {
    return Object.assign(Object.assign({}, obj), { fullName: `${obj.firstName} ${obj.lastName}` });
}
const john = addFullName({
    email: "jd@mail.com",
    firstName: "John",
    lastName: "Doe",
});
console.log(john);
//# sourceMappingURL=06_GenericConstraints.js.map