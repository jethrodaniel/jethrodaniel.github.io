{spawn} = require 'child_process'

# Run a command, like Rake's sh.
#
sh = (command, env) ->
  [command, args...] = command.split ' '
  p = spawn command, args, stdio: 'inherit', env: {...process.env, ...env}
  p.on 'close', (code) =>
    console.log "`#{command} #{args.join ' '}`: #{if code is 0 then '✓' else 'x'}"

task 'clean', 'remove all generated files', ->
  # sh 'rm -rf ./dist/*.js*' why doesn't this work? :(
  sh 'rm -f dist/bundle.js dist/bundle.js.map'

task 'format', 'formats package.json', ->
  sh 'yarn run sort-package-json'

option '-p', '--production', 'run webpack in production mode'
task 'build', 'build project', (options) ->
  invoke 'clean'
  if options.production
    sh "yarn run build --env production"
  else
    sh "yarn run build"

task 'deploy', 'deploy this gh-pages site', (options) ->
  sh 'yarn run build -p'
  sh 'yarn run gh-pages -b master -d dist', {NODE_DEBUG: 'gh-pages'}

task 'test', 'run the tests', ->
  invoke 'build'
  sh 'yarn run test'

task 'serve', 'run the site locally with hot-module replacement', ->
  invoke 'build'
  sh 'yarn run dev-server'
