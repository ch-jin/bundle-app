class Api::TwitchChannelsController < ApplicationController
  def index
  end

  def show
  end

  def create
  end

  def destroy
  end

  private

  def twitch_channel_params
    params.require(:twitch_channel).permit(:name, :url)
  end
end