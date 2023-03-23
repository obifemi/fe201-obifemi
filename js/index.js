// const button = document.createElement('button')
// button.innerText = 'Increase font size'

// button.addEventListener('click', () => {
//   alert('You clicked the button!')
// })

// document.body.appendChild(button)

// const startApp = () => {
//   if (!document.body) {
//     throw new Error('Your HTML page is missing a <body> tag!')
//   }
// }
// const decreaseFontSizeButton = document.createElement('button')
// decreaseFontSizeButton.textContent = 'Decrease font size'

// const resetFontSizeButton = document.createElement('button')
// resetFontSizeButton.textContent = 'Reset font size'

// document.body.appendChild(button)
// document.body.appendChild(decreaseFontSizeButton)
// document.body.appendChild(resetFontSizeButton)

// const p = document.createElement('p')
// p.textContent = 'Hello World!'
// p.style.color = 'red'
// document.body.appendChild(p)

// let fontSize = 1

// button.addEventListener('click', () => {
//   fontSize = fontSize + 1
//   p.style.fontSize = `${fontSize}em`
// })

// decreaseFontSizeButton.addEventListener('click', () => {
//   fontSize = fontSize - 1
//   p.style.fontSize = `${fontSize}em`
// })

// const counterDisplay = document.createElement('p')
// counterDisplay.textContent = '0'
// document.body.appendChild(counterDisplay)

// let counter = 0

// button.addEventListener('click', () => {
//   counter = counter + 1
//   counterDisplay.textContent = counter
// })

// decreaseFontSizeButton.addEventListener('click', () => {
//   counter = counter - 1
//   counterDisplay.textContent = counter
// })

// resetFontSizeButton.addEventListener('click', () => {
//   counter = 0
//   fontSize = 1
//   counterDisplay.textContent = counter

//   p.style.fontSize = '1em'
// })

// button.className = 'btn btn-primary'
// decreaseFontSizeButton.className = 'btn btn-secondary'
// resetFontSizeButton.className = 'btn btn-warning'

class App {
  counter = 0
  fontSize = 1

  incrementCounter() {
    this.counter = this.counter + 1
  }
  decrementCounter() {
    this.counter = this.counter - 1
  }
  resetCounter() {
    this.counter = 0
  }
  increaseFontSize() {
    this.fontSize = this.fontSize + 1
  }
  decreaseFontSize() {
    this.fontSize = this.fontSize - 1
  }
  resetFontSize() {
    this.fontSize = 1
  }

  handleIncreaseFontSizeButtonClick() {
    this.increaseFontSize()
    this.incrementCounter()
  }

  handleDecreaseFontSizeButtonClick() {
    this.decreaseFontSize()
    this.decrementCounter()
  }

  handleResetFontSizeButtonClick() {
    this.resetFontSize()
    this.resetCounter()
  }

  bindEvents() {
    const increaseFontSizeButton = document.querySelector('#increase')
    const decreaseFontSizeButton = document.querySelector('#decrease')
    const resetFontSizeButton = document.querySelector('#reset')

    increaseFontSizeButton.addEventListener('click', () => {
      this.handleIncreaseFontSizeButtonClick()
      this.updateUI()
    })

    decreaseFontSizeButton.addEventListener('click', () => {
      this.handleDecreaseFontSizeButtonClick()
      this.updateUI()
    })

    resetFontSizeButton.addEventListener('click', () => {
      this.handleResetFontSizeButtonClick()
      this.updateUI()
    })
  }

  template = `
    <button id="increase" class="btn btn-primary">Increase font size</button>
    <button id="decrease" class="btn btn-secondary">Decrease font size</button>
    <button id="reset" class="btn btn-warning">Reset font size</button>
    <p id="counter-display">0</p>
    <p id="message">Hello World!</p>
  `

  render() {
    document.querySelector('#app').innerHTML = this.template
  }

  updateUI() {
    document.querySelector('#counter-display').innerText = this.counter
    document.querySelector('#message').style.fontSize = `${this.fontSize}em`
  }

  constructor() {
    this.render()
    this.bindEvents()
  }
}

const app = new App()
