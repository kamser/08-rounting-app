import { CustomLink } from '../components/CustomLink.jsx';

const i18n = {
    es:{
        title: 'Sobre nosotros',
        description: 'Hola, soy keylor y esta es la pagina de sobre nosotros',
        buttonText: 'Volver a Inicio'
    },
    en:{
        title: 'About us',
        description: 'Hello, Im keylor and this is a page about us',
        buttonText: 'Back Home'
    }
}

const useI18n = (lang) => {
    return i18n[lang] || i18n.en
}

export default function AboutPage({routeParams}){
    const i18n = useI18n(routeParams.lang ?? 'es')
    return (
        <>
            <h1>{i18n.title}</h1>
            <p>{i18n.description}</p>
            <CustomLink to={'/'}>{i18n.buttonText}</CustomLink>
        </>
    )
}