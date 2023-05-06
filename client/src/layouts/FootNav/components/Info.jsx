import ContactCards from "./ContactCards";

const Info = (props) => {

    return (
        <section className='FootNav-DropUp-Container FootNav-Info-ShowContaine' id='Info' data-show='false'>
            <article className='FootNav-Info-Body App-TextCenter'>
                <h2>Hello, Gaurdians!</h2>
            </article>
            <article className='FootNav-Info-Body'>
                <p>Destiny 2 Seasonal Challenges is designed to help you make the most of your time.</p>
                <p>Visit the <span><a className='App-Link' href="/activities">Activities</a></span> page to find an activity in the game you want to do. This will show you all the current Seasonal Challenges you can knock out at the same time!</p>
                <p>Mark challenges as complete to hide them from view and use the togglers at the top of each Activity to bring them back (I aim to make this easier in the <span><a className='App-Link' href='#future'>future</a></span>)</p>
            </article>
            <article id='feedback' className='FootNav-Info-Body'>
                <h2>Feedback</h2>
                <p>Tell me what you think! But be nicer than we generally are to Bungie devs 😅</p>
                <article>
                    <ContactCards
                        link='mailto:diegopie@outlook.com'
                        img='/assets/img/icons/iconmonstr-paper-plane-5.svg'
                        title='Email Me!'
                    />
                </article>
            </article>
            <article className='FootNav-Info-Body'>
                <h2>Support</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus exercitationem voluptas quia quidem deserunt tenetur, perferendis inventore tempore, minus temporibus fugiat vel eius </p>
            </article>
            <article id='future' className='FootNav-Info-Body mb-5'>
                <h2><a href="https://www.youtube.com/watch?v=ERYukmba5Vg" target="_blank">What Comes Next?</a></h2>
                <p>I have much more respect for game developers after learning web devlopment 😅 This stuff is hard and the Destiny API is scary! I would love to get a grip on how it works so that I can pull data straight from your accounts and remove the need for you to manually update your progress 😪</p>
                <p>But that is a ton of work just to learn how to use it let alone update the site to get it to work 😥 My focuse is getting a job in web, so I have to balance learning technogies vs making polished sites 😒</p>
                <p>Right now, I'm leaning more making an actual loggin system or giving you the ability to track Seasonal Triumphs as well. I typically play once every couple weeks so getting the most I can done in one session is crital for me and there are a lot of Triumphs to keep up with that go away at the end of the Destiny year</p>
                <p>But feel free to send me <a className="App-Link" href="#feedback">Feedback</a> on what you would like to see first!</p>
            </article>
        </section>
    )
};

export default Info;