import './sass/global.scss'
import { getFormattedDate } from './utils/getFormattedDate'
import image from './assets/images/illustration-article.svg'

function App() {

  const formattedDate = getFormattedDate('en')

  return (
    <main className='container'>
      <section className='card'>
        <picture className='card-picture__container'>
          <img src={image} alt="" className='card-picture' />
        </picture>

        <div className='publish-date'>
          <span>Learning</span>
          <p>Published {formattedDate()}</p>
        </div>

        <div className='card-information'>
          <h1>
            html & css <span>foundations</span>
          </h1>
          <p>
            These languages are the backbone of every website, defining structure, content, and presentation.
          </p>

        </div>

        <div className='card-avatar'>
          <span></span>
          <p>Greg Hooper</p>
        </div>
      </section>
    </main>
  )
}

export default App
