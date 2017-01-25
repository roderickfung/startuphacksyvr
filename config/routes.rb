Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'landing#index'
  get '/about' => 'landing#about', as: :about
  get '/schedule' => 'landing#schedule', as: :schedule
  get '/resources' => 'landing#resources', as: :resources

end
