require 'fileutils'

task :clean do
  FileUtils.rm_rf 'build'
end

task :build => [:clean] do
  FileUtils.mkdir 'build'
  File.open('build/index.html','w+') do |output_file|
    output_file.puts File.read('index.html')
    .gsub(/\<!\-\- javascripts \-\-\>(.*)\<!\-\- javascripts \-\-\>/m, '<script type="text/javascript" src="./menu.js"></script>')
    .gsub(/\.\/stylesheets\/application\.css/, './application.css')
  end
  File.open('build/options.html','w+') do |output_file|
    output_file.puts File.read('options.html')
    .gsub(/\<!\-\- javascripts \-\-\>(.*)\<!\-\- javascripts \-\-\>/m, '<script type="text/javascript" src="./options.js"></script>')
    .gsub(/\.\/stylesheets\/application\.css/, './application.css')
  end
  File.open('build/play.html','w+') do |output_file|
    output_file.puts File.read('play.html')
      .gsub(/\<!\-\- javascripts \-\-\>(.*)\<!\-\- javascripts \-\-\>/m, '<script type="text/javascript" src="./play.js"></script>')
      .gsub(/\.\/stylesheets\/application\.css/, './application.css')
  end
  FileUtils.cp_r 'images', 'build'
  FileUtils.cp_r 'gfx', 'build'
  File.open('build/application.css','w+') do |output_file|
    output_file.puts File.read('stylesheets/application.css').gsub('../', '')
  end
  javascripts = File.read('index.html').scan(/\<script type="text\/javascript" src="(.*)"\>\<\/script\>/)
  sh "uglifyjs #{javascripts.join(' ')} --wrap -c -o build/menu.js"
  javascripts = File.read('options.html').scan(/\<script type="text\/javascript" src="(.*)"\>\<\/script\>/)
  sh "uglifyjs #{javascripts.join(' ')} --wrap -c -o build/options.js"
  javascripts = File.read('play.html').scan(/\<script type="text\/javascript" src="(.*)"\>\<\/script\>/)
  sh "uglifyjs #{javascripts.join(' ')} --wrap -c -o build/play.js"
end

task :run => [:build] do
  sh 'open build/index.html'
end

task :serve => [:build] do
  sh 'cd build; python -mSimpleHTTPServer 8080'
end

task :default => :run