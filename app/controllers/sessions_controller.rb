class SessionsController < ApplicationController
    def login
        # find user by username
        user = User.find_by_username(params[:username])

        # does the user exist? Handled by the rescue_from

        if user.authenticate(params[:password])

            # log the user in
            session[:user_id] = user.id

            # send successful response
            render json: user, status: :ok
        else
            render json: { error: "Username or Password incorrect" }, status: :unauthorized
        end
    end

    def logout
        session.delete :user_id
    end
end
