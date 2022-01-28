class SessionsController < ApplicationController
    skip_before_action :authorize, only: :login_the_user
    
    ## Code from https://learning.flatironschool.com/courses/4552/pages/password-protection?module_item_id=346182
        def login_the_user
            user = User.find_by(username: params[:username])
            if user&.authenticate(params[:password])
              session[:user_id] = user.id
              render json: user, status: :created
            else
              render json: { error: "Invalid username or password" }, status: :unauthorized
            end
        end
    
    def logout
        session.delete :user_id
        head :no_content
    end

end

## old login code

 # def login
    #     # # find user by username
    #     # user = User.find_by_username(params[:username])

    #     # # does the user exist? Handled by the rescue_from

    #     # if user.authenticate(params[:password])

    #     #     # log the user in
    #     #     session[:user_id] = user.id

    #     #     # send successful response
    #     #     render json: user, status: :ok
    #     # else
    #     #     render json: { error: "Username or Password incorrect" }, status: :unauthorized
    #     # end

    ## This section is if we'd just like to login with a username.

    #     user = User.all.find_by(username: params[:username])

    #     session[:user_id] = user.id

    #     render json: user, status: :ok
    # end
