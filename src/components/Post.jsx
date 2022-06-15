import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/erikaperciliano.png"/>
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

            <form className={styles.commentForm}>
                <strong>Leave your feedback</strong>

                <textarea
                    placeholder='Leave a comment'
                />

                <footer>
                    <button type="submit">Publish</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    );
}