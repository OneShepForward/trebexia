class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index, :show]

    def index 
        users = User.all
        render json: users
    end

    def create
        user = User.create!(user_params)
        # if user.valid?
            render json: user, status: :created
            session[:user_id] = user.id
        # else
        # render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        # end
    end

    def show
        # byebug
        user = User.find(params[:id])
        
        if current_user
            render json: current_user, status: :ok
        elsif user
            render json: user 
        else
            render json: {error: "No one is logged in"}, status: :unauthorized
        end
    end

    ## from first authenticate lesson
    # def show
    #     user = User.find_by(id: session[:user_id])
    #     if user
    #       render json: user
    #     else
    #       render json: { error: "Not authorized" }, status: :unauthorized
    #     end
    #   end

    def destroy 
        user = User.find(params[:id])
        user.destroy 
        head :no_content
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
