import ContactCards from "./ContactCards";

const Info = (props) => {

    return (
        <section className='FootNav-DropUp-Container FootNav-Info-ShowContaine' id='Info' data-show='false'>
            <article className='FootNav-Info-Body App-TextCenter'>
                <h2>Hello, Guardians!</h2>
            </article>
            <article className='FootNav-Info-Body'>
                <p>Destiny 2 Seasonal Challenges is designed to help you make the most of your time.</p>
                <p>Visit the <span><a className='App-Link' href="/activities">Activities</a></span> page to find an activity in the game you want to do. This will show you all the current Seasonal Challenges you can knock out at the same time!</p>
                <p>Mark challenges as complete to hide them from view and use the togglers at the top of each Activity to bring them back (I aim to make this easier in the <span><a className='App-Link' href='#future'>future</a></span>)</p>
            </article>
            <article id='feedback' className='FootNav-Info-Body'>
                <h2>Feedback</h2>
                <p>Tell me what you think! What works, what doesn't, what should be added, what should be changed? But be nicer than we generally are to Bungie devs 😅</p>
                <article className="App-FlexCenter">
                    <ContactCards
                        link='mailto:diegopie@outlook.com?subject=Feedback For Destiny 2 Seasonal Challenges&body=Hey Diego, I have some feedback for your website!'
                        img='/assets/img/icons/footer-info/iconmonstr-paper-plane-5.svg'
                        title='Email Me!'
                    />
                    <ContactCards
                        link='https://www.instagram.com/diegopie/'
                        img='/assets/img/icons/footer-info/Instagram_Glyph_Gradient_RGB.svg'
                        title='IntantGram Me!'
                    />
                    <ContactCards
                        link='https://twitter.com/Diegopie'
                        img='/assets/img/icons/footer-info/twit.svg'
                        title='Twit Me!'
                    />
                </article>
            </article>
            <article className='FootNav-Info-Body'>
                <h2>Support</h2>
                <p>Boy does this stuff take a long time to make, I can get raid exotics faster than it takes to add features 😅</p>
                <p>If this app has added value and you feel like showing your support, check out my Buy Me a Coffee page or visit our <a className='App-Link' href='https://www.amway.com/myshop/ParkerandDiego' target='_blank' rel='noreferrer'>eCommerce store</a>! We have a plenty of options to refill your gamer juice so you can stay in the grind 💪</p>
                <div className='App-FlexCenter'>
                    <a className='App-TextCenter' href='https://www.amway.com/en_US/myshop/ParkerandDiego' rel='noreferrer' target='_blank'><img
                        className='FootNav-Info-SupportImgPies'
                        src='/assets/img/icons/footer-info/the-pies.png'
                        alt='The Pies Logo'
                    ></img>
                    </a>
                </div>
                <div className='App-FlexCenter'>
                    <a className='App-TextCenter' href='https://www.buymeacoffee.com/diegopie' rel='noreferrer' target='_blank'><img
                        className='FootNav-Info-SupportImg'
                        src='/assets/img/icons/footer-info/bmc-full-logo.png'
                        alt='Buy Me a Coffee Logo'
                    ></img>
                    </a>
                </div>
            </article>
            <article id='future' className='FootNav-Info-Body mb-5'>
                <h2><a href="https://www.youtube.com/watch?v=ERYukmba5Vg" rel="noreferrer" target="_blank">What Comes Next?</a></h2>
                <p>I have much more respect for game developers after learning web development 😅 This stuff is hard and the Destiny API is scary! I would love to get a grip on how it works so that I can pull data straight from your accounts and remove the need for you to manually update your progress 😪</p>
                <p>But that is a ton of work just to learn how to use it let alone update the site to get it to work 😥 My focus is getting a job in web, so I have to balance learning technologies  vs making polished sites 😒</p>
                <p>Right now, I'm leaning more on making an actual login system or giving you the ability to track Seasonal Triumphs as well. I typically play once every couple weeks so getting the most I can done in one session is critical  for me and there are a lot of Triumphs to keep up with that go away at the end of the Destiny year 😔</p>
                <p>But feel free to send me <a className="App-Link" href="#feedback">Feedback</a> on what you would like to see first!</p>
                <article>
                    <h3 className="App-TextCenter mt-3 h4">Hire Me?</h3>
                    <p>Have you been unjustly ignored for not having a web presence? Does the Man have your brand overlooked? Do your employes keep slacking and evening stealing?! If you need someone to <em>actually</em> serve your coding needs, <a href="https://www.youtube.com/watch?v=hZ5djcbM2fU" rel="noreferrer" target="_blank">Better Call Sau-</a></p>
                    <p className='small'>No but really, give me a job plz thanks</p>
                    <article className="App-FlexCenter">
                        <ContactCards
                            link='https://diegopie.herokuapp.com/'
                            img='/assets/img/icons/footer-info/site.svg'
                            title='Check Out My Portfolio!'
                        />
                        <ContactCards
                            link='https://github.com/Diegopie'
                            img='/assets/img/icons/footer-info/github.svg'
                            title='Find Me on GitHub!'
                        />
                        <ContactCards
                            link='https://www.linkedin.com/in/diego-hernandez-7327381b2'
                            img='/assets/img/icons/footer-info/iconmonstr-linkedin-3.svg'
                            title='Find Me on LinkedIn!'
                        />
                        <ContactCards
                            link='/assets/HernandezD_Resume.pdf'
                            img='/assets/img/icons/footer-info/iconmonstr-cv-3.svg'
                            title='Download My Resume!'
                        />
                    </article>
                </article>
            </article>

        </section>
    )
};

export default Info;