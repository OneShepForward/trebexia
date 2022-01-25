Rails.application.routes.draw do
  
  resources :scores
  resources :games
  resources :users
  resources :questions
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
