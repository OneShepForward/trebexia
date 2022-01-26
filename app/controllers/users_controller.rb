class UsersController < ApplicationController

    def create
        user = User.create!(user_params)
        # session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        if current_user
            render json: current_user, status: :ok
        else
            render json: "No one is logged in", status: :unauthorized
        end
    end

    def destroy 
        user = User.find(params[:id])
        user.destroy 
        head :no_content
    end

    private

    def user_params
        params.permit(:username, :password_digest)
    end
end
