FROM ruby:3.3

RUN apt-get update -qq && apt-get install -y curl gpg build-essential libssl-dev libreadline-dev zlib1g-dev libsqlite3-dev libffi-dev libyaml-dev nodejs yarn

RUN mkdir /Recipy

WORKDIR /Recipy

COPY Gemfile /Recipy/Gemfile
COPY Gemfile.lock /Recipy/Gemfile.lock

RUN bundle install

COPY . /Recipy