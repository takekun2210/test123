Rails.application.routes.draw do
  root "welcome#index"

  devise_for :users
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/mytrips/:trip_id/plan', to: "mytrips#plan"

end
