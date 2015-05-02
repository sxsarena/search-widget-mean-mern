table "hotels" do
	column "id", :key, :as => :integer
	column "city", :string
	column "hotel", :string
end

table "availability" do
	column "id", :key, :as => :integer
	column "hotel_id", :integer, :references => :hotels
	column "date", :datetime
	column "status", :integer
end