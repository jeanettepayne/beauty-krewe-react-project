class Product < ApplicationRecord
    belongs_to :brand
    has_many :influencers_products
    has_many :influencers, through: :influencers_products

    validates :name, presence: true
    validates :price, presence: true
    validates :description, presence: true 

end
