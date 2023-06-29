/**
 * Intersection Types
 * 
 * - inheritance for types
 * 
 */
export { };


// ------------------------------------------------------------------------
// EXAMPLE 1
type Point2D = {
    x: number,
    y: number,
}

type Point3D = Point2D & {
    z: number,
}



// ------------------------------------------------------------------------
// EXAMPLE 2
type Person = {
    name: string;
}
type Email = {
    email: string;
}
type Phone = {
    phone: string
}

function contact(details: Person & Phone & Email) {
    console.log(
        `Dear ${details.name}.\nI hope you received an email to ${details.email},\nor a call at ${details.phone}.`
    )
}

contact({ name: "Sigi", email: "sigi@mail.com", phone: "123-24223" });
