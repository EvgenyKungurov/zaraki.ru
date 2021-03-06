class Post < ApplicationRecord
  validates :title, presence: true, length: {minimum: 5}
  validates :content, presence: true, length: {minimum: 5}
  validates :post_type, presence: true

  belongs_to :user
  paginates_per 7
end
