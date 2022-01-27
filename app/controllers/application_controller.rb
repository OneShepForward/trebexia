class ApplicationController < ActionController::API
  include ActionController::Cookies

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

  # def current_user
  #   # User.find_by_username("Jimbo")
  #   User.find_by_id(session[:user_id])
  # end


  ## this will be used if we want to implement authorize before our actions by default, in conjunction with def authorize. 
  before_action :authorize

  private

  def authorize
    # @current_user = User.find_by(id: session[:user_id])

    # render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user

    ## let's try this
    # @current_user = User.find_by(id: session[:user_id])

    render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
  end

  def render_not_found
    render json: { error: "Record not found" }, status: :not_found
  end

  def render_invalid(exception)
    render json: {error: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

end
