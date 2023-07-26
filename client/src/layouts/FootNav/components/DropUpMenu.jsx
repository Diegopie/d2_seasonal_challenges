import { useGlobalContext } from "../../../context/GlobalContext";

const DropUpMenu = (props) => {

    const [{activityIdsNav}, ] = useGlobalContext();

    const displayName = (name) => {
        if (name.includes('Destination')) {
            return name.replaceAll('-', ' ').replace(' ', ' - ')
        } else {
            return name.replaceAll('-', ' ')
        }
    }

    return (
        <section className='FootNav-DropUp-Container FootNav-DropUp-ShowContaine' id='DropUp' data-show='false'>

            <article className='FootNav-DropUp-Body'>
                {
                    activityIdsNav.map(id => {
                        return (
                            <a 
                                key={id}
                                href={`#${id}`}
                                onClick={() => props.handleClick(props.menu)}
                                className='App-Button FootNav-DropUp-Button'>{displayName(id)}</a>
                        )
                    })
                }
            </article>
        </section>
    )
}

export default DropUpMenu;