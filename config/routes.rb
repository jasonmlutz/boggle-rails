Rails.application.routes.draw do
  root 'app#index'

  get '*path', to: 'app#index'
end
