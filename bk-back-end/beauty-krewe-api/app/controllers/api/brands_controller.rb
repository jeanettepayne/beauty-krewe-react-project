class Api::BrandsController < ApplicationController
    def index
        brands = Brand.all
        render json: BrandSerializer.new(brands)
    end

    def create
        brand = Brand.new(brand_params)
        if brand.save
            render json: BrandSerializer.new(brand)
        else
            render json: {error: 'Ooops! There was an error adding the brand.'}
        end
    end

    def show
        brand = Brand.find(params[:id])
        render json: BrandSerializer.new(brand)
    end

    def destroy
        brand = Brand.find(params[:id])
        brand.destroy
    end

    private

    def brand_params
        params.require(:brand).permit(:name)
    end
end
