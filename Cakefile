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
  sh 'yarn run build'

task 'start', 'start react app', ->
  sh 'yarn run start'

task 'deploy', 'deploy this gh-pages site', ->
  # invoke 'build'
  # NODE_DEBUG=gh-pages
  sh 'yarn run gh-pages -b master -d build'

task 'test', 'run the tests', ->
  sh 'yarn run test'

task 'serve', 'run the local server', ->
  sh 'yarn run serve'
