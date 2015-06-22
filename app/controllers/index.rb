get '/' do
  erb :index
end

get '/derp-link' do
  "<li><a class='derp-link' href='http://iluvisis.com'>derp-element</a></li>"
end
