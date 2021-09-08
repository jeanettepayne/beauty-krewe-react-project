Rails.application.routes.draw do
  namespace :api do
    root 'homepage#index'
    # get 'homepage/index'
    resources :influencers
    resources :products
    resources :brands
    resources :influencers_products, :path => :influencersproducts, :as => :influencersproducts
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
