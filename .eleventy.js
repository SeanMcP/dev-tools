module.exports = function (eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true)

  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk')
  eleventyConfig.addLayoutAlias('example', 'layouts/example.njk')

  eleventyConfig.addCollection('tagList', require('./src/_includes/collections/getTagList'))

  eleventyConfig.addFilter('log', value => {
    console.log(value)
  })

  eleventyConfig.addFilter('tags', list => list.filter(item => item !== 'examples'))

  eleventyConfig.addPassthroughCopy('src/css')
  eleventyConfig.addPassthroughCopy('src/img')
  eleventyConfig.addPassthroughCopy('src/js')

  return {
    templateFormats: ['md', 'njk', 'html', 'liquid'],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about it.
    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for URLs (it does not affect your file structure)
    pathPrefix: '/dev-tools/',
    passthroughFileCopy: true,
    markdownTemplateEngine: 'njk',
    dir: {
      input: './src',
      includes: '_includes',
      data: '_data',
      output: './docs'
    }
  }
}