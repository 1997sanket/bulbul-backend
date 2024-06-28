export const Home = () => {
    return (
        <main>
            <div className="container text-center">

                <div className="row">
                    <div className="col">
                        <div className="image-container">
                            <img src={`${process.env.PUBLIC_URL}/images/bulbul.jpeg`} alt="Bulbul logo" />
                        </div>
                    </div>
                    <div className="col">
                        <section>
                            <p>
                                Welcome to <b>BulBul</b>, your digital sanctuary for boundless conversations and connections.
                                We're thrilled to have you join our vibrant community. Chirper is your platform to
                                connect with friends, share your passions, and explore the world, one chirp at a time.

                                Our user-centric design welcomes voices from every corner of the globe, igniting
                                profound conversations, fostering connections, and nurturing empathy. We believe in the
                                transformative power of dialogue, and we're excited to have you be part of it.

                                Chirper isn't just a social platform; it's a canvas for your self-expression and a
                                wellspring of inspiration. Share stories, celebrate milestones, and champion causes
                                close to your heart. Engage in spirited debates, embrace fresh perspectives, and expand
                                your horizons.

                                With intuitive features, a supportive community, and a commitment to your online
                                journey, we invite you to make Chirper your digital haven. Together, we'll craft a space
                                where every chirp matters, and where the world unites to connect, learn, and flourish.

                                Spread your wings, explore our features, and let your voice take flight. Your Chirper
                                journey begins now. Welcome aboard!
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    )
}