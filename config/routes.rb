Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/mytrips/:trip_id/plan', to: "mytrips#plan"

end
