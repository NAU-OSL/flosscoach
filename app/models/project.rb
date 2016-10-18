class Project < ActiveRecord::Base

	has_many :widgets

  	has_and_belongs_to_many :owners, class_name: 'User'

def self.search(search)
  if search
    Project.where('name LIKE ?', "%#{search}%")
  else
    Project.all
  end
end


end
