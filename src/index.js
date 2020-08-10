const makeButton = require('./button')
import { makeColor, red, blue } from './makeColor'
import { footer } from './footer'
import { makeImage } from './image'

import styles from './footer.css'
import imageUrl from './webpack-logo.png'

const image = makeImage(imageUrl)

const button = makeButton('Yoy! a button')
button.style = blue
button.style = makeColor('pink')
document.body.appendChild(button)
document.body.appendChild(image)
document.body.appendChild(footer)