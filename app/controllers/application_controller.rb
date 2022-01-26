class ApplicationController < ActionController::API
  include ActionController::Cookies

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

  def current_user # needs to change once authentication is set up
    User.find_by_username("Jimbo")
    # User.find_by_id(session[:user_id])
  end

  private

  def render_not_found
    render json: { error: "Record not found" }, status: :not_found
  end

  def render_invalid(exception)
    render json: {error: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

end
