exec = require('child_process').execSync

# Run a command, like Rake's sh.
sh = (command, env) ->
  exec command, stdio: 'inherit', env: {...process.env, ...env}

task 'clean', 'remove all generated files', -> clean
clean = ->
  sh 'rm -rvf dist'

task 'format', 'formats package.json', ->
  sh 'yarn run sort-package-json'

option '-p', '--production', 'run webpack in production mode'
task 'build', 'build project', (options) ->
  invoke 'clean'
  build options

build = (options) ->
  if options.production is true
    sh "yarn run build --env production"
  else
    sh "yarn run build"

task 'deploy', 'deploy this gh-pages site', (options) ->
  invoke 'clean'
  build {production: true}
  sh 'yarn run gh-pages -b master -d dist', {NODE_DEBUG: 'gh-pages'}

task 'test', 'run the tests', ->
  invoke 'build'
  sh 'yarn run test'

task 'serve', 'run the site locally with hot-module replacement', ->
  invoke 'build'
  sh 'yarn run dev-server'
