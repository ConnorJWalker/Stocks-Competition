export interface ISignupForm {
    profilePicture: string
    displayName: string
    discordUsername: string
    displayColour: string
    password: string
    passwordConfirm: string
    freetradeCookie: string 
}

export default function createSignupForm(): ISignupForm {
    let displayColour = '#'
    
    // Generate initial random colour
    const validCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
    for (let i = 0; i < 6; i++) {
        displayColour += validCharacters[Math.floor(Math.random() * validCharacters.length)]
    }

    return {
        profilePicture: '',
        displayName: '',
        discordUsername: '',
        displayColour,
        password: '',
        passwordConfirm: '',
        freetradeCookie: ''
    }
}
