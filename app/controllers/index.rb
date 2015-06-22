get '/' do
  erb :index
end

get '/derp-link' do
  locals =  { url: rand > 0.5 ? 'http://devbootcamp.com' : 'http://stevengharms.com' }
  erb  :'_derp-link', layout: false, locals: locals
end
