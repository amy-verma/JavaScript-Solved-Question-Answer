// JWT- Json Web token-
// - Is like a digital Id  card.
// - Is s small, secure string of text that contains user info (id,email).

// Its is cpommonly used for
// 1. Logging in user(authetication).
// 2. Controlling Access(authorization)

// What does JWT look like .
// A JWT is a long strip made uo of 3 parts,seperated by dots
// header.payload.signature

// 1. Header
// Tells what type of tocken it is and how it's excrypted

// {
//     "alg":"HS256",
//     "typ":"JWT"
// }

// 2. Payload
// this holds the user data.You can put anything here (username,role,user Id etc)
// {
//     "username":"amit",
//     'role':"admin"
// }

// 3. Signature
// this is the secret part used to make  sure the token wann't changed
// - It is created by hashing the header+payload using the secret key(known only to the server)
