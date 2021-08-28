class InfluencersProduct < ApplicationRecord
    belongs_to :influencer
    belongs_to :product
end
