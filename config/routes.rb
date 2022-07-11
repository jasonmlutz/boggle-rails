Rails.application.routes.draw do
  namespace :api do
    resources :games, only: [:create, :show]
  end
  root 'app#index'

  get '*path', to: 'app#index'
end
