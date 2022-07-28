Rails.application.routes.draw do
  namespace :api do
    resources :games, only: %i[index create show]
    resources :scores, only: [:index]
  end
  root 'app#index'

  get '*path', to: 'app#index'
end
