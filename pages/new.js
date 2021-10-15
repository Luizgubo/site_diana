import Router from 'next/router'
function autentificacao() {
    return 1;
}
const user = autentificacao();

export default function Home() {

    if(!user) {
        console.log('vai redirecionar');
        return {
            redirect: {
                destination: '/about',
                permanent: false,
            } 
        }
    }
    return <div>Novo poema teste</div>
}
