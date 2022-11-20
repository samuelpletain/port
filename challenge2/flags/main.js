import './scss/style.scss'
import flagIcon from './icon/flag.svg'
import view from './modules/view.js'
import flags from './modules/flags.js'
import flashcards from './modules/flashcards.js'

const app = document.getElementById('app')

const dataset = await flags.getFlags()

flashcards.setRegions(dataset)  
dataset.sort((a, b) => a.name.common.localeCompare(b.name.common))


const links = [
  {
    title: 'Flags',
    icon: flagIcon,
    render: function(app) {
      view.renderFlags(app, dataset)
    }
  },
  {
    title: 'Flashcards',
    icon: flagIcon,
    render: function(app) {
      view.renderFlashcards(app, flashcards.getRegions())
    }
  },
  {
    title: 'Quizzes',
    icon: flagIcon,
    render: function(app) {
      view.renderQuizzes(app)
    }
  }
]

view.renderHome(app, links)