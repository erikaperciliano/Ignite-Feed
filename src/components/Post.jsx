import { formatDistanceToNow } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import { Key } from 'phosphor-react';
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([
        'Very Good Devon, Congrats! 👏👏',
        'Awesome post!😍'
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: enUS,
        addSuffix: true
    });

    function handleCreateNewComment() {
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeleteOne);
    }

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title='May 11 at 08:13h' dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
               {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    }else if(line.type === 'link') {
                        return <p key={line.content}> 👉 {' '}<a href="">{line.content}</a></p>
                    }
               })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Leave your feedback</strong>

                <textarea
                    name='comment'
                    placeholder='Leave a comment'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />

                <footer>
                    <button type="submit">Publish</button>
                </footer>
            </form>

            <div className={styles.commentList}>
               {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />
                    )
               })}
            </div>
        </article>
    );
}