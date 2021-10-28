import type { NextPage } from 'next'
import Head from 'next/head'
import Particles from 'react-tsparticles';
import { AiFillLinkedin, AiFillGithub, AiFillMediumCircle } from "react-icons/ai";
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
            onInit={(typewriter) => {
              typewriter
                .typeString('Olá, eu sou o Luan')
                .pauseFor(2500)
                .deleteChars(6)
                .typeString('desenvolvedor front-end')
                .pauseFor(2500)
                .deleteChars(9)
                .typeString('mobile')
                .pauseFor(2500)
                .deleteChars(20)
                .typeString('o Luan')
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
        </section>
      </main>
    </div>
  );
}

export default Home
