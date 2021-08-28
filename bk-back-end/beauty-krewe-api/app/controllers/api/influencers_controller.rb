class Api::InfluencersController < ApplicationController

    def index
        influencers = Influencer.all
        render json: influencers, each_serializer: InfluencerSerializer
    end

    def create
        influencer = Influencer.new(name: params[:name])

        if influencer.save
            render json: influencer, each_serializer: InfluencerSerializer, status: :accepted
        else
            render json: {error: 'Oops! There was an error adding the influencer.'}, status: :unprocessable_entity
        end
    end

    def show
        influencer = Influencer.find(params[:id])
        render json: influencer, each_serializer: InfluencerSerializer
    end

    def destroy
        influencer = Influencer.find(params[:id])
        influencer.destroy
    end

    private
    def influencer_params
        params.require(:influencer).permit(:name)
    end
end
