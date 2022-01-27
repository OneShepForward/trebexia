class QuestionsController < ApplicationController
    skip_before_action :authorize

    def index
        questions = Question.all
        render json: questions
    end

    def show
        question = Question.find(params[:id])
        render json: question
    end
end
