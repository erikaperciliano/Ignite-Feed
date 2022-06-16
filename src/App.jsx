import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/erikaperciliano.png',
      name: 'Erika Perciliano',
      role: 'Software Developer'
    },
    content: [
      {type: 'paragraph', content: 'Hey guys 👋'},
      {type: 'paragraph', content: 'just uploaded another project to my portfolio. Its a project I did at NLW Return, a sensational Rocketseat event.'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Hey guys 👋'},
      {type: 'paragraph', content: 'just uploaded another project to my portfolio. Its a project I did at NLW Return, a sensational Rocketseat event.'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-10 15:00:00')
  }
]

function App() {
  return (
    <>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
         {posts.map(post => {
          return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
         })}
        </main>
      </div>
    </>
  )
}

export default App
