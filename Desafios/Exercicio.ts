type VerifyUser = (user: UserType, sentdata: UserType) => boolean

type UserType = { username: string, password: string }

const verifyUser: VerifyUser = (user, sentdata) => {
    return (
        user.username === sentdata.username && user.password === user.password
    )
}

const bdUser: UserType = {
    username: 'Vitor',
    password: '12345678'
}

const sentdata: UserType = {
    username: 'Vitor',
    password: '12345678'
}
const loggedIn = verifyUser(bdUser, sentdata)

console.log(loggedIn)




