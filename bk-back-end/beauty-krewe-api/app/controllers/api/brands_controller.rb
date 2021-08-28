class Api::BrandsController < ApplicationController
    def index
        brands = Brand.all
        render json: BrandSerializer.new(brands)
    end

    def create

    end

    def show

    end

    private
    def brand_params
        params.require(:brand).permit(:name)
    end
end
