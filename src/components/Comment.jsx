import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src="https://github.com/erikaperciliano.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Erika Perciliano</strong>
                            <time title='May 11 at 08:13h' dateTime='2022-05-11 08:13:30'>About 1 hr ago</time>
                        </div>

                        <button title='Remove comment'>
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>Very Good Devon, Congrats!! 👏👏</p>
                </div>

                    <footer>
                        <button>
                            <ThumbsUp />
                            Clap <span>20</span>
                        </button>
                    </footer>
            </div>
        </div>
    );
}