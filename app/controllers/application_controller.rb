class ApplicationController < ActionController::API
  include ActionController::Cookies

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

## this will be used if we want to implement authorize before our actions by default, in conjunction with def authorize. 
before_action :authorize

  def current_user
    ## using for dev purposes
    current_user = User.find_by_username("Shep")
    
    ## For use in production
    # User.find_by_id(session[:user_id])
    
    ## alternative code
    # @current_user ||= User.find_by_id(session[:user_id])
    
  end

  private

  def authorize
    render json: {error: ["Not authorized"]}, status: :unauthorized unless current_user 
  end

  def render_not_found
    render json: { error: "Record not found" }, status: :not_found
  end

  def render_invalid(exception)
    render json: {error: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

end
