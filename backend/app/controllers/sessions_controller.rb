class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: :login
  def new
  end

  def login
    user = User.find_by(name: params[:name])

    if user && user.authenticate(params[:password])
      # ログイン成功時: JWTトークンを返す
      # token = generate_jwt(user)
      # render json: { token: token }, status: :ok
      render json: { message: 'Login successful' },status: :ok
    else
      #   # ログイン失敗時: エラーメッセージを返す
      #   render json: { error: 'Invalid email/password combination' }, status: :unauthorized
      render json: {error: 'Invalid name/password combination' },status: :unauthorized
    end
  end

end
