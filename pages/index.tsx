import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { Inter } from '@next/font/google'
import { SiJavascript, SiReact, SiNodedotjs, SiTypescript, SiGit, SiGoogleplay, SiAppstore, SiGithub, SiLinkedin  } from 'react-icons/si'

import styles from '../styles/Home.module.css'

interface HomeProps {
  avatar: string;
  name: string;
  bio: string;
  username: string;
  location: string;
  github: string;
}

const inter = Inter({ subsets: ['latin'] })

export default function Home({ avatar, name, bio, github, location, username }: HomeProps) {
  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="name" content={name} />
        <meta name="description" content={bio} />
        <meta name="github" content={github} />
        <meta name="location" content={location} />
        <meta name="username" content={username} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${inter.className} ${styles.main}`}>
        <section className={`${styles.description}`}>
          <div className={`${styles.containerLeft}`}>
            <h1>
              Olá 👋, <br />
              meu nome é <br />
              <strong>{name}</strong>, <br />
              sou JavaScript Developer
            </h1>

            <div>
              <a href="https://www.linkedin.com/in/luanfv/" target="_blank" rel="noreferrer">
                <SiLinkedin size={35} title="Linkedin" />
              </a>
              
              <a href={github} target="_blank" rel="noreferrer">
                <SiGithub size={35} title="Github" />
              </a>
            </div>
          </div>
          
          <div className={`${styles.containerRight}`}>
            <Image
              src={avatar}
              alt={name}
              width={180}
              height={180}
              priority
            />
          </div>
        </section>

        <section className={`${styles.section}`}>
          <h2>Sobre mim</h2>
          <label>{bio}</label>
        </section>

        <section className={`${styles.section}`}>
          <h2>Tecnologias</h2>
          
          <div className={`${styles.stack}`}>
            <SiJavascript size={60} title="JavaScript" />
            <SiTypescript size={60} title="TypeScript" />
            <SiReact size={60} title="React | React Native" />
            <SiNodedotjs size={60} title="NodeJS" />
            <SiGit size={60} title="Git" />
            <SiGoogleplay size={60} title="Google Play" />
            <SiAppstore size={60} title="App Store" />
          </div>
        </section>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: response } = await axios.get('https://api.github.com/users/luanfv');

  return {
    props: {
      avatar: response.avatar_url,
      name: response.name,
      bio: response.bio,
      username: response.login,
      location: response.location,
      github: response.html_url,
    },
    revalidate: 24 * 60,
  };
}
