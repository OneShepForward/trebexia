class GamesController < ApplicationController

    def index
        games = Game.all
        render json: games
    end

    ## This will populate the questions of the game we 
    ## want to render.
    def game_to_render
        game = Game.find(params[:id])
        render json: game, serializer: GameQuestionsSerializer
    end
end
