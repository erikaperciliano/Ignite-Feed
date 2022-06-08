import styles from './Post.module.css';

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/erikaperciliano.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Erika Perciliano</strong>
                        <span>Software Developer</span>
                    </div>
                </div>

                <time title='May 11 at 08:13h' dateTime='2022-05-11 08:13:30'>Posted 1h ago</time>
            </header>

            <div className={styles.content}>
                <p>Hey guys 👋</p>
                <p>just uploaded another project to my portfolio. It's a project I did at NLW Return, a sensational Rocketseat event.</p>

                <p>👉{' '}<a href=''>jane.design/doctorcare</a></p>

                <p>
                    <a href=''>#newproject</a>{' '}
                    <a href=''>#nlw </a>{' '}
                    <a href=''>#rocketseat</a>
                </p>
            </div>
        </article>
    );
}