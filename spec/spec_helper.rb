# frozen_string_literal: true

require 'minitest/spec'
require 'minitest/autorun'

require 'minitest/reporters'
Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new

require 'capybara/minitest'
require 'capybara/minitest/spec'

module Minitest::Spec::DSL
  def context *_
    yield
  end
end
