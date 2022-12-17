import Launcher from './features/launcher'
import './tailwind.css'

const container = document.createElement('div')
container.id = 'rokket-launcher-container'

document.body.appendChild(container)

const launcher = new Launcher({
	target: document.getElementById('rokket-launcher-container')
})

export default launcher
