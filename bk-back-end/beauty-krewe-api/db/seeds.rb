# influencers = Influencer.create([
# tati = Influencer.create(name: 'Tati Westbrook'),
#     {name: 'RawBeautyKristi'},
#     {name: 'SimplyNailogical'},
#     {name: 'Jaclyn Hill'}
# ])

# brands = Brand.create([
#     {name: 'High End Brand'},
#     {name: 'Affordable Brand'}
# ])

# products = Product.create([
#     {name: 'Fake Product 1', price: '2.99', rating: '3.5', description: 'fake description 1', brand_id: 2},
#     {name: 'Fake Product 2', price: '14.95', rating: '5', description: 'fake description 2', brand_id: 1},
#     {name: 'Fake Product 3', price: '7.50', rating: '2.5', description: 'fake description 3', brand_id: 2},
#     {name: 'Fake Product 4', price: '27.50', rating: '4.5', description: 'fake description 4', brand_id: 1}
# ])


    tati = Influencer.create(name: 'Tati Westbrook')
    kristi = Influencer.create(name: 'RawBeautyKristi')
    nail = Influencer.create(name: 'SimplyNailogical')
    jaclyn = Influencer.create(name: 'Jaclyn Hill')
    
    # he = Brand.create(name: 'High End Brand')
    # ab = Brand.create(name: 'Affordable Brand')
   
    
    # f1 = Product.create(name: 'Fake Product 1', price: '2.99', rating: '3.5', description: 'fake description 1', brand_id: 2)
    # f2 = Product.create(name: 'Fake Product 2', price: '14.95', rating: '5', description: 'fake description 2', brand_id: 1)
    # f3 = Product.create(name: 'Fake Product 3', price: '7.50', rating: '2.5', description: 'fake description 3', brand_id: 2)
    # f4 = Product.create(name: 'Fake Product 4', price: '27.50', rating: '4.5', description: 'fake description 4', brand_id: 1)

    # t.products << [f1, f2, f3]
    # kristi.products << [f4, f2]
    # nail.products << [f1, f4, f2]
    # jaclyn.products << [f1, f2, f3, f4]

    require 'rest-client'


        response = RestClient.get 'http://makeup-api.herokuapp.com/api/v1/products.json'
        json = JSON.parse response


            json.map do |product|
                # newBrand = Brand.create(name: "#{product["brand"]}")
                newBrand = Brand.find_or_create_by(name: "#{product["brand"]}")
                Product.create(
                    name: "#{product["name"]}", 
                    price: "#{product["price"]}", 
                    rating: "#{product["rating"]}", 
                    description: "#{product["description"]}", 
                    brand: newBrand)
            end

        InfluencersProduct.create(brand_id: 1, influencer_id:1)
        InfluencersProduct.create(brand_id: 2, influencer_id:2)
        InfluencersProduct.create(brand_id: 3, influencer_id:3)
    
