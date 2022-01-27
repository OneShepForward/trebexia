Rails.application.routes.draw do
  
  resources :scores
  resources :games
  resources :users
  resources :questions

  get '/game_to_render/:id', to: "games#game_to_render"
  get '/me', to: "users#show"
  post '/login_the_user', to: "sessions#login_the_user"
  delete '/logout', to: "sessions#logout"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
