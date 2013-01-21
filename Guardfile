# Mirror: Copy resources to the build directory
guard :mirror,
paths: ['resources/html'],
dest: 'build' do
  watch(%r{^resources/html/(.+\..+)}) { |m| m[1] }
end
guard :mirror,
paths: ['resources/images'],
dest: 'build/images' do
  watch(%r{^resources/images/(.+\..+)}) { |m| m[1] }
end
guard :mirror,
paths: ['resources/icons'],
dest: 'build' do
  watch(%r{^resources/icons/(.+\..+)}) { |m| m[1] }
end

# Compass: Converts SASS to CSS
puts `compass compile -c config/compass.rb --time --quiet` # Compile on start.
guard 'compass', 
:configuration_file => 'config/compass.rb' do
  watch(%r{(.*)\.s[ac]ss$})
end

# Handlebars: Compiles Handlebars Templates
guard 'handlebars', 
:input        => 'app/templates', 
:output       => 'temp/templates', 
:emberjs      => true,
:all_on_start => true,
:hide_success => true

# JSHint: Validates JavaScript
guard 'jshint-node', 
:config            => 'config/jshint.json', 
:notify_on_success => false,
:notify_on_failure => true do
  watch(%r{^app/.*\.js$})
end

# Jammit: Compile and Compress JavaScript
guard :jammit, 
:config_path      => 'config/jammit.yml', 
:output_folder    => 'build/js',
:package_on_start => true,
:hide_success     => true do
  watch(%r{^app/(.*)\.js$})
  watch(%r{^temp/templates/(.*)\.js$})
end

# Jasmine: BDD Testing for JavaScript
guard 'jasmine-headless-webkit', 
:jasmine_config => 'config/jasmine.yml',
:all_on_start   => true do
  watch(%r{^app/(.*)\.js}) { |m| "spec/#{m[1]}_spec.js" }
  watch(%r{^spec/(.*)\.js})
end

# Webrick: Starts a webrick server
guard 'webrick',
:host => 'localhost',
:port => '3000', 
:docroot => 'build' do
end