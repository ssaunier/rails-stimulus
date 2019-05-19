Rails.application.routes.draw do
  root 'posts#index'
  resources :posts, except: :index do
    resources :comments, only: [ :create, :destroy ]
  end
end
