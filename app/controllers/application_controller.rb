class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception, except: [:sign_in, :sign_out]
end
