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

task 'build', 'build project', ->
  sh 'yarn run build'

task 'deploy', 'deploy this gh-pages site', ->
  # invoke 'build'
  # NODE_DEBUG=gh-pages
  sh 'yarn run gh-pages -b master -d build'

task 'test', 'run the tests', ->
  sh 'yarn run test'

task 'serve', 'run the site locally with hot-module replacement', ->
  sh 'yarn run dev-server'
