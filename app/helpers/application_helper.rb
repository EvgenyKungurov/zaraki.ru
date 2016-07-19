module ApplicationHelper
  def can_do_it?
    admin && can_visible?
  end

  def admin
    current_user&.email == "evgenii.kungurov@gmail.com"
  end

  def can_visible?
    cookies[:edit_mode] == "true"
  end
end
