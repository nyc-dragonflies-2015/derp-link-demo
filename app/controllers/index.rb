get '/' do
  erb :index
end

get '/derp-link' do
  erb  :'_derp-link', layout: false
end
