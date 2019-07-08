# frozen_string_literal: true

unless RUBY_ENGINE == 'opal'
  raise <<~MSG
    RUBY_ENGINE != 'opal'

    This must be run from Opal!

    For details, see https://github.com/opal/opal
  MSG
end

require 'native'
require 'react/umd/react.production.min.js'
require 'react-dom/umd/react-dom.production.min.js'
require 'react-router-dom/umd/react-router-dom.min.js'

require 'opal'
require 'opal-jquery'
require 'jquery/dist/jquery.min.js'

<<~`CODE`
  class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }

    render() {
      if (this.state.liked)
        return 'You liked this.';

      return React.createElement(
        'button',
        { onClick: () => this.setState({ liked: true }) },
        'Like'
      );
    }
  }
CODE

def render!
  %x{
    ReactDOM.render(
      React.createElement(#{`LikeButton`}),
      document.querySelector('#like_button_container')
    );
  }
end

Document.ready? do
  render!
end
