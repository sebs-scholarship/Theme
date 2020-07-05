# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "SSF-Theme"
  spec.version       = "0.1.0"
  spec.authors       = ["Levi Muniz"]
  spec.email         = ["levi.muniz17@gmail.com"]

  spec.summary       = "Styles for SSF sites"

  spec.files         = Dir['assets/**/*']

  spec.add_runtime_dependency "jekyll", "~> 4.1"

  spec.add_development_dependency "bundler", "~> 2.1"
  spec.add_development_dependency "rake", "~> 13.0"
end
