class Influencer < ApplicationRecord
    has_many :influencers_products
    has_many :products, through: :influencers_products
end
