import {JSDOM} from 'jsdom'
import ReactTestUtils from 'react-dom/test-utils'

# move into beforeEach and flip global.window.close on to improve
# cleaning of environment during each test and prevent memory leaks
document = new JSDOM('<html><body></body></html>')

beforeEach ->
    @document = document
    global.document = @document
    global.window = @document.parentWindow

afterEach ->
    # setting up and closing a "window" every run is really heavy
    # it prevents contamination between tests and prevents memory leaks
    # global.window.close()
    #
import '../src/app.coffee'

describe 'app', ->
  describe '#truth()', ->
    it 'should return the Boolean value true', ->
      true.should.be.true
