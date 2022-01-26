class ScoresController < ApplicationController

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
