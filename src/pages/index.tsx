import type { NextPage } from 'next'
import Head from 'next/head'
import Particles from 'react-tsparticles';
import { AiFillLinkedin, AiFillGithub, AiFillMediumCircle } from 'react-icons/ai';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import Typewriter from 'typewriter-effect';

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Desenvolvedor | Luan França Vieira</title>
        <meta name="description" content="Luan França Vieira" />
        <meta name="description" content="luanfv" />
        <meta name="description" content="programador" />
        <meta name="description" content="front-end developer" />
        <meta name="description" content="mobile developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.particles}>
        <Particles
          id="tsparticles"
          url="/particles.json"
        />
      </div>

      <main>
        <img src="https://avatars.githubusercontent.com/u/42809136?v=4" alt="Luan França Vieira" />

        <h1>
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('Olá, eu sou o Luan')
                .pauseFor(5000)
                .deleteChars(6)
                .typeString('desenvolvedor mobile')
                .pauseFor(5000)
                .start();
            }}
          />
        </h1>

        <section>
          <a href="https://github.com/luanfv" target="_blank" rel="noreferrer">
            <AiFillGithub size={46} color="#fff" />
          </a>

          <a href="https://www.linkedin.com/in/luanfv/" target="_blank" rel="noreferrer">
            <AiFillLinkedin size={46} color="#fff" />
          </a>

          <a href="https://medium.com/@luanfv" target="_blank" rel="noreferrer">
            <AiFillMediumCircle size={46} color="#fff" />
          </a>

          <a href="https://play.google.com/store/apps/developer?id=luanfv" target="_blank" rel="noreferrer">
            <IoLogoGooglePlaystore size={42} color="#fff" />
          </a>
        </section>
      </main>
    </div>
  );
}

export default Home
