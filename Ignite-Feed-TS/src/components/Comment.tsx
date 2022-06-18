import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/erikaperciliano.png" alt=""/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Erika Perciliano</strong>
                            <time title='May 11 at 08:13h' dateTime='2022-05-11 08:13:30'>About 1 hr ago</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Remove comment'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                    <footer>
                        <button onClick={handleLikeComment}>
                            <ThumbsUp />
                            Clap <span>{likeCount}</span>
                        </button>
                    </footer>
            </div>
        </div>
    );
}