class EmployeesController < ApplicationController

  def index
    render json: Employee.all
  end

  private
  def employee_params
    params.require(:employee).permit(:firstname, :middlename, :lastname, :homephone, :workphone, :ssn, :birthday, :email)
  end

end
