function runProgram (programText) {
  programElement = document.createElement('script')
  programElement.text = programText
  bodyNode = document.body
  bodyNode.appendChild(programElement)
}
