class Api::BrandsController < ApplicationController
    def index
        brands = Brand.all
        render json: brands, each_serializer: BrandSerializer
    end

    def create
        brand = Brand.new(brand_params)
        if brand.save
            render json: brand, each_serializer: BrandSerializer
        else
            render json: {error: 'Ooops! There was an error adding the brand.'}
        end
    end

    def show
        brand = Brand.find(params[:id])
        render json: brand, each_serializer: BrandSerializer
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
