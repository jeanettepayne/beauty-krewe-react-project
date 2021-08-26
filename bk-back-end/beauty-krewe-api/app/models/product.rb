class Product < ApplicationRecord
    belongs_to :brand
    has_and_belongs_to_many :influencers
end
