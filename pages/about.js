function autentificacao() {
    return 1;
}
const user = autentificacao();

export default function Home() {
    if(!user) {
        console.log('false')
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            } 
        }
    }
    return <div>About Me</div>
}
