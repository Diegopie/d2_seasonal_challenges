import { useGlobalContext } from "../../../context/GlobalContext";

const DropUpMenu = (props) => {

    const [{activityIdsNav}, ] = useGlobalContext();

    return (
        <section className='FootNav-DropUp-Container'>

            <article className='FootNav-DropUp-Body'>
                {
                    activityIdsNav.map(id => {
                        return (
                            <a 
                                key={id}
                                href={`#${id}`} 
                                className='App-Button FootNav-DropUp-Button'>{id.replaceAll('-', ' ')}</a>
                        )
                    })
                }
            </article>
        </section>
    )
}

export default DropUpMenu;