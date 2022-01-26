class User < ApplicationRecord
    has_secure_password
    
    has_many :scores

    validates :username, presence: true, uniqueness: true, length: { minimum: 3, maximum: 30 }
end
