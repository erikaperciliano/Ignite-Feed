import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Erika Perciliano"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
          <Post
            author="Marcelo Sanches"
            content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          />
        </main>
      </div>
    </>
  )
}

export default App