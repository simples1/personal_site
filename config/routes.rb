Rails.application.routes.draw do
  devise_for :users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  root to: 'welcome#index'
  get '*path', to: 'welcome#index'
end
