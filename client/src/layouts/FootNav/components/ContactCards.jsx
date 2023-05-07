const ContactCards = (props) => {

    
    return (
        <article className='FootNav-ContactCards-container'>
            <a 
                href={props.link}
                target='_blank'
                rel="noreferrer"
                title={props.title}
            >
                <img className='FootNav-ContactCards-img'
                    src={props.img}
                    alt={props.altText}
                />
            </a>
        </article>
    );
};

export default ContactCards;