const path = require('path')
const simple = require('simple-icons')
const pascalCase = require('pascal-case')
const fs = require('fs-extra')

const componentTemplate = (name, svg) =>
  `
export default {
  name: '${name}',

  props: {
    size: {
      type: String,
      default: '24',
      validator: (s) => (!isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length -1)) && s.slice(-1) === 'x' )
    }
  },

  functional: true,

  render(h, ctx) {
    const size = ctx.props.size.slice(-1) === 'x'
      ? ctx.props.size.slice(0, ctx.props.size.length -1) + 'em'
      : parseInt(ctx.props.size) + 'px';

    const attrs = ctx.data.attrs || {}
    attrs.width = attrs.width || size
    attrs.height = attrs.height || size
    ctx.data.attrs = attrs

    return ${svg.replace(/<svg([^>]+)>/, '<svg$1 {...ctx.data}>')}
  }
}
`.trim()

const handleComponentName = name => name.replace(/(^\d+)/g, 'i$&').replace(/(\+)/g, 'plus')

const icons = Object.keys(simple).map(name => ({
  name,
  pascalCasedComponentName: pascalCase.pascalCase(`${handleComponentName(name)}-icon`)
}))

Promise.all(
  icons.map(icon => {
    const svg = simple[icon.name].svg
    const component = componentTemplate(icon.pascalCasedComponentName, svg)
    const filepath = `./src/components/${icon.pascalCasedComponentName}.js`
    return fs
      .ensureDir(path.dirname(filepath))
      .then(() => fs.writeFile(filepath, component, 'utf8'))
  })
).then(() => {
  const main = icons
    .map(
      icon =>
        `export { default as ${icon.pascalCasedComponentName} } from '../src/components/${icon.pascalCasedComponentName}'`
    )
    .join('\n\n')
  return fs.outputFile('./src/index.js', main, 'utf8')
})
