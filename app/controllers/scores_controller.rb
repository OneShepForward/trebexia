class ScoresController < ApplicationController
    skip_before_action :authorize

    def index 
        scores = Score.all.order(score: :desc)
        render json: scores 
    end

    def show
        game = Game.find(params[:id])
        render json: game.scores
    end

    def create
        score = current_user.scores.create!(score_params)
        render json: score, status: :created
    end

    private

    def score_params
        params.permit(:score, :game_id)
    end
end
