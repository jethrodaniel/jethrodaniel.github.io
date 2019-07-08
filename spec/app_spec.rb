# frozen_string_literal: true

require 'spec_helper'

describe 'App' do
  include Capybara::DSL
  include Capybara::Minitest::Assertions

  before do
    Capybara.reset_sessions!

    # To open a browser, pass `HEADLESS=false`
    Capybara.default_driver = ENV['HEADLESS'] == 'false' \
      ? :selenium_chrome
      : :selenium_chrome_headless

    @parent_dir = Pathname.new(__dir__).parent
    @index = @parent_dir + 'index.html'

    visit "file://#{@index}"
  end

  it 'has a like that button' do
    page.must_have_button 'Like'
  end

  context 'after clicking the like button' do
    it 'shows new text' do
      click_on 'Like'
      page.must_have_text 'You liked this.'
    end
  end
end
