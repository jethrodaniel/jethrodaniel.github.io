{spawn} = require 'child_process'

# Run a command, like Rake's sh.
#
# Passes args to spawn, and accepts a single string as shorthand
#
#   sh 'coffee', '--version'
#   sh 'coffee --version'
#
sh = (command, args...) ->
  if args.length is 0
    [command, args...] = command.split ' '
  process = spawn command, args, stdio: 'inherit'
  process.on 'close', (code) =>
    console.log "`#{command} #{args.join ' '}`: #{if code is 0 then '✓' else 'x'}"

task 'build', 'Build project from coffeescript -> js', ->
  sh 'yarn run coffee --compile src/'
  sh 'yarn run react-scripts build'

task 'start', 'start react app', ->
  invoke 'build'
  sh 'yarn run react-scripts start'

task 'eject', 'ejects this app from create-react-app', ->
  sh 'yarn run react-scripts eject'

task 'deploy', 'deploy this gh-pages site', ->
  invoke 'build'
  # NODE_DEBUG=gh-pages
  sh 'yarn run gh-pages -b master -d build'

task 'serve', 'run the site', ->
  invoke 'build'
  sh 'yarn run serve -s build'

task 'test', 'run the tests', ->
  invoke 'build'
  sh 'yarn run react-scripts test --env=jsdom'
